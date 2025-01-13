import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ProfileSettings } from '../components/settings/ProfileSettings';
import { NotificationSettings } from '../components/settings/NotificationSettings';
import { ExportOptions } from '../components/settings/ExportOptions';
import { Moon, Sun } from 'lucide-react';
import { LanguageSelector } from '../components/LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

export function Settings() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{t('settings')}</h1>
        <div className="flex items-center gap-4">
          <LanguageSelector />
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === 'dark' ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-600" />}
          </button>
        </div>
      </div>
      <div className="grid gap-6">
        <ProfileSettings />
        <NotificationSettings />
        <ExportOptions />
      </div>
      
      <footer className="text-center text-gray-500 dark:text-gray-400 mt-8 py-4">
        © 2025 Skynance. All rights reserved.
      </footer>
    </div>
  );
}