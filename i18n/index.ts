import en from './en';
import fr from './fr';
import es from './es';
import ru from './ru';

export const translations = {
  en,
  fr,
  es,
  ru
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof en; 