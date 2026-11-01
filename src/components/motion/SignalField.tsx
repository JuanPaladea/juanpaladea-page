import { useEffect } from "react";
import { useOnScreen } from "../../hooks/useOnScreen";
import { useReducedMotion } from "../../hooks/useMediaQuery";
import { usePreferences } from "../../preferences/context";

const SPACING = 30;
const SWEEP_MS = 7000;
const SWEEP_WIDTH = 130;
const POINTER_RADIUS = 150;
/** Alpha is bucketed so the canvas changes fillStyle a handful of times per frame. */
const ALPHA_STEPS = 10;

/**
 * Hero backdrop: a dot grid crossed by a slow scan, like a film under a beam,
 * that also wakes up around the pointer. Drawn on a canvas because the grid
 * runs to a thousand-plus points. Stops while off screen, and paints a single
 * still frame for visitors who asked for reduced motion.
 */
const SignalField = ({ className = "" }: { className?: string }) => {
  const { ref, onScreen } = useOnScreen<HTMLCanvasElement>();
  const reducedMotion = useReducedMotion();
  const { theme } = usePreferences();

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const [r, g, b] = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-accent-soft")
      .trim()
      .split(" ");

    let width = 0;
    let height = 0;
    let frame = 0;
    const pointer = { x: -9999, y: -9999 };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const box = canvas.getBoundingClientRect();
      width = box.width;
      height = box.height;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      const sweep = ((time % SWEEP_MS) / SWEEP_MS) * (width + SWEEP_WIDTH * 4) - SWEEP_WIDTH * 2;
      const buckets: number[][] = Array.from({ length: ALPHA_STEPS + 1 }, () => []);

      for (let y = SPACING / 2; y < height; y += SPACING) {
        for (let x = SPACING / 2; x < width; x += SPACING) {
          const beam = Math.exp(-(((x - sweep) / SWEEP_WIDTH) ** 2));
          const distance = Math.hypot(x - pointer.x, y - pointer.y);
          const near = Math.exp(-((distance / POINTER_RADIUS) ** 2));
          const drift = 0.5 + 0.5 * Math.sin(x * 0.012 + y * 0.015 + time * 0.0005);

          const alpha = Math.min(1, 0.14 + drift * 0.14 + beam * 0.5 + near * 0.7);
          const push = near * 7;
          const angle = Math.atan2(y - pointer.y, x - pointer.x);
          const px = x + Math.cos(angle) * push;
          const py = y + Math.sin(angle) * push - beam * 4;

          buckets[Math.round(alpha * ALPHA_STEPS)].push(px, py);
        }
      }

      buckets.forEach((points, step) => {
        if (!points.length) return;
        context.fillStyle = `rgb(${r} ${g} ${b} / ${step / ALPHA_STEPS})`;
        for (let i = 0; i < points.length; i += 2) {
          context.fillRect(points[i], points[i + 1], 1.6, 1.6);
        }
      });
    };

    const loop = (time: number) => {
      draw(time);
      frame = requestAnimationFrame(loop);
    };

    const onPointerMove = (event: PointerEvent) => {
      const box = canvas.getBoundingClientRect();
      pointer.x = event.clientX - box.left;
      pointer.y = event.clientY - box.top;
    };

    const onResize = () => {
      resize();
      if (reducedMotion || !onScreen) draw(0);
    };

    resize();
    window.addEventListener("resize", onResize);

    if (reducedMotion || !onScreen) {
      draw(0);
    } else {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [ref, onScreen, reducedMotion, theme]);

  return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none ${className}`} />;
};

export default SignalField;
