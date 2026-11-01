import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether an element is on screen, in both directions, so looping
 * animations can stop working while nobody can see them. Unlike useInView,
 * which reveals once, this one keeps reporting.
 */
export const useOnScreen = <T extends Element>() => {
  const ref = useRef<T>(null);
  const [onScreen, setOnScreen] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, onScreen };
};
