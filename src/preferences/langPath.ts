import type { Lang } from "./types";

/**
 * The address says which language a page is in: `/es` and everything under it
 * is Spanish, anything else is English. Kept free of browser globals because
 * the build step uses it too.
 */
const ES_PREFIX = /^\/es(?=\/|$)/;

export const langFromPath = (pathname: string): Lang => (ES_PREFIX.test(pathname) ? "es" : "en");

/** A path without its language prefix, which is what the router matches. */
export const stripLang = (pathname: string) => pathname.replace(ES_PREFIX, "") || "/";

/** The same page in the given language. Keeps any query and hash. */
export const localizePath = (to: string, lang: Lang) => {
  const cut = to.search(/[?#]/);
  const pathname = cut === -1 ? to : to.slice(0, cut);
  const rest = cut === -1 ? "" : to.slice(cut);
  const bare = stripLang(pathname);

  if (lang === "en") return bare + rest;
  return (bare === "/" ? "/es" : `/es${bare}`) + rest;
};
