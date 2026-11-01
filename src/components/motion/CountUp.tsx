import { useEffect, useRef, useState } from "react";
import { useInView } from "../../hooks/useInView";
import { prefersReducedMotion } from "../../hooks/useMediaQuery";

const DURATION_MS = 1300;

/** Counts up the first time it scrolls into view. Screen readers get the total. */
const CountUp = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const { ref, isInView } = useInView<HTMLSpanElement>();
  const [shown, setShown] = useState(() => (prefersReducedMotion() ? value : 0));
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current || prefersReducedMotion()) return;
    started.current = true;

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / DURATION_MS);
      setShown(Math.round(value * (1 - (1 - progress) ** 4)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      // Lets StrictMode's remount start the count again.
      cancelAnimationFrame(frame);
      started.current = false;
    };
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      <span className="sr-only">
        {value}
        {suffix}
      </span>
      <span aria-hidden="true">
        {shown}
        {suffix}
      </span>
    </span>
  );
};

export default CountUp;
