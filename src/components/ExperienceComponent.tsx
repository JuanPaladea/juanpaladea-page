import { useRef } from "react";
import { career } from "../data/career";
import { sectionCopy } from "../data/site";
import { ui } from "../data/ui";
import { useScrollFrame } from "../hooks/useScrollFrame";
import { usePreferences } from "../preferences/context";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";

/** How far down the viewport the line's tip sits while scrolling. */
const DRAW_LINE = 0.7;

const ExperienceComponent = () => {
  const { t } = usePreferences();
  const listRef = useRef<HTMLOListElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  // Written straight to the DOM: this runs on every scrolled frame.
  useScrollFrame(() => {
    const list = listRef.current;
    const fill = fillRef.current;
    if (!list || !fill) return;

    const box = list.getBoundingClientRect();
    const drawn = Math.min(box.height, Math.max(0, window.innerHeight * DRAW_LINE - box.top));
    fill.style.transform = `scaleY(${drawn / box.height})`;

    for (const item of list.querySelectorAll<HTMLElement>("[data-entry]")) {
      item.dataset.reached = String(item.offsetTop <= drawn);
    }
  });

  return (
    <Section id="experience" aria-labelledby="experience-heading">
      <SectionHeading
        id="experience-heading"
        index={3}
        title={t(sectionCopy.experience.title)}
        subtitle={t(sectionCopy.experience.subtitle)}
      />
      <div className="container mx-auto px-5 py-12">
        <ol ref={listRef} className="relative">
          {/* The rail, and the part of it that fills as the page scrolls. */}
          <span aria-hidden="true" className="absolute inset-y-0 left-1 w-px bg-line sm:left-[11.5rem]" />
          <span
            ref={fillRef}
            aria-hidden="true"
            className="absolute inset-y-0 left-1 w-px origin-top scale-y-0 bg-accent-soft motion-reduce:scale-y-100 sm:left-[11.5rem]"
          />

          {career.map((entry) => (
            <li
              key={entry.id}
              data-entry
              className="relative grid gap-x-16 gap-y-1 pb-12 pl-7 last:pb-0 sm:grid-cols-[10rem_minmax(0,1fr)] sm:pl-0"
            >
              <span
                aria-hidden="true"
                className="timeline-dot absolute left-0 top-1.5 h-[0.5625rem] w-[0.5625rem] rounded-full sm:left-[11.25rem]"
              />
              <div>
                <p className="font-mono text-sm text-muted">{t(entry.period)}</p>
                <p className="eyebrow mt-1 flex items-center gap-2">
                  {entry.current && <span aria-hidden="true" className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent-soft" />}
                  {t(entry.kind === "work" ? ui.work : ui.education)}
                </p>
              </div>
              <div className="max-w-3xl">
                <h3 className="title-font text-xl font-medium text-heading">{t(entry.title)}</h3>
                <p className="text-sm text-accent-soft">{t(entry.organization)}</p>
                <p className="mt-2 leading-relaxed">{t(entry.description)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
};

export default ExperienceComponent;
