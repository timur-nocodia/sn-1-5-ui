'use client';

import { useTranslation } from 'react-i18next';
import { translations } from '../i18n';
import { useState } from 'react';
import './i18n';

export default function Home() {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-end mb-4">
            <select 
              value={currentLang}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="border rounded px-3 py-1"
            >
              {Object.keys(translations).map((lang) => (
                <option key={lang} value={lang}>
                  {lang.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          <h1 className="text-3xl font-bold mb-4">{t('common.loading')}</h1>
          
          <div className="space-y-4">
            <p>{t('auth.login')}</p>
            <p>{t('validation.required')}</p>
            <div className="flex space-x-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                {t('common.save')}
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded">
                {t('common.cancel')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
