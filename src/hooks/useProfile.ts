import { useState } from 'react';
import { supabase } from '../lib/supabase';

export interface Profile {
  id: string;
  full_name: string;
  avatar_url: string;
}

export function useProfile() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateProfile = async (profile: Partial<Profile>) => {
    try {
      setIsLoading(true);
      setError(null);

      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) throw new Error('No user logged in');

      const { data, error: err } = await supabase
        .from('users')
        .update(profile)
        .eq('id', userData.user.id)
        .select()
        .single();

      if (err) throw err;
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update profile');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const uploadAvatar = async (file: File) => {
    try {
      setIsLoading(true);
      setError(null);

      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) throw new Error('No user logged in');

      const fileExt = file.name.split('.').pop();
      const filePath = `${userData.user.id}-${Math.random()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      await updateProfile({ avatar_url: urlData.publicUrl });
      return urlData.publicUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload avatar');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateProfile,
    uploadAvatar,
    isLoading,
    error
  };
}