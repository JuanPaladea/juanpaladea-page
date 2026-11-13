import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { projects } from "./data/projects";
import { prefersReducedMotion } from "./hooks/useMediaQuery";
import { stripLang } from "./preferences/langPath";

export type Route = { name: "home" } | { name: "project"; id: string };

const PROJECT_PATH = /^\/projects\/([a-z0-9-]+)\/?$/i;

export const projectPath = (id: string) => `/projects/${id}`;

const parse = (pathname: string): Route => {
  // Routes are the same in both languages; the /es prefix only picks the copy.
  const match = stripLang(pathname).match(PROJECT_PATH);
  // Unknown ids fall back to home rather than rendering an empty page.
  if (match && projects.some((project) => project.id === match[1])) {
    return { name: "project", id: match[1] };
  }
  return { name: "home" };
};

/**
 * Two routes do not justify a routing library. This is the History API with a
 * subscription so every mounted component re-renders on navigation.
 */
const listeners = new Set<() => void>();

/** Calls back whenever the address changes, from a link or from the back button. */
export const onNavigation = (listener: () => void) => {
  listeners.add(listener);
  window.addEventListener("popstate", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("popstate", listener);
  };
};

/**
 * Swaps the address in place: no history entry, no scroll and no transition.
 * The language switch uses it, because the page stays the same one.
 */
export const replacePath = (to: string) => {
  window.history.replaceState(window.history.state, "", to);
  listeners.forEach((notify) => notify());
};

export const navigate = (to: string) => {
  const url = new URL(to, window.location.origin);
  const samePage = url.pathname === window.location.pathname;
  if (samePage && !url.hash) return;

  const commit = () => {
    window.history.pushState(null, "", url.pathname + url.hash);
    // The view transition snapshots the page as this returns, so React has to
    // finish rendering before then.
    flushSync(() => listeners.forEach((notify) => notify()));

    const target = url.hash ? document.querySelector(url.hash) : null;
    if (target) target.scrollIntoView({ behavior: "instant" });
    else window.scrollTo({ top: 0, behavior: "instant" });
  };

  if (samePage || !document.startViewTransition || prefersReducedMotion()) {
    commit();
    return;
  }

  const root = document.documentElement;
  root.classList.add("vt-route");
  document.startViewTransition(commit).finished.finally(() => root.classList.remove("vt-route"));
};

export const useRoute = (): Route => {
  const [route, setRoute] = useState<Route>(() => parse(window.location.pathname));

  useEffect(() => onNavigation(() => setRoute(parse(window.location.pathname))), []);

  return route;
};

/** True for a click that should be handled in-page rather than by the browser. */
export const isPlainLeftClick = (event: React.MouseEvent) =>
  event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
