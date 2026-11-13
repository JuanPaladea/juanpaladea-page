import {
  cvUrl,
  englishLevel,
  location,
  role,
  roleFocus,
  site,
  summary,
} from "../data/site";
import { ui } from "../data/ui";
import { usePreferences } from "../preferences/context";
import KineticName from "./motion/KineticName";
import RotatingWord from "./motion/RotatingWord";
import SignalField from "./motion/SignalField";
import { ArrowRightIcon, DocumentIcon, GitHubIcon, GridIcon, LinkedInIcon } from "./ui/icons";

const socials = [
  { href: site.github, label: "GitHub", Icon: GitHubIcon },
  { href: site.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
];

const entrance = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

/** Has to match the preload in index.html, or the browser fetches the portrait twice. */
const PORTRAIT_SIZES = "(min-width: 1280px) 28rem, (min-width: 1024px) 24rem, 6rem";

/** A row of the text: full width on a phone, the left column from lg up. */
const row = "col-span-2 lg:col-span-1 lg:col-start-1";

const ghost = "btn-ghost justify-center whitespace-nowrap px-3 sm:px-5";

const HeroComponent = () => {
  const { lang, t } = usePreferences();

  return (
    <section id="home" className="relative overflow-hidden" aria-labelledby="hero-heading">
      {/* Dimmed on a phone, where the grid runs behind the text instead of beside it. */}
      <SignalField className="absolute inset-0 h-full w-full opacity-50 sm:opacity-100" />

      {/*
        One grid for both layouts. On a phone the portrait is a small photo
        beside the first line, so it is on the first screen; from lg up it is
        the right-hand column, spanning every row of the text.
      */}
      <div className="container relative mx-auto grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 px-5 py-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-x-12 lg:py-24 xl:grid-cols-[minmax(0,1fr)_28rem]">
        <img
          className="block h-auto w-[4.5rem] rounded-xl object-cover shadow-lg ring-1 ring-line sm:w-24 lg:col-start-2 lg:row-span-6 lg:row-start-1 lg:w-full lg:rounded-2xl lg:shadow-2xl"
          alt={`${t(ui.portraitOf)} ${site.name}`}
          src="/img/portrait-1024.jpeg"
          srcSet="/img/portrait-640.jpeg 575w, /img/portrait-1024.jpeg 919w"
          sizes={PORTRAIT_SIZES}
          width={919}
          height={930}
          decoding="async"
        />

        <p
          className="enter flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm text-accent-soft lg:col-start-1"
          style={entrance(100)}
        >
          {t(location)}
          <span aria-hidden="true" className="text-muted">·</span>
          {site.timezone}
          <span aria-hidden="true" className="text-muted">·</span>
          {t(englishLevel)}
        </p>

        <h1
          id="hero-heading"
          className={`${row} title-font mt-6 text-6xl font-semibold leading-none text-heading sm:text-7xl xl:text-8xl`}
        >
          <KineticName text={site.name} />
        </h1>

        <p
          className={`${row} title-font enter mt-5 text-2xl font-medium text-heading sm:text-3xl`}
          style={entrance(500)}
        >
          {t(role)}: <span className="text-accent-soft"><RotatingWord words={t(roleFocus)} /></span>
        </p>

        <p className={`${row} enter mt-6 max-w-2xl text-lg leading-relaxed`} style={entrance(650)}>
          {t(summary)}
        </p>

        {/* On a phone: the main action full width, the other two sharing a row. */}
        <div
          className={`${row} enter mt-8 grid gap-3 min-[360px]:grid-cols-2 sm:flex sm:flex-wrap`}
          style={entrance(800)}
        >
          <a href="#projects" className="btn-primary justify-center min-[360px]:col-span-2">
            {t(ui.viewProjects)}
            <GridIcon className="h-4 w-4" />
          </a>
          <a href="#contact" className={ghost}>
            {t(ui.getInTouch)}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a href={cvUrl[lang]} target="_blank" rel="noopener noreferrer" download className={ghost}>
            {t(ui.downloadCv)}
            <DocumentIcon className="h-4 w-4" />
          </a>
        </div>

        <ul className={`${row} enter mt-6 flex items-center gap-5 sm:mt-8`} style={entrance(950)}>
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="tap gap-2 text-sm text-body transition-colors hover:text-heading"
              >
                <Icon className="h-5 w-5" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HeroComponent;
