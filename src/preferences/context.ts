import { createContext, useContext } from "react";
import type { Lang, Localized, Theme } from "./types";

export interface PreferencesValue {
  lang: Lang;
  theme: Theme;
  setLang: (lang: Lang) => void;
  toggleTheme: () => void;
  /** Picks the active language out of a localized value. */
  t: <T>(value: Localized<T>) => T;
}

export const PreferencesContext = createContext<PreferencesValue | null>(null);

export const usePreferences = (): PreferencesValue => {
  const value = useContext(PreferencesContext);
  if (!value) throw new Error("usePreferences must be used inside <PreferencesProvider>");
  return value;
};
