import type { Skill } from "../../data/skills";
import TechChip from "../ui/TechChip";

/**
 * Two identical halves slide left by exactly one half, which makes the loop
 * seamless. Decorative: every item is listed in the groups below it, so it is
 * hidden from screen readers and for reduced-motion visitors.
 */
const TechMarquee = ({ items, reverse = false, duration }: { items: Skill[]; reverse?: boolean; duration: number }) => (
  <div
    aria-hidden="true"
    data-reverse={reverse}
    style={{ "--duration": `${duration}s` } as React.CSSProperties}
    className="marquee py-1.5 motion-reduce:hidden"
  >
    <div className="marquee-track">
      {[...items, ...items].map((skill, index) => (
        <TechChip key={`${skill.name}-${index}`} skill={skill} />
      ))}
    </div>
  </div>
);

export default TechMarquee;
