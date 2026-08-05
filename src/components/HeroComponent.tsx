import { role, site, summary } from "../data/site";
import { ui } from "../data/ui";
import { usePreferences } from "../preferences/context";
import { ArrowRightIcon, DocumentIcon, GitHubIcon, GridIcon, LinkedInIcon } from "./ui/icons";

const socials = [
  { href: site.github, label: "GitHub", Icon: GitHubIcon },
  { href: site.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
];

const HeroComponent = () => {
  const { t } = usePreferences();

  return (
    <section id="home" className="relative overflow-hidden" aria-labelledby="hero-heading">
      {/* Ambient glow behind the fold — decorative only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="container relative mx-auto flex flex-col items-center gap-10 px-5 py-14 md:flex-row md:py-24">
        <div className="w-4/5 max-w-sm shrink-0 sm:w-3/5 md:w-2/5">
          <img
            className="h-auto w-full rounded-2xl object-cover object-center shadow-2xl ring-1 ring-line"
            alt={`${t(ui.portraitOf)} ${site.name}`}
            src="/img/portrait-1024.jpeg"
            srcSet="/img/portrait-640.jpeg 575w, /img/portrait-1024.jpeg 919w"
            sizes="(min-width: 1024px) 28rem, (min-width: 768px) 40vw, 80vw"
            width={919}
            height={1024}
            decoding="async"
          />
        </div>

        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-sm text-accent-soft">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
            {t(ui.available)}
          </p>

          <h1 id="hero-heading" className="title-font text-4xl font-semibold text-heading sm:text-5xl">
            {site.name}
          </h1>
          <p className="title-font mt-2 text-2xl font-medium text-accent-soft sm:text-3xl">{t(role)}</p>
          <p className="mt-5 max-w-xl leading-relaxed">{t(summary)}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center rounded-lg bg-accent px-6 py-2.5 font-medium text-accent-contrast transition-opacity duration-300 hover:opacity-90"
            >
              {t(ui.viewProjects)}
              <GridIcon className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-line px-6 py-2.5 font-medium text-heading transition-colors duration-300 hover:border-accent hover:bg-elevated"
            >
              {t(ui.getInTouch)}
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
            <a
              href={site.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-line px-6 py-2.5 font-medium text-heading transition-colors duration-300 hover:border-accent hover:bg-elevated"
            >
              {t(ui.cv)}
              <DocumentIcon className="ml-2 h-4 w-4" />
            </a>
          </div>

          <ul className="mt-8 flex items-center gap-5">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-body transition-colors hover:text-heading"
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
