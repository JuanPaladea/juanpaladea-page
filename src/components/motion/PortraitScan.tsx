import { useRef, useState } from "react";
import type { PointerEvent } from "react";
import { useReducedMotion } from "../../hooks/useMediaQuery";

const SOURCE = "/img/portrait-1024.jpeg";
const SOURCE_SET = "/img/portrait-640.jpeg 575w, /img/portrait-1024.jpeg 919w";
const SIZES = "(min-width: 1024px) 28rem, (min-width: 768px) 24rem, 90vw";

type Mode = "sweep" | "idle" | "lens";

/**
 * The portrait starts as a radiograph and a beam develops it into the photo,
 * which is the whole career in one gesture. Afterwards the negative follows
 * the pointer like a light box, and a tap replays the sweep on touch screens.
 * The real photo is always underneath, so nothing here affects loading or LCP.
 */
const PortraitScan = ({ alt, caption }: { alt: string; caption: string }) => {
  const reducedMotion = useReducedMotion();
  const [mode, setMode] = useState<Mode>("sweep");
  const rootRef = useRef<HTMLElement>(null);

  const moveLens = (event: PointerEvent<HTMLElement>) => {
    if (mode === "sweep" || event.pointerType !== "mouse") return;
    const box = event.currentTarget.getBoundingClientRect();
    rootRef.current?.style.setProperty("--lens-x", `${event.clientX - box.left}px`);
    rootRef.current?.style.setProperty("--lens-y", `${event.clientY - box.top}px`);
    if (mode !== "lens") setMode("lens");
  };

  return (
    <figure
      ref={rootRef}
      data-mode={reducedMotion ? "idle" : mode}
      onPointerMove={moveLens}
      onPointerLeave={() => mode === "lens" && setMode("idle")}
      onClick={() => mode === "idle" && setMode("sweep")}
      className="scan rounded-2xl shadow-2xl ring-1 ring-line"
    >
      <img
        className="block h-auto w-full object-cover"
        alt={alt}
        src={SOURCE}
        srcSet={SOURCE_SET}
        sizes={SIZES}
        width={919}
        height={930}
        decoding="async"
      />

      {!reducedMotion && (
        <>
          <span className="scan-xray" aria-hidden="true" onAnimationEnd={() => setMode("idle")}>
            <img src={SOURCE} srcSet={SOURCE_SET} sizes={SIZES} alt="" width={919} height={930} />
          </span>
          <span className="scan-beam-track" aria-hidden="true">
            <span className="scan-beam" />
          </span>
        </>
      )}

      <figcaption className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2.5 py-1 font-mono text-xs text-white backdrop-blur">
        {caption}
      </figcaption>
    </figure>
  );
};

export default PortraitScan;
