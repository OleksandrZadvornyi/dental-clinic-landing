import i18next from 'i18next';
import { detectUserLanguage } from './languageDetector';

export const initializeI18n = () =>
  i18next.init({
    lng: detectUserLanguage(),
    debug: true,
    resources: {
      en: { translation: require('../../locales/en.json') },
      uk: { translation: require('../../locales/uk.json') },
      fr: { translation: require('../../locales/fr.json') },
      de: { translation: require('../../locales/de.json') },
      es: { translation: require('../../locales/es.json') },
    },
  });
