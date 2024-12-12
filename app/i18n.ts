import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from '../i18n';

const i18n = i18next.createInstance();

i18n
  .use(initReactI18next)
  .init({
    resources: Object.entries(translations).reduce((acc, [lang, translation]) => ({
      ...acc,
      [lang]: {
        translation
      }
    }), {}),
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 