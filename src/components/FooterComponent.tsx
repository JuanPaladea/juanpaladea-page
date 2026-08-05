import { site } from "../data/site";
import { GitHubIcon, LinkedInIcon } from "./ui/icons";

const FooterComponent = () => (
  <footer className="border-t border-line">
    <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
      <a href="#home" className="title-font flex items-center text-xl font-semibold text-heading">
        {site.name}
      </a>
      <p className="mt-4 text-sm sm:ml-4 sm:mt-0 sm:border-l sm:border-line sm:py-2 sm:pl-4">
        © {new Date().getFullYear()} —{" "}
        <a
          href={site.linkedin}
          className="text-muted transition-colors hover:text-heading"
          target="_blank"
          rel="noopener noreferrer"
        >
          @juanpaladea
        </a>
      </p>
      <span className="mt-4 inline-flex justify-center gap-4 sm:ml-auto sm:mt-0 sm:justify-start">
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${site.name} — GitHub`}
          className="text-body transition-colors hover:text-heading"
        >
          <GitHubIcon className="h-5 w-5" />
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${site.name} — LinkedIn`}
          className="text-body transition-colors hover:text-heading"
        >
          <LinkedInIcon className="h-5 w-5" />
        </a>
      </span>
    </div>
  </footer>
);

export default FooterComponent;
