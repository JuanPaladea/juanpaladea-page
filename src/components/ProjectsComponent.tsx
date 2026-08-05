import { projects } from "../data/projects";
import { sectionCopy } from "../data/site";
import { ui } from "../data/ui";
import { usePreferences } from "../preferences/context";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import TechChip from "./ui/TechChip";
import { ExternalLinkIcon, GitHubIcon } from "./ui/icons";

const ProjectsComponent = () => {
  const { t } = usePreferences();

  return (
    <Section id="projects" aria-labelledby="projects-heading">
      <SectionHeading
        id="projects-heading"
        title={t(sectionCopy.projects.title)}
        subtitle={t(sectionCopy.projects.subtitle)}
      />
      <div className="container mx-auto px-5 py-12">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id} className="flex">
              <article className="flex w-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-300 hover:border-accent/60">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden bg-elevated"
                  aria-label={`${project.title} — ${t(project.demoLabel)} (${t(ui.opensInNewTab)})`}
                >
                  <img
                    className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    src={project.image}
                    alt={t(project.imageAlt)}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-page/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <ExternalLinkIcon className="h-8 w-8 text-heading" />
                  </span>
                  <span className="absolute left-3 top-3 rounded-full bg-page/85 px-2.5 py-1 text-xs font-medium tracking-wide text-accent-soft backdrop-blur">
                    {t(project.category)}
                  </span>
                </a>

                <div className="flex flex-grow flex-col p-6">
                  <h3 className="title-font mb-2 text-lg font-medium text-heading">{project.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed">{t(project.description)}</p>

                  <ul className="mb-5 space-y-1.5 text-sm">
                    {t(project.highlights).map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <ul className="mb-5 flex flex-wrap gap-1.5">
                    {project.stack.map((item) => (
                      <li key={item.name}>
                        <TechChip skill={item} size="sm" />
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-soft transition-opacity hover:opacity-80"
                    >
                      {t(project.demoLabel)}
                      <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-body transition-colors hover:text-heading"
                      aria-label={`${project.title} — ${t(ui.sourceOnGitHub)}`}
                    >
                      <GitHubIcon className="h-4 w-4" />
                      {t(ui.code)}
                    </a>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default ProjectsComponent;
