export type Lang = "en" | "es";
export type Theme = "light" | "dark";

/** A value that exists in both site languages. */
export type Localized<T> = Record<Lang, T>;

export const LANG_STORAGE_KEY = "portfolio-lang";
export const THEME_STORAGE_KEY = "portfolio-theme";

export const isLang = (value: unknown): value is Lang => value === "en" || value === "es";
export const isTheme = (value: unknown): value is Theme => value === "light" || value === "dark";
