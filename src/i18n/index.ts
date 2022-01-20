import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en';
import fr from './fr';
import rw from './_rw';

const detectionOptions: Record<string, unknown> = {
  order: [
    'localStorage',
    'querystring',
    'cookie',
    'sessionStorage',
    'navigator',
    'htmlTag',
    'path',
    'subdomain',
  ],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  htmlTag: document.documentElement,

  cookieOptions: { path: '/', sameSite: 'strict' },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: detectionOptions,
    resources: {
      en,
      fr,
      rw,
    },
    // lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
