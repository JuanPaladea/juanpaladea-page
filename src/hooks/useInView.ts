import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** How long to wait for the observer to prove it works before giving up on it. */
const FALLBACK_DELAY_MS = 1500;

/**
 * Reveals an element the first time it scrolls into view.
 *
 * The reveal is progressive enhancement: content is never left hidden. It
 * starts visible when IntersectionObserver is missing or the visitor asked for
 * reduced motion, and a timer reveals it anyway if the observer never reports
 * (which happens when the tab is never composited, e.g. background or
 * occluded windows).
 */
export const useInView = <T extends HTMLElement>(rootMargin = "0px 0px -80px 0px") => {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(
    () => typeof IntersectionObserver === "undefined" || prefersReducedMotion(),
  );

  useEffect(() => {
    const element = ref.current;
    if (!element || isInView) return;

    // IntersectionObserver always delivers an initial entry for a target, so
    // "no entry at all" is a reliable signal that it is not running.
    let hasReported = false;

    const observer = new IntersectionObserver(
      (entries) => {
        hasReported = true;
        if (!entries.some((entry) => entry.isIntersecting)) return;
        setIsInView(true);
        observer.disconnect();
      },
      { rootMargin, threshold: 0 },
    );

    observer.observe(element);

    const fallback = window.setTimeout(() => {
      if (!hasReported) setIsInView(true);
    }, FALLBACK_DELAY_MS);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [isInView, rootMargin]);

  return { ref, isInView };
};
