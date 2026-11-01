import { aboutLead, aboutMe, aboutStats, sectionCopy } from "../data/site";
import { usePreferences } from "../preferences/context";
import CountUp from "./motion/CountUp";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";

const AboutMeComponent = () => {
  const { t } = usePreferences();

  return (
    <Section id="aboutme" aria-labelledby="aboutme-heading">
      <SectionHeading
        id="aboutme-heading"
        index={1}
        title={t(sectionCopy.about.title)}
        subtitle={t(sectionCopy.about.subtitle)}
      />
      <div className="container mx-auto grid gap-12 px-5 py-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20">
        <div data-stagger className="max-w-3xl space-y-5 leading-relaxed">
          <p className="title-font text-2xl font-medium leading-snug text-heading sm:text-3xl">{t(aboutLead)}</p>
          {aboutMe.map((paragraph) => (
            <p key={paragraph.en.slice(0, 32)}>{t(paragraph)}</p>
          ))}
        </div>

        <dl data-stagger className="grid grid-cols-2 content-start gap-x-6 gap-y-8 lg:grid-cols-1">
          {aboutStats.map((stat) => (
            <div key={stat.label.en} className="border-l-2 border-accent pl-4">
              <dd className="title-font text-4xl font-semibold text-heading">
                {typeof stat.value === "number" ? <CountUp value={stat.value} suffix={stat.suffix} /> : stat.value}
              </dd>
              <dt className="mt-1 text-sm leading-snug text-muted">{t(stat.label)}</dt>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
};

export default AboutMeComponent;
