import { flushSync } from "react-dom";
import type { MouseEvent } from "react";
import { ui } from "../../data/ui";
import { prefersReducedMotion } from "../../hooks/useMediaQuery";
import { usePreferences } from "../../preferences/context";
import { MoonIcon, SunIcon } from "./icons";

const buttonClass =
  "inline-flex items-center justify-center rounded-lg border border-line text-body transition-colors hover:border-accent hover:text-heading";

/**
 * Language and theme switches. The language control is two pressed-state
 * buttons rather than a toggle, so the current language is always announced.
 */
const PreferenceToggles = ({ className = "" }: { className?: string }) => {
  const { lang, setLang, theme, toggleTheme, t } = usePreferences();
  const isDark = theme === "dark";

  // The new theme opens as a circle from the button that asked for it.
  const switchTheme = (event: MouseEvent<HTMLButtonElement>) => {
    if (!document.startViewTransition || prefersReducedMotion()) {
      toggleTheme();
      return;
    }

    const root = document.documentElement;
    const box = event.currentTarget.getBoundingClientRect();
    root.style.setProperty("--vt-x", `${box.left + box.width / 2}px`);
    root.style.setProperty("--vt-y", `${box.top + box.height / 2}px`);
    root.classList.add("vt-theme");

    const transition = document.startViewTransition(() => flushSync(toggleTheme));
    transition.finished.finally(() => root.classList.remove("vt-theme"));
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div
        role="group"
        aria-label={t(ui.languageLabel)}
        className="flex items-center overflow-hidden rounded-lg border border-line text-sm"
      >
        {(["en", "es"] as const).map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            title={t(code === "es" ? ui.switchToSpanish : ui.switchToEnglish)}
            className={`px-2.5 py-1.5 font-medium uppercase transition-colors ${
              lang === code ? "bg-accent text-accent-contrast" : "text-body hover:text-heading"
            }`}
          >
            {code}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={switchTheme}
        aria-label={t(isDark ? ui.toLight : ui.toDark)}
        title={t(isDark ? ui.toLight : ui.toDark)}
        className={`${buttonClass} h-9 w-9`}
      >
        {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
      </button>
    </div>
  );
};

export default PreferenceToggles;
