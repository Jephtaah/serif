/**
 * Profile table interface
 * Represents the extended user data stored in the profiles table
 * Note: id serves as both primary key and foreign key to auth.users.id
 */
export interface Profile {
  id: string; // UUID that references auth.users.id
  first_name: string | null;
  avatar_url: string | null;
  email: string;
  created_at: string;
  updated_at: string;
}

/**
 * Profile insert interface
 * Used when creating a new profile (excludes auto-generated fields)
 */
export interface ProfileInsert {
  id: string; // Must match auth.users.id
  first_name?: string | null;
  avatar_url?: string | null;
  email: string;
}

/**
 * Profile update interface
 * Used when updating profile data (all fields optional except id constraints)
 */
export interface ProfileUpdate {
  first_name?: string | null;
  avatar_url?: string | null;
  email?: string;
}

/**
 * Profile form data interface
 * Used for forms and user input validation
 */
export interface ProfileFormData {
  first_name?: string;
  avatar_url?: string;
}

/**
 * Type alias for easier usage with Supabase generated types
 */
export type ProfileRow = Profile;
export type ProfileInsertData = ProfileInsert;
export type ProfileUpdateData = ProfileUpdate; 