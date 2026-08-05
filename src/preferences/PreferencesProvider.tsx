import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { PreferencesContext } from "./context";
import type { Lang, Localized, Theme } from "./types";
import { LANG_STORAGE_KEY, THEME_STORAGE_KEY, isLang, isTheme } from "./types";

const read = <T,>(key: string, guard: (value: unknown) => value is T): T | null => {
  try {
    const stored = localStorage.getItem(key);
    return guard(stored) ? stored : null;
  } catch {
    // Private mode or blocked storage — fall back to defaults.
    return null;
  }
};

const write = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Persisting is best-effort; the UI still works for this session.
  }
};

const detectTheme = (): Theme =>
  read(THEME_STORAGE_KEY, isTheme) ??
  (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

const detectLang = (): Lang =>
  read(LANG_STORAGE_KEY, isLang) ?? (navigator.language.toLowerCase().startsWith("es") ? "es" : "en");

const PreferencesProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(detectTheme);
  const [lang, setLangState] = useState<Lang>(detectLang);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    write(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    // Screen readers and search engines both rely on this being accurate.
    document.documentElement.lang = lang;
    write(LANG_STORAGE_KEY, lang);
  }, [lang]);

  const toggleTheme = useCallback(() => setTheme((current) => (current === "dark" ? "light" : "dark")), []);
  const setLang = useCallback((next: Lang) => setLangState(next), []);

  const value = useMemo(
    () => ({
      lang,
      theme,
      setLang,
      toggleTheme,
      t: <T,>(localized: Localized<T>) => localized[lang],
    }),
    [lang, theme, setLang, toggleTheme],
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
};

export default PreferencesProvider;
