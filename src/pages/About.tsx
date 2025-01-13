import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        {t('about')}
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3">
            <img
              src="/developer.jpg"
              alt="Geordane Kuete Yemeli"
              className="w-full rounded-lg shadow-md object-cover aspect-square"
            />
          </div>
          
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Skynance</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The only app you need to become the master of your financial life.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Developer Information
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p><strong>Name:</strong> Geordane Kuete Yemeli</p>
                <p><strong>Contact:</strong> +79068011498 / +237697824464</p>
                <p><strong>Role:</strong> Founder of Skypunch Academy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center text-gray-500 dark:text-gray-400 py-4">
        © 2025 Skynance. All rights reserved.
      </footer>
    </div>
  );
}