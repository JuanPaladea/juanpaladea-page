import { projects } from "../data/projects";
import { sectionCopy } from "../data/site";
import { ui } from "../data/ui";
import { usePreferences } from "../preferences/context";
import { projectPath } from "../router";
import ProjectCover from "./motion/ProjectCover";
import TiltCard from "./motion/TiltCard";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import TechChip from "./ui/TechChip";
import InternalLink from "./ui/InternalLink";
import { ArrowRightIcon, ExternalLinkIcon, GitHubIcon } from "./ui/icons";

const ProjectsComponent = () => {
  const { t } = usePreferences();

  return (
    <Section id="projects" aria-labelledby="projects-heading">
      <SectionHeading
        id="projects-heading"
        index={1}
        title={t(sectionCopy.projects.title)}
        subtitle={t(sectionCopy.projects.subtitle)}
      />
      <div className="container mx-auto px-5 py-12">
        <ul data-stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id} className={`flex ${project.featured ? "md:col-span-2 lg:col-span-3" : ""}`}>
              <TiltCard
                className={`flex w-full flex-col overflow-hidden rounded-xl border border-line bg-surface hover:border-accent/60 ${
                  project.featured ? "lg:flex-row-reverse" : ""
                }`}
              >
                <InternalLink
                  to={projectPath(project.id)}
                  className={`group relative block overflow-hidden ${
                    project.featured ? "lg:m-6 lg:w-[52%] lg:shrink-0 lg:self-start lg:rounded-lg lg:border lg:border-line" : ""
                  }`}
                  aria-label={`${project.title}, ${t(ui.caseStudy)}`}
                >
                  <ProjectCover id={project.id} />
                  {/* The drawing tells the idea; hovering shows the real product. Touch screens cannot hover, so they get the product. */}
                  <img
                    className="absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100"
                    src={project.image}
                    alt=""
                    width={project.imageWidth}
                    height={project.imageHeight}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-page/85 px-2.5 py-1 font-mono text-xs text-accent-soft backdrop-blur">
                    {t(project.category)}
                  </span>
                </InternalLink>

                <div className="relative z-[2] flex flex-grow flex-col p-6">
                  <h3 className="title-font mb-2 text-2xl font-medium text-heading">
                    <InternalLink to={projectPath(project.id)} className="transition-colors hover:text-accent-soft">
                      {project.title}
                    </InternalLink>
                  </h3>
                  <p className="mb-4 leading-relaxed">{t(project.description)}</p>

                  <ul className="mb-5 space-y-1.5 text-sm">
                    {t(project.highlights).map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-soft" />
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

                  <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-4 text-sm">
                    <InternalLink
                      to={projectPath(project.id)}
                      className="inline-flex items-center gap-1.5 font-medium text-accent-soft transition-opacity hover:opacity-80"
                      aria-label={`${project.title}, ${t(ui.caseStudy)}`}
                    >
                      {t(ui.caseStudy)}
                      <ArrowRightIcon className="h-4 w-4" />
                    </InternalLink>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-body transition-colors hover:text-heading"
                      aria-label={`${project.title}, ${t(project.demoLabel)} (${t(ui.opensInNewTab)})`}
                    >
                      {t(project.demoLabel)}
                      <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-body transition-colors hover:text-heading"
                        aria-label={`${project.title}, ${t(ui.sourceOnGitHub)}`}
                      >
                        <GitHubIcon className="h-4 w-4" />
                        {t(ui.code)}
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default ProjectsComponent;
