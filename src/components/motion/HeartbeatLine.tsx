import { useOnScreen } from "../../hooks/useOnScreen";

const beat = (x: number) => `L${x} 30 L${x + 14} 26 L${x + 26} 30 L${x + 34} 30 L${x + 42} 6 L${x + 52} 54 L${x + 60} 30`;
const TRACE = `M0 30 ${[120, 440, 760, 1080].map(beat).join(" ")} L1200 30`;

/** A monitor trace along the footer: the hospital the story started in. */
const HeartbeatLine = () => {
  const { ref, onScreen } = useOnScreen<SVGSVGElement>();

  return (
    <svg
      ref={ref}
      aria-hidden="true"
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      className={`h-10 w-full ${onScreen ? "" : "[&_*]:[animation-play-state:paused]"}`}
    >
      <path className="ecg-base" d={TRACE} />
      <path className="ecg-trace" pathLength={1} d={TRACE} />
    </svg>
  );
};

export default HeartbeatLine;
