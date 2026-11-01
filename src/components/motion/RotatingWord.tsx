import { useEffect, useState } from "react";
import { useReducedMotion } from "../../hooks/useMediaQuery";

const INTERVAL_MS = 2400;

/**
 * Cycles through a list in place. All words share one grid cell, so the widest
 * sets the width and the line never reflows. Reduced motion shows the full
 * list, and screen readers always get it, instead of a word that keeps changing.
 */
const RotatingWord = ({ words }: { words: string[] }) => {
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();
  const list = words.join(", ");

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(() => setActive((current) => current + 1), INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  if (reducedMotion) return <>{list}</>;

  const current = active % words.length;
  const previous = (current + words.length - 1) % words.length;

  return (
    <>
      <span className="sr-only">{list}</span>
      <span aria-hidden="true" className="rotator">
        {words.map((word, index) => (
          <span
            key={word}
            data-state={index === current ? "active" : index === previous ? "past" : "next"}
          >
            {word}
          </span>
        ))}
      </span>
    </>
  );
};

export default RotatingWord;
