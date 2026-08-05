import { useEffect, useState } from "react";
import { contactNavLabel, navLinks, site } from "../data/site";
import { ui } from "../data/ui";
import { usePreferences } from "../preferences/context";
import PreferenceToggles from "./ui/PreferenceToggles";
import InternalLink from "./ui/InternalLink";
import { ArrowRightIcon, CloseIcon, MenuIcon } from "./ui/icons";

/**
 * Section anchors only resolve on the home page, so project pages get a
 * stripped header rather than links that scroll nowhere.
 */
const HeaderComponent = ({ isHome }: { isHome: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = usePreferences();

  // Escape closes the mobile menu, matching what keyboard users expect.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // A route change must not leave the mobile menu hanging open.
  useEffect(() => setIsOpen(false), [isHome]);

  const allLinks = [...navLinks, { href: "#contact", label: contactNavLabel }];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/85 backdrop-blur">
      <div className="container mx-auto flex items-center gap-4 px-5 py-3">
        <InternalLink to="/" className="title-font shrink-0 rounded text-xl font-semibold text-heading">
          {site.name}
        </InternalLink>

        {isHome && (
          <nav aria-label={t(ui.mainNav)} className="ml-auto hidden items-center gap-6 lg:flex">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="rounded text-body transition-colors hover:text-heading">
                {t(label)}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg bg-elevated px-3 py-1.5 text-body transition-colors hover:text-heading"
            >
              {t(contactNavLabel)}
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </a>
          </nav>
        )}

        <PreferenceToggles className={isHome ? "ml-auto lg:ml-4" : "ml-auto"} />

        {isHome && (
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={t(isOpen ? ui.closeMenu : ui.openMenu)}
            className="rounded-lg p-2 text-body transition-colors hover:bg-elevated hover:text-heading lg:hidden"
          >
            {isOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        )}
      </div>

      {isHome && (
        <nav
          id="mobile-menu"
          aria-label={t(ui.mobileNav)}
          hidden={!isOpen}
          className="border-t border-line px-5 pb-4 lg:hidden"
        >
          <ul className="flex flex-col">
            {allLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded py-3 text-body transition-colors hover:text-heading"
                >
                  {t(label)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default HeaderComponent;
