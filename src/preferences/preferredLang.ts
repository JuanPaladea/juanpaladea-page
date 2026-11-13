import { langFromPath, localizePath } from "./langPath";
import { read } from "./storage";
import { LANG_STORAGE_KEY, isLang } from "./types";
import type { Lang } from "./types";

/**
 * The language the visitor picked with the switch, if they ever did.
 * Otherwise the first language in the browser's ordered list that the site
 * ships: reading only navigator.language would send a visitor whose primary
 * is, say, pt-BR to English even when Spanish is their second choice.
 */
const preferredLang = (): Lang => {
  const stored = read(LANG_STORAGE_KEY, isLang);
  if (stored) return stored;

  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag.toLowerCase().split("-")[0];
    if (base === "es" || base === "en") return base;
  }
  return "en";
};

/**
 * Runs once before the first render. A Spanish address always opens in
 * Spanish, so a shared link shows what its sender saw. An address without a
 * language goes to its Spanish twin when that is what the visitor prefers, so
 * the address, the tab title and the page never disagree.
 */
export const alignUrlWithPreferredLang = () => {
  const { pathname, search, hash } = window.location;
  if (langFromPath(pathname) === "es" || preferredLang() !== "es") return;
  window.history.replaceState(window.history.state, "", localizePath(pathname, "es") + search + hash);
};
