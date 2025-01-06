import 'server-only';

const dictionaries = {
  en: () =>
    import('./en').then((module) => ({
      ...module
    })),
  ro: () =>
    import('./ro').then((module) => ({
      ...module
    }))
};

export async function getDictionary(locale: 'en' | 'ro') {
  return dictionaries[locale]();
}