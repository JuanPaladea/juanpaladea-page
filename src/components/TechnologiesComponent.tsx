import { sectionCopy } from "../data/site";
import { skillGroups } from "../data/skills";
import { usePreferences } from "../preferences/context";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import TechChip from "./ui/TechChip";

const TechnologiesComponent = () => {
  const { t } = usePreferences();

  return (
    <Section id="skills" aria-labelledby="skills-heading">
      <SectionHeading
        id="skills-heading"
        title={t(sectionCopy.skills.title)}
        subtitle={t(sectionCopy.skills.subtitle)}
      />
      <div className="container mx-auto px-5 py-12">
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <div
              key={group.title.en}
              className={`rounded-xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/50 ${
                // The last card fills the row when the count is odd.
                index === skillGroups.length - 1 && skillGroups.length % 2 === 1 ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="title-font text-lg font-medium text-heading">{t(group.title)}</h3>
              <p className="mb-4 text-sm text-muted">{t(group.description)}</p>
              <ul className="flex flex-wrap gap-2">
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
