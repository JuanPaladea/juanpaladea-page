import { sectionCopy } from "../data/site";
import { skillGroups } from "../data/skills";
import type { Skill } from "../data/skills";
import { usePreferences } from "../preferences/context";
import TechMarquee from "./motion/TechMarquee";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import TechChip from "./ui/TechChip";

const withLogo = skillGroups.flatMap((group) => group.items).filter((skill) => skill.icon);
const unique: Skill[] = [...new Map(withLogo.map((skill) => [skill.name, skill])).values()];
const middle = Math.ceil(unique.length / 2);

const TechnologiesComponent = () => {
  const { t } = usePreferences();

  return (
    <Section id="skills" aria-labelledby="skills-heading">
      <SectionHeading
        id="skills-heading"
        index={5}
        title={t(sectionCopy.skills.title)}
        subtitle={t(sectionCopy.skills.subtitle)}
      />

      <div className="mt-8 sm:mt-10">
        <TechMarquee items={unique.slice(0, middle)} duration={72} />
        <TechMarquee items={unique.slice(middle)} duration={60} reverse />
      </div>

      <div className="container mx-auto px-5 py-8 sm:py-12">
        <div data-stagger className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title.en}
              className="rounded-xl border border-line bg-surface p-5 transition-colors duration-300 hover:border-accent/50 sm:p-6"
            >
              <h3 className="title-font text-xl font-medium text-heading">{t(group.title)}</h3>
              <p className="mb-4 text-sm text-muted">{t(group.description)}</p>
              <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                {group.items.map((skill) => (
                  <li key={skill.name}>
                    <TechChip skill={skill} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TechnologiesComponent;
