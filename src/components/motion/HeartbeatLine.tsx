import { useEffect, useState } from "react";
import { useOnScreen } from "../../hooks/useOnScreen";

const HEIGHT = 60;
const SPACING = 480;

const beat = (x: number) => `L${x} 30 L${x + 14} 26 L${x + 26} 30 L${x + 34} 30 L${x + 42} 6 L${x + 52} 54 L${x + 60} 30`;

// Beats sit at a fixed spacing instead of stretching, so they keep their shape on any screen.
const trace = (width: number) => {
  const beats: number[] = [];
  for (let x = 120; x + 60 < width; x += SPACING) beats.push(x);
  return `M0 30 ${beats.map(beat).join(" ")} L${width} 30`;
};

/** A monitor trace along the footer: the hospital the story started in. */
const HeartbeatLine = () => {
  const { ref, onScreen } = useOnScreen<SVGSVGElement>();
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(([entry]) => {
      const { width: w, height: h } = entry.contentRect;
      if (w && h) setWidth(Math.round((w * HEIGHT) / h));
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  const d = trace(width);

  return (
    <svg
      ref={ref}
      aria-hidden="true"
      viewBox={`0 0 ${width} ${HEIGHT}`}
      className={`block h-10 w-full ${onScreen ? "" : "[&_*]:[animation-play-state:paused]"}`}
    >
      <path className="ecg-base" d={d} />
      <path className="ecg-trace" pathLength={1} d={d} />
    </svg>
  );
};

export default HeartbeatLine;
