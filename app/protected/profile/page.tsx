import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { getCurrentUserProfile, updateCurrentUserProfile } from '@/lib/supabase/profiles';
import { ProfileForm } from '@/components/profile-form';
import type { ProfileFormData } from '@/types';

export default async function ProfilePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/login');
  }

  const profile = await getCurrentUserProfile();

  const handleProfileUpdate = async (formData: ProfileFormData) => {
    'use server';
    
    const { profile: updatedProfile, error } = await updateCurrentUserProfile(formData);
    
    if (error) {
      throw new Error(error);
    }
    
    // In a real app, you might want to revalidate the page or show a success message
    // For now, the form will just update
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Profile Settings</h1>
          <p className="text-muted-foreground mt-2">
            Manage your profile information and preferences.
          </p>
        </div>

        {/* Profile Information */}
        <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Current Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Email:</span> {profile?.email || 'Not set'}
            </div>
            <div>
              <span className="font-medium">First Name:</span> {profile?.first_name || 'Not set'}
            </div>
            <div>
              <span className="font-medium">Avatar URL:</span> {profile?.avatar_url || 'Not set'}
            </div>
            <div>
              <span className="font-medium">Profile Created:</span> {
                profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : 'Unknown'
              }
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <ProfileForm 
          profile={profile} 
          onSubmit={handleProfileUpdate}
        />

        {/* Avatar Preview */}
        {profile?.avatar_url && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Avatar Preview</h3>
            <div className="flex items-center space-x-4">
              <img
                src={profile.avatar_url}
                alt="Avatar preview"
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="text-sm text-muted-foreground">
                This is how your avatar will appear to other users.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 