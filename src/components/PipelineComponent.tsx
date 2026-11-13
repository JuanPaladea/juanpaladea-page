import { useEffect, useRef } from "react";
import { pipelineLabels, pipelineSteps } from "../data/pipeline";
import { sectionCopy } from "../data/site";
import { useInView } from "../hooks/useInView";
import { usePreferences } from "../preferences/context";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";

const NODE = { width: 196, height: 92 };
/*
 * The two columns overlap, so the drawing is only 340 units wide. On a phone
 * that is close to one unit per pixel, which keeps the labels inside the
 * nodes at a readable size instead of shrinking them with the diagram.
 */
const VIEW = { width: 340, height: 528 };
const positions = [
  { x: 2, y: 2 },
  { x: 142, y: 110 },
  { x: 2, y: 218 },
  { x: 142, y: 326 },
  { x: 2, y: 434 },
];
const centers = positions.map(({ x, y }) => ({ x: x + NODE.width / 2, y: y + NODE.height / 2 }));

const segments = centers.slice(0, -1).map((from, index) => {
  const to = centers[index + 1];
  const middle = (from.y + to.y) / 2;
  return `C ${from.x} ${middle}, ${to.x} ${middle}, ${to.x} ${to.y}`;
});
const FULL_PATH = `M ${centers[0].x} ${centers[0].y} ${segments.join(" ")}`;

/** Gap between one node lighting up and the next. */
const STAGGER_MS = 160;

/**
 * The path of one change in Vialo, from the interface to the history.
 * The diagram and the steps are always complete and in normal flow: the only
 * motion is a one-off reveal when the section scrolls into view, so the
 * section never takes the scroll over.
 */
const PipelineComponent = () => {
  const { t } = usePreferences();
  const { ref, isInView } = useInView<HTMLDivElement>();
  const trailRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const trail = trailRef.current;
    if (!trail) return;

    const total = trail.getTotalLength();
    trail.style.strokeDasharray = `${total}`;
    trail.style.strokeDashoffset = isInView ? "0" : `${total}`;
  }, [isInView]);

  return (
    <Section id="how" aria-labelledby="how-heading">
      <SectionHeading
        id="how-heading"
        index={4}
        title={t(sectionCopy.how.title)}
        subtitle={t(sectionCopy.how.subtitle)}
      />

      <div
        ref={ref}
        className="container mx-auto grid gap-10 px-5 py-8 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,21rem)] lg:items-center lg:gap-16"
      >
        <ol className="order-last space-y-6 lg:order-first">
          {pipelineSteps.map((item, index) => (
            <li key={item.id} className="flex max-w-prose gap-4">
              <span aria-hidden="true" className="eyebrow mt-1.5 shrink-0 text-accent-soft">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="title-font text-xl font-medium text-heading">{t(item.title)}</h3>
                <p className="mt-1 leading-relaxed">{t(item.body)}</p>
              </div>
            </li>
          ))}
        </ol>

        <svg viewBox={`0 0 ${VIEW.width} ${VIEW.height}`} aria-hidden="true" className="w-full max-w-[21rem]">
          <path d={FULL_PATH} fill="none" stroke="rgb(var(--color-line))" strokeWidth="2" strokeDasharray="4 6" />
          <path
            ref={trailRef}
            d={FULL_PATH}
            fill="none"
            stroke="rgb(var(--color-accent-soft))"
            strokeWidth="2.5"
            className="pl-trail"
          />

          {pipelineSteps.map((item, index) => (
            <Node key={item.id} id={item.id} tag={t(item.tag)} index={index} on={isInView} />
          ))}
        </svg>
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

const Node = ({ id, tag, index, on }: NodeProps) => {
  const { t } = usePreferences();
  const { x, y } = positions[index];
  const base = index * STAGGER_MS;
  const delayed = (extra = 0) => ({ "--delay": `${base + extra}ms` }) as React.CSSProperties;

  return (
    <g
      className="pl-node"
      data-on={on}
      transform={`translate(${x} ${y})`}
      style={{ transitionDelay: `${base}ms` }}
    >
      <rect
        className="pl-card"
        width={NODE.width}
        height={NODE.height}
        rx="12"
        strokeWidth="1.5"
        style={{ transitionDelay: `${base}ms` }}
      />
      <text x="14" y="24" fontSize="11" fill="rgb(var(--color-muted))" className="font-mono">
        {tag}
      </text>

      {id === "change" && (
        <g className="pl-in" style={delayed()}>
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
