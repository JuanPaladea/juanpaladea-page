import type { Skill } from "../../data/skills";

interface TechChipProps {
  skill: Skill;
  size?: "sm" | "md";
}

/**
 * Every logo sits on the same light tile, so dark marks (Express, GitHub,
 * Vercel) stay legible in both themes without per-icon special cases.
 * Skills without a logo fall back to a dot, which keeps the row rhythm intact.
 */
const TechChip = ({ skill, size = "md" }: TechChipProps) => {
  const isSmall = size === "sm";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-elevated text-body ${
        isSmall ? "px-2 py-1 text-xs" : "px-3 py-1.5 text-sm"
      }`}
    >
      {skill.icon ? (
        <img
          src={skill.icon}
          alt=""
          width={isSmall ? 16 : 20}
          height={isSmall ? 16 : 20}
          loading="lazy"
          decoding="async"
          className={`shrink-0 rounded bg-white object-contain p-0.5 ${isSmall ? "h-4 w-4" : "h-5 w-5"}`}
        />
      ) : (
        <span
          aria-hidden="true"
          className={`shrink-0 rounded-full bg-accent ${isSmall ? "h-1.5 w-1.5" : "h-2 w-2"}`}
        />
      )}
      {skill.name}
    </span>
  );
};

export default TechChip;
