import { useCallback, useEffect, useRef, useState } from "react";
import { pipelineLabels, pipelineSteps } from "../data/pipeline";
import { sectionCopy } from "../data/site";
import { useMediaQuery, useReducedMotion } from "../hooks/useMediaQuery";
import { useScrollFrame } from "../hooks/useScrollFrame";
import { usePreferences } from "../preferences/context";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";

const NODE = { width: 196, height: 92 };
const positions = [
  { x: 2, y: 2 },
  { x: 222, y: 118 },
  { x: 2, y: 234 },
  { x: 222, y: 350 },
  { x: 2, y: 466 },
];
const centers = positions.map(({ x, y }) => ({ x: x + NODE.width / 2, y: y + NODE.height / 2 }));

/** One curve per hop, so the packet can pause on each node. */
const segments = centers.slice(0, -1).map((from, index) => {
  const to = centers[index + 1];
  const middle = (from.y + to.y) / 2;
  return `C ${from.x} ${middle}, ${to.x} ${middle}, ${to.x} ${to.y}`;
});
const FULL_PATH = `M ${centers[0].x} ${centers[0].y} ${segments.join(" ")}`;

/** Share of each step spent resting on its node before moving to the next one. */
const DWELL = 0.35;

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const ease = (value: number) => value * value * (3 - 2 * value);

/**
 * The page's main motion graphic: scrolling carries one change through Vialo,
 * from the interface to the history. The section pins while the track
 * scrolls past. Without room to pin, or with reduced motion, the same diagram
 * and steps render complete and in normal flow.
 */
const PipelineComponent = () => {
  const { t } = usePreferences();
  const reducedMotion = useReducedMotion();
  const tallEnough = useMediaQuery("(min-height: 620px)");
  const pinned = !reducedMotion && tallEnough;

  const trackRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const packetRef = useRef<SVGCircleElement>(null);
  /** Path length at which the packet reaches each node. */
  const stops = useRef<number[]>([]);
  const [step, setStep] = useState(pipelineSteps.length - 1);

  useEffect(() => {
    const trail = trailRef.current;
    if (!trail) return;

    const measure = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let total = 0;
    stops.current = [
      0,
      ...segments.map((_, index) => {
        measure.setAttribute("d", `M ${centers[0].x} ${centers[0].y} ${segments.slice(0, index + 1).join(" ")}`);
        total = measure.getTotalLength();
        return total;
      }),
    ];
    trail.style.strokeDasharray = `${total}`;
    trail.style.strokeDashoffset = pinned ? `${total}` : "0";
  }, [pinned]);

  useEffect(() => {
    if (!pinned) setStep(pipelineSteps.length - 1);
  }, [pinned]);

  const onFrame = useCallback(() => {
    const track = trackRef.current;
    const trail = trailRef.current;
    const packet = packetRef.current;
    if (!pinned || !track || !trail || !packet || !stops.current.length) return;

    const box = track.getBoundingClientRect();
    const progress = clamp(-box.top / (box.height - window.innerHeight)) * pipelineSteps.length;
    const current = Math.min(pipelineSteps.length - 1, Math.floor(progress));
    const travel = current === pipelineSteps.length - 1 ? 0 : ease(clamp((progress - current - DWELL) / (1 - DWELL)));

    const from = stops.current[current];
    const to = stops.current[Math.min(current + 1, stops.current.length - 1)];
    const length = from + (to - from) * travel;
    const total = stops.current[stops.current.length - 1];

    trail.style.strokeDashoffset = `${total - length}`;
    const point = trail.getPointAtLength(length);
    packet.setAttribute("cx", `${point.x}`);
    packet.setAttribute("cy", `${point.y}`);
    setStep((previous) => (previous === current ? previous : current));
  }, [pinned]);

  useScrollFrame(onFrame);

  return (
    <Section id="how" aria-labelledby="how-heading">
      <SectionHeading
        id="how-heading"
        index={4}
        title={t(sectionCopy.how.title)}
        subtitle={t(sectionCopy.how.subtitle)}
      />

      <div ref={trackRef} className={pinned ? "h-[240vh]" : ""}>
        <div className={pinned ? "sticky top-[4.25rem] h-[calc(100svh-4.25rem)]" : "py-12"}>
          <div className="container mx-auto grid h-full gap-6 px-5 py-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,27rem)] lg:items-center lg:gap-16">
            <ol
              className={
                pinned
                  ? "order-last grid lg:order-first lg:block lg:space-y-6"
                  : "order-last space-y-6 lg:order-first"
              }
            >
              {pipelineSteps.map((item, index) => {
                const active = index === step;
                return (
                  <li
                    key={item.id}
                    aria-current={pinned && active ? "step" : undefined}
                    className={`pl-step flex gap-4 ${pinned ? "[grid-area:1/1] lg:[grid-area:auto]" : ""} ${
                      pinned && !active ? "opacity-0 lg:opacity-40" : ""
                    }`}
                  >
                    <span aria-hidden="true" className="eyebrow mt-1.5 shrink-0 text-accent-soft">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="title-font text-xl font-medium text-heading">{t(item.title)}</h3>
                      <p className="mt-1 leading-relaxed">{t(item.body)}</p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <svg
              viewBox="0 0 420 560"
              aria-hidden="true"
              className={`w-full ${pinned ? "h-full min-h-0 max-lg:max-h-[58svh]" : "max-h-[34rem]"}`}
            >
              <path d={FULL_PATH} fill="none" stroke="rgb(var(--color-line))" strokeWidth="2" strokeDasharray="4 6" />
              <path ref={trailRef} d={FULL_PATH} fill="none" stroke="rgb(var(--color-accent-soft))" strokeWidth="2.5" />
              {pinned && (
                <circle
                  ref={packetRef}
                  r="7"
                  cx={centers[0].x}
                  cy={centers[0].y}
                  fill="rgb(var(--color-signal))"
                  style={{ filter: "drop-shadow(0 0 8px rgb(var(--color-signal)))" }}
                />
              )}

              {pipelineSteps.map((item, index) => (
                <Node key={item.id} id={item.id} tag={t(item.tag)} index={index} on={index <= step} />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </Section>
  );
};

interface NodeProps {
  id: (typeof pipelineSteps)[number]["id"];
  tag: string;
  index: number;
  on: boolean;
}

const delayed = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

const Node = ({ id, tag, index, on }: NodeProps) => {
  const { t } = usePreferences();
  const { x, y } = positions[index];

  return (
    <g className="pl-node" data-on={on} transform={`translate(${x} ${y})`}>
      <rect className="pl-card" width={NODE.width} height={NODE.height} rx="12" strokeWidth="1.5" />
      <text x="14" y="24" fontSize="11" fill="rgb(var(--color-muted))" className="font-mono">
        {tag}
      </text>

      {id === "change" && (
        <g className="pl-in">
          <rect x="14" y="36" width="168" height="40" rx="10" fill="rgb(var(--color-elevated))" />
          <text x="26" y="61" fontSize="13" fill="rgb(var(--color-heading))">
            {t(pipelineLabels.change)}
          </text>
        </g>
      )}

      {id === "role" && (
        <g className="pl-in" style={delayed(150)}>
          <rect x="14" y="36" width="168" height="40" rx="10" fill="rgb(var(--color-accent-soft) / 0.16)" />
          <text x="26" y="61" fontSize="13" fill="rgb(var(--color-heading))">
            {t(pipelineLabels.role)}
          </text>
        </g>
      )}

      {id === "isolation" &&
        t(pipelineLabels.checks).map((check, position) => (
          <g key={check} className="pl-in" style={delayed(position * 180)}>
            <circle cx={22} cy={44 + position * 15} r="4" fill="rgb(var(--color-accent-soft))" />
            <text x="34" y={48 + position * 15} fontSize="11.5" fill="rgb(var(--color-heading))">
              {check}
            </text>
          </g>
        ))}

      {id === "trigger" && (
        <g className="pl-in" style={delayed(100)}>
          <text x="14" y="52" fontSize="12" fill="rgb(var(--color-heading))" className="font-mono">
            AFTER UPDATE
          </text>
          <text x="14" y="72" fontSize="12" fill="rgb(var(--color-accent-soft))" className="font-mono">
            {t(pipelineLabels.valueChange)}
          </text>
        </g>
      )}

      {id === "history" &&
        t(pipelineLabels.record).map((line, position) => (
          <text
            key={line}
            className="pl-in font-mono"
            x="14"
            y={46 + position * 16}
            fontSize="11.5"
            fill="rgb(var(--color-heading))"
            style={delayed(position * 180)}
          >
            {line}
          </text>
        ))}
    </g>
  );
};

export default PipelineComponent;
