import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    supportedLngs: ['en', 'pl', 'de'],
    fallbackLng: 'en',
    ns: ['default'],
    defaultNS: 'default',
    saveMissing: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${process.env.REACT_APP_i18nexus_API_KEY}`,
    },
  });

export default i18n;
