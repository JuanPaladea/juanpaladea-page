import { useRef } from "react";
import type { PointerEvent, ReactNode } from "react";
import { useMediaQuery, useReducedMotion } from "../../hooks/useMediaQuery";

const MAX_TILT_DEG = 3.5;

/**
 * Leans towards the pointer with a soft light under it. Mouse only: on touch
 * the card would jump on every tap. Values go straight to CSS variables so
 * moving the mouse never re-renders the card.
 */
const TiltCard = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLElement>(null);
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reducedMotion = useReducedMotion();
  const enabled = finePointer && !reducedMotion;

  const onMove = (event: PointerEvent<HTMLElement>) => {
    const element = ref.current;
    if (!element) return;
    const box = element.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width;
    const y = (event.clientY - box.top) / box.height;
    element.dataset.active = "true";
    element.style.setProperty("--tilt-x", `${(0.5 - y) * MAX_TILT_DEG * 2}deg`);
    element.style.setProperty("--tilt-y", `${(x - 0.5) * MAX_TILT_DEG * 2}deg`);
    element.style.setProperty("--spot-x", `${x * 100}%`);
    element.style.setProperty("--spot-y", `${y * 100}%`);
  };

  const onLeave = () => {
    const element = ref.current;
    if (!element) return;
    delete element.dataset.active;
    element.style.removeProperty("--tilt-x");
    element.style.removeProperty("--tilt-y");
  };

  return (
    <article
      ref={ref}
      onPointerMove={enabled ? onMove : undefined}
      onPointerLeave={enabled ? onLeave : undefined}
      className={`tilt ${className}`}
    >
      {children}
    </article>
  );
};

export default TiltCard;
