import type { Locale, Site } from "@/content/types";
import vi from "@/content/vi";
import en from "@/content/en";

export const locales: Locale[] = ["vi", "en"];
export const defaultLocale: Locale = "vi";

const dictionaries: Record<Locale, Site> = { vi, en };

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale): Site {
  return dictionaries[locale];
}

export const localeLabels: Record<Locale, string> = {
  vi: "Tiếng Việt",
  en: "English",
};
