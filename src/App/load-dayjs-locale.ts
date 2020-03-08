import dayjs from 'dayjs';
import i18n from 'i18next';

function getFallFackLanguage(): string | undefined {
  const fallbackLanguage = i18n.options.fallbackLng;

  if (Array.isArray(fallbackLanguage)) {
    return fallbackLanguage[0];
  }

  if (typeof fallbackLanguage === 'string') {
    return fallbackLanguage;
  }

  return undefined;
}

function loadDayJSLocale() {
  const fallbackLanguage = getFallFackLanguage();
  const locale = i18n.language || fallbackLanguage;

  // dayjs loades en-US by default
  if (!locale || locale === 'en-US') {
    return;
  }

  switch (locale.toLowerCase()) {
    // At the moment we only support pt-BR, please see: i18n/translations/*
    case 'pt-br':
      {
        require('dayjs/locale/pt-br');
        dayjs.locale('pt-br');
      }
      break;
    default:
      break;
  }
}

export default loadDayJSLocale;