/*
Migration: Create profiles table
Purpose: Store extended user data with automatic profile creation
Affected tables: profiles (new), auth.users (trigger)
Special considerations: 
- RLS enabled for user data protection
- Trigger function creates profile automatically on user signup
- Email field synced with auth.users.email
*/

-- Create profiles table
create table public.profiles (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users (id) on delete cascade not null unique,
  first_name text,
  avatar_url text,
  email text not null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

comment on table public.profiles is 'Extended user profile data linked to auth.users';
comment on column public.profiles.user_id is 'Foreign key reference to auth.users.id';
comment on column public.profiles.first_name is 'User first name (optional)';
comment on column public.profiles.avatar_url is 'URL to user avatar image (optional)';
comment on column public.profiles.email is 'User email address synced with auth.users';
comment on column public.profiles.created_at is 'Timestamp when profile was created';
comment on column public.profiles.updated_at is 'Timestamp when profile was last updated';

-- Enable Row Level Security
alter table public.profiles enable row level security;

-- Create RLS policies for authenticated users

-- Policy: Users can view their own profile
create policy "Users can view their own profile"
on public.profiles
for select
to authenticated
using ( (select auth.uid()) = user_id );

-- Policy: Users can insert their own profile
create policy "Users can insert their own profile"
on public.profiles
for insert
to authenticated
with check ( (select auth.uid()) = user_id );

-- Policy: Users can update their own profile
create policy "Users can update their own profile"
on public.profiles
for update
to authenticated
using ( (select auth.uid()) = user_id )
with check ( (select auth.uid()) = user_id );

-- Policy: Users can delete their own profile
create policy "Users can delete their own profile"
on public.profiles
for delete
to authenticated
using ( (select auth.uid()) = user_id );

-- Create function to handle profile creation
create or replace function public.handle_new_user()
returns trigger
security definer
set search_path = public
language plpgsql
as $$
begin
  insert into public.profiles (user_id, email)
  values (new.id, new.email);
  return new;
end;
$$;

comment on function public.handle_new_user() is 'Automatically creates a profile when a new user signs up';

-- Create trigger to automatically create profile on user signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

comment on trigger on_auth_user_created on auth.users is 'Trigger that creates a profile entry when a user signs up';

-- Create function to handle email updates
create or replace function public.handle_user_email_update()
returns trigger
security definer
set search_path = public
language plpgsql
as $$
begin
  -- Update profile email when auth.users email changes
  update public.profiles
  set email = new.email,
      updated_at = now()
  where user_id = new.id;
  return new;
end;
$$;

comment on function public.handle_user_email_update() is 'Syncs profile email when auth.users email is updated';

-- Create trigger to sync email updates
create trigger on_auth_user_email_updated
  after update of email on auth.users
  for each row execute procedure public.handle_user_email_update();

comment on trigger on_auth_user_email_updated on auth.users is 'Trigger that syncs email changes from auth.users to profiles';

-- Create index for performance optimization
create index profiles_user_id_idx on public.profiles using btree (user_id);

comment on index profiles_user_id_idx is 'Index to optimize profile lookups by user_id for RLS policies';

-- Create function to handle profile updates (sets updated_at)
create or replace function public.handle_profile_updated()
returns trigger
security definer
set search_path = public
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

comment on function public.handle_profile_updated() is 'Automatically updates the updated_at timestamp when profile is modified';

-- Create trigger for updated_at timestamp
create trigger on_profile_updated
  before update on public.profiles
  for each row execute procedure public.handle_profile_updated();

comment on trigger on_profile_updated on public.profiles is 'Trigger that updates updated_at timestamp on profile changes'; 