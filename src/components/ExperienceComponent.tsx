import { career } from "../data/career";
import { sectionCopy } from "../data/site";
import { ui } from "../data/ui";
import { usePreferences } from "../preferences/context";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";

const ExperienceComponent = () => {
  const { t } = usePreferences();

  return (
    <Section id="experience" aria-labelledby="experience-heading">
      <SectionHeading
        id="experience-heading"
        title={t(sectionCopy.experience.title)}
        subtitle={t(sectionCopy.experience.subtitle)}
      />
      <div className="container mx-auto px-5 py-12">
        <ol className="relative mx-auto max-w-3xl border-l border-line pl-6 sm:pl-8">
          {career.map((entry) => (
            <li key={entry.id} className="relative pb-10 last:pb-0">
              {/* Dot sits on the timeline rule. */}
              <span
                aria-hidden="true"
                className={`absolute -left-[1.8125rem] top-1.5 h-3 w-3 rounded-full ring-4 ring-page sm:-left-[2.3125rem] ${
                  entry.current ? "bg-accent" : "bg-line"
                }`}
              />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <p className="text-sm font-medium text-muted">{t(entry.period)}</p>
                <span className="rounded-full border border-line px-2 py-0.5 text-xs text-muted">
                  {t(entry.kind === "work" ? ui.work : ui.education)}
                </span>
              </div>
              <h3 className="title-font mt-1 text-lg font-medium text-heading">{t(entry.title)}</h3>
              <p className="text-sm text-accent-soft">{t(entry.organization)}</p>
              <p className="mt-2 text-sm leading-relaxed">{t(entry.description)}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
};

export default ExperienceComponent;
