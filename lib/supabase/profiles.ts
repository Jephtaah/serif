/**
 * Profile utility functions for interacting with the profiles table
 * These functions provide type-safe operations for profile management
 */

import { createClient } from './server';
import type { Profile, ProfileUpdate, ProfileFormData } from '@/types';

/**
 * Get the current user's profile
 * Returns null if no profile exists or user is not authenticated
 */
export async function getCurrentUserProfile(): Promise<Profile | null> {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  return profile;
}

/**
 * Update the current user's profile
 * Only allows updating fields that the user should be able to modify
 */
export async function updateCurrentUserProfile(
  updates: ProfileFormData
): Promise<{ profile: Profile | null; error: string | null }> {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { profile: null, error: 'User not authenticated' };
  }

  // Only allow updating specific fields
  const allowedUpdates: ProfileUpdate = {
    first_name: updates.first_name || null,
    avatar_url: updates.avatar_url || null,
  };

  const { data: profile, error } = await supabase
    .from('profiles')
    .update(allowedUpdates)
    .eq('id', user.id)
    .select()
    .single();

  if (error) {
    return { profile: null, error: error.message };
  }

  return { profile, error: null };
}

/**
 * Check if a profile exists for the current user
 */
export async function hasProfile(): Promise<boolean> {
  const profile = await getCurrentUserProfile();
  return profile !== null;
}

/**
 * Get profile by user ID (for admin use or public profiles)
 * Note: This will only work if RLS policies allow it
 */
export async function getProfileById(userId: string): Promise<Profile | null> {
  const supabase = await createClient();
  
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  return profile;
} 