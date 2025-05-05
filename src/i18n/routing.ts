export const locales = ['pt', 'en'] as const;

export type Locale = typeof locales[number]; // "pt" | "en"

export const routing = {
  locales,
  defaultLocale: 'pt' as Locale,
};
