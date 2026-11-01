import defaultTheme from "tailwindcss/defaultTheme";

/**
 * Colours are semantic tokens backed by CSS variables (see index.css), so a
 * component says `bg-surface` once and both themes follow. Only the handful of
 * genuinely theme-specific cases need a `dark:` variant.
 */
const token = (name) => `rgb(var(--color-${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        display: ["Bricolage Grotesque Variable", "Inter Variable", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono Variable", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        page: token("page"),
        surface: token("surface"),
        elevated: token("elevated"),
        line: token("line"),
        heading: token("heading"),
        body: token("body"),
        muted: token("muted"),
        accent: {
          DEFAULT: token("accent"),
          soft: token("accent-soft"),
          contrast: token("accent-contrast"),
        },
        signal: token("signal"),
        danger: token("danger"),
      },
    },
  },
  plugins: [],
};
