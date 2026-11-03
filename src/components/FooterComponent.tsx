import { site } from "../data/site";
import { ui } from "../data/ui";
import { usePreferences } from "../preferences/context";
import HeartbeatLine from "./motion/HeartbeatLine";
import InternalLink from "./ui/InternalLink";
import { GitHubIcon, LinkedInIcon } from "./ui/icons";

const FooterComponent = () => {
  const { t } = usePreferences();

  return (
    <footer className="mt-24">
      <HeartbeatLine />
      <div className="container mx-auto flex flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center">
        <InternalLink to="/" className="title-font flex items-center text-xl font-semibold text-heading">
          {site.name}
        </InternalLink>
        <p className="text-sm sm:border-l sm:border-line sm:py-2 sm:pl-4">
          © {new Date().getFullYear()} · {t(ui.builtWith)}
        </p>
        <span className="inline-flex gap-4 sm:ml-auto">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${site.name}, GitHub`}
            className="text-body transition-colors hover:text-heading"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${site.name}, LinkedIn`}
            className="text-body transition-colors hover:text-heading"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default FooterComponent;
