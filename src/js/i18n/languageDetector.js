export function detectUserLanguage() {
  const supportedLanguages = ['en', 'uk', 'fr', 'de', 'es'];
  const browserLanguages = navigator.languages || [navigator.language];

  for (const lang of browserLanguages) {
    const languageCode = lang.split('-')[0];
    if (supportedLanguages.includes(languageCode)) {
      return languageCode;
    }
  }

  return 'en';
}
