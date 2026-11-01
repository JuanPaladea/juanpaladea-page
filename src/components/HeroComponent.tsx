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

const HeroComponent = () => {
  const { lang, t } = usePreferences();

  return (
    <section id="home" className="relative overflow-hidden" aria-labelledby="hero-heading">
      <SignalField className="absolute inset-0 h-full w-full" />

      <div className="container relative mx-auto grid items-center gap-12 px-5 py-14 lg:grid-cols-[minmax(0,1fr)_24rem] lg:py-24 xl:grid-cols-[minmax(0,1fr)_28rem]">
        <div>
          <p
            className="enter mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm text-accent-soft"
            style={entrance(100)}
          >
            <span aria-hidden="true" className="pulse-dot h-2 w-2 rounded-full bg-accent-soft" />
            {t(location)}
            <span aria-hidden="true" className="text-muted">·</span>
            {site.timezone}
            <span aria-hidden="true" className="text-muted">·</span>
            {t(englishLevel)}
          </p>

          <h1
            id="hero-heading"
            className="title-font text-6xl font-semibold leading-none text-heading sm:text-7xl xl:text-8xl"
          >
            <KineticName text={site.name} />
          </h1>

          <p
            className="title-font enter mt-5 text-2xl font-medium text-heading sm:text-3xl"
            style={entrance(500)}
          >
            {t(role)}: <span className="text-accent-soft"><RotatingWord words={t(roleFocus)} /></span>
          </p>

          <p className="enter mt-6 max-w-2xl text-lg leading-relaxed" style={entrance(650)}>
            {t(summary)}
          </p>

          <div className="enter mt-8 flex flex-wrap gap-3" style={entrance(800)}>
            <a href="#projects" className="btn-primary">
              {t(ui.viewProjects)}
              <GridIcon className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              {t(ui.getInTouch)}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a href={cvUrl[lang]} target="_blank" rel="noopener noreferrer" download className="btn-ghost">
              {t(ui.downloadCv)}
              <DocumentIcon className="h-4 w-4" />
            </a>
          </div>

          <ul className="enter mt-8 flex items-center gap-5" style={entrance(950)}>
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

        <div className="max-w-sm lg:max-w-none">
          <img
            className="block h-auto w-full rounded-2xl object-cover shadow-2xl ring-1 ring-line"
            alt={`${t(ui.portraitOf)} ${site.name}`}
            src="/img/portrait-1024.jpeg"
            srcSet="/img/portrait-640.jpeg 575w, /img/portrait-1024.jpeg 919w"
            sizes="(min-width: 1024px) 28rem, (min-width: 768px) 24rem, 90vw"
            width={919}
            height={930}
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
