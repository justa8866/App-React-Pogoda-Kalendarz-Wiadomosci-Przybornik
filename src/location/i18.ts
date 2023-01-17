import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import pl from './pl';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      pl,
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
