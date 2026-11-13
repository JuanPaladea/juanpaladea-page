import type { Skill } from "../../data/skills";

interface TechChipProps {
  skill: Skill;
  size?: "sm" | "md";
}

/** Marks drawn in plain black: flipped to white in the dark theme. */
const BLACK_MARK = /\/(express|flask|github|jwt|mcp|nextjs|resend|shadcn|vercel)\.svg$/;

/** Marks that mix a dark ink with a colour, so they cannot be flipped and keep a light tile. */
const NEEDS_TILE = /\/aws\.svg$/;

/**
 * Logos sit straight on the chip, so a row of them reads as one line of text
 * and not as a row of white squares in the dark theme. Black marks are
 * inverted there instead. Skills without a logo fall back to a dot, which
 * keeps the row rhythm intact. The larger size steps down on a phone.
 */
const TechChip = ({ skill, size = "md" }: TechChipProps) => {
  const isSmall = size === "sm";
  const icon = skill.icon ?? "";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-elevated text-body ${
        isSmall ? "px-2 py-1 text-xs" : "px-2.5 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm"
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
          className={`shrink-0 object-contain ${isSmall ? "h-4 w-4" : "h-4 w-4 sm:h-5 sm:w-5"} ${
            BLACK_MARK.test(icon) ? "dark:invert" : ""
          } ${NEEDS_TILE.test(icon) ? "rounded bg-white p-0.5" : ""}`}
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
