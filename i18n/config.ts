import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './translations/en-US.json';
import translationCN from './translations/zh-CN.json';

const languages = {
  'en-US': {
    translation: translationEN,
  },
  'zh-CN': {
    translation: translationCN,
  },
};

type Language = keyof typeof languages;
i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // in case window.__VERDACCIO_BASENAME_UI_OPTIONS.language is undefined,it will fall back to 'en-US'
    lng: window?.__VERDACCIO_BASENAME_UI_OPTIONS?.language || 'en-US',
    fallbackLng: 'en-US',
    whitelist: ['en-US', 'zh-CN'],
    load: 'currentOnly',
    resources: languages,
    debug: false,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
export { Language };
