import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { onNavigation, replacePath } from "../router";
import { PreferencesContext } from "./context";
import { langFromPath, localizePath } from "./langPath";
import { read, write } from "./storage";
import type { Lang, Localized, Theme } from "./types";
import { LANG_STORAGE_KEY, THEME_STORAGE_KEY, isTheme } from "./types";

const detectTheme = (): Theme =>
  read(THEME_STORAGE_KEY, isTheme) ??
  (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

/** The page colour of each theme, as index.html declares it. */
const THEME_COLOR: Record<Theme, string> = { light: "#fafaf7", dark: "#0a0e14" };

const currentLang =(): Lang => langFromPath(window.location.pathname);

const PreferencesProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(detectTheme);
  // The address is the source of truth for the language. main.tsx has already
  // moved a first visit to the address that matches the visitor's preference.
  const [lang, setLangState] = useState<Lang>(currentLang);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    // The browser's own bars follow the theme picked here, not only the system's.
    for (const meta of document.querySelectorAll('meta[name="theme-color"]')) {
      meta.setAttribute("content", THEME_COLOR[theme]);
    }
    write(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => onNavigation(() => setLangState(currentLang())), []);

  useEffect(() => {
    // Screen readers and search engines both rely on this being accurate.
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleTheme = useCallback(() => setTheme((current) => (current === "dark" ? "light" : "dark")), []);

  // Only a choice made with the switch is remembered. A language that was
  // merely detected, or that came with a shared link, is not the visitor's.
  const setLang = useCallback((next: Lang) => {
    write(LANG_STORAGE_KEY, next);
    const { pathname, search, hash } = window.location;
    replacePath(localizePath(pathname, next) + search + hash);
  }, []);

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
