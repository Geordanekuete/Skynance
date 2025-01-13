import React, { useState, useRef } from 'react';
import { User, Mail, Upload } from 'lucide-react';
import { useProfile } from '../../hooks/useProfile';

export function ProfileSettings() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { updateProfile, uploadAvatar, isLoading, error } = useProfile();
  const [formData, setFormData] = useState({
    full_name: '',
    avatar_url: ''
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const avatarUrl = await uploadAvatar(file);
      setFormData(prev => ({ ...prev, avatar_url: avatarUrl }));
    } catch (err) {
      console.error('Failed to upload avatar:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateProfile(formData);
    } catch (err) {
      console.error('Failed to update profile:', err);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6 dark:text-white">Profile Settings</h2>

      {error && (
        <div className="mb-4 bg-red-50 text-red-600 p-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden">
              {formData.avatar_url ? (
                <img src={formData.avatar_url} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <User className="w-10 h-10 text-indigo-600" />
              )}
            </div>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-0 right-0 p-1 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
            >
              <Upload className="w-4 h-4" />
            </button>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={formData.full_name}
            onChange={e => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
            className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        >
          {isLoading ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
}