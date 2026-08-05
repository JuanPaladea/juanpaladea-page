import { useEffect, useState } from "react";
import { projects } from "./data/projects";

export type Route = { name: "home" } | { name: "project"; id: string };

const PROJECT_PATH = /^\/projects\/([a-z0-9-]+)\/?$/i;

export const projectPath = (id: string) => `/projects/${id}`;

const parse = (pathname: string): Route => {
  const match = pathname.match(PROJECT_PATH);
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

export const navigate = (to: string) => {
  if (window.location.pathname === to) return;
  window.history.pushState(null, "", to);
  listeners.forEach((notify) => notify());
  window.scrollTo({ top: 0, behavior: "auto" });
};

export const useRoute = (): Route => {
  const [route, setRoute] = useState<Route>(() => parse(window.location.pathname));

  useEffect(() => {
    const update = () => setRoute(parse(window.location.pathname));
    listeners.add(update);
    window.addEventListener("popstate", update);
    return () => {
      listeners.delete(update);
      window.removeEventListener("popstate", update);
    };
  }, []);

  return route;
};

/** True for a click that should be handled in-page rather than by the browser. */
export const isPlainLeftClick = (event: React.MouseEvent) =>
  event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
