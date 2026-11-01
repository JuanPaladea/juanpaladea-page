import type { ReactNode } from "react";
import { useOnScreen } from "../../hooks/useOnScreen";
import { usePreferences } from "../../preferences/context";
import type { Lang } from "../../preferences/types";

const delay = (seconds: number) => ({ "--delay": `${seconds}s` }) as React.CSSProperties;

const VialoScene = ({ lang }: { lang: Lang }) => {
  const logs =
    lang === "es"
      ? ["movió PL-00412 a B5", "calibró EQ-0007", "de 500 a 250 µL"]
      : ["moved PL-00412 to B5", "calibrated EQ-0007", "from 500 to 250 µL"];

  return (
    <>
      <text x="24" y="34" fontSize="12">
        {lang === "es" ? "freezer −80 °C · caja 14" : "−80 °C freezer · box 14"}
      </text>
      <rect className="card" x="24" y="48" width="196" height="196" rx="10" />
      {Array.from({ length: 16 }, (_, index) => (
        <rect
          key={index}
          className="cv-cell"
          x={38 + (index % 4) * 44}
          y={62 + Math.floor(index / 4) * 44}
          width="36"
          height="36"
          rx="6"
        />
      ))}
      <circle className="cv-sample" cx="56" cy="80" r="12" />

      <text x="244" y="34" fontSize="12">
        {lang === "es" ? "historial" : "history"}
      </text>
      {logs.map((log, index) => (
        <g key={log} className="cv-log" style={delay(index * 2.4)}>
          <rect className="card" x="244" y={48 + index * 66} width="212" height="56" rx="8" />
          <circle className="glow" cx="262" cy={76 + index * 66} r="4" />
          <text className="ink" x="276" y={80 + index * 66} fontSize="12">
            {log}
          </text>
        </g>
      ))}
    </>
  );
};

const LibelulisScene = ({ lang }: { lang: Lang }) => (
  <>
    <rect className="card" x="24" y="44" width="136" height="70" rx="10" />
    <text className="ink" x="92" y="84" fontSize="13" textAnchor="middle">
      {lang === "es" ? "persona A" : "person A"}
    </text>
    <rect className="card" x="24" y="156" width="136" height="70" rx="10" />
    <text className="ink" x="92" y="196" fontSize="13" textAnchor="middle">
      {lang === "es" ? "persona B" : "person B"}
    </text>

    <path className="cl-wire" pathLength={1} d="M160 79 C 230 79, 240 135, 300 135" />
    <path className="cl-wire" data-lost="true" pathLength={1} d="M160 191 C 230 191, 240 135, 300 135" />

    <rect className="cl-piece" x="300" y="65" width="150" height="140" rx="14" />
    <text className="ink" x="375" y="118" fontSize="13" textAnchor="middle">
      {lang === "es" ? "pieza única" : "unique piece"}
    </text>
    <g className="cl-stamp">
      <rect className="card" x="322" y="134" width="106" height="34" rx="8" />
      <text className="ink" x="375" y="156" fontSize="13" textAnchor="middle">
        {lang === "es" ? "reservada 48 h" : "held for 48 h"}
      </text>
    </g>
  </>
);

const EnUnaNotaScene = () => (
  <>
    <g className="cn-bars">
      {Array.from({ length: 28 }, (_, index) => (
        <rect
          key={index}
          className="cn-bar"
          x={30 + index * 15.2}
          y={70 + ((index * 37) % 50)}
          width="9"
          height={210 - 70 - ((index * 37) % 50)}
          rx="3"
          style={{ "--delay": `${-((index * 173) % 900)}ms` } as React.CSSProperties}
        />
      ))}
    </g>
    <text className="cn-shout glow" x="240" y="164" fontSize="72" fontWeight="800" textAnchor="middle" style={{ fill: "rgb(var(--color-signal))" }}>
      ¡YO!
    </text>
  </>
);

/**
 * Each project gets a small animated drawing of the decision that defines it.
 * Text in here is decoration: the card carries the real description. Stops
 * looping while off screen, and base styles are the finished picture.
 */
const ProjectCover = ({ id, className = "" }: { id: string; className?: string }) => {
  const { lang } = usePreferences();
  const { ref, onScreen } = useOnScreen<HTMLDivElement>();

  const scenes: Record<string, ReactNode> = {
    vialo: <VialoScene lang={lang} />,
    libelulis: <LibelulisScene lang={lang} />,
    "en-una-nota": <EnUnaNotaScene />,
  };

  return (
    <div ref={ref} aria-hidden="true" data-paused={!onScreen} className={`cover aspect-video bg-elevated ${className}`}>
      <svg viewBox="0 0 480 270">{scenes[id]}</svg>
    </div>
  );
};

export default ProjectCover;
