import { aboutMe, sectionCopy } from "../data/site";
import { usePreferences } from "../preferences/context";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import { QuoteIcon } from "./ui/icons";

const AboutMeComponent = () => {
  const { t } = usePreferences();

  return (
    <Section id="aboutme" aria-labelledby="aboutme-heading">
      <SectionHeading
        id="aboutme-heading"
        title={t(sectionCopy.about.title)}
        subtitle={t(sectionCopy.about.subtitle)}
      />
      <div className="container mx-auto px-5 py-12">
        <div className="mx-auto max-w-3xl">
          <QuoteIcon className="mb-6 h-7 w-7 text-accent/60" />
          <div className="space-y-5 leading-relaxed">
            {aboutMe.map((paragraph, index) => (
              <p key={paragraph.en.slice(0, 32)} className={index === 0 ? "text-lg text-heading" : undefined}>
                {t(paragraph)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMeComponent;
