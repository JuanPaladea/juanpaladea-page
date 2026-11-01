import { useEffect, useRef } from "react";

/**
 * Runs a callback at most once per frame while the page scrolls or resizes.
 * Callers write to the DOM directly: re-rendering React on every scroll event
 * is what makes scroll-driven pages feel heavy.
 */
export const useScrollFrame = (onFrame: () => void) => {
  const latest = useRef(onFrame);

  useEffect(() => {
    latest.current = onFrame;
  });

  useEffect(() => {
    let frame = 0;
    const request = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        latest.current();
      });
    };

    request();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
    };
  }, []);
};
