import { useEffect } from "react";
import { projects } from "../data/projects";
import { projectDetails } from "../data/projectDetails";
import { site } from "../data/site";
import { ui } from "../data/ui";
import { usePreferences } from "../preferences/context";
import { projectPath } from "../router";
import ProjectCover from "./motion/ProjectCover";
import InternalLink from "./ui/InternalLink";
import TechChip from "./ui/TechChip";
import { ArrowRightIcon, ExternalLinkIcon, GitHubIcon } from "./ui/icons";

const ProjectPage = ({ id }: { id: string }) => {
  const { lang, t } = usePreferences();
  const project = projects.find((entry) => entry.id === id);
  const detail = projectDetails[id];

  // The tab title and share description have to follow the route, not the SPA shell.
  useEffect(() => {
    if (!project || !detail) return;
    const previousTitle = document.title;
    document.title = `${project.title} — ${site.name}`;
    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content") ?? "";
    meta?.setAttribute("content", `${project.title}: ${detail.tagline[lang]}`);
    return () => {
      document.title = previousTitle;
      meta?.setAttribute("content", previousDescription);
    };
  }, [project, detail, lang]);

  if (!project || !detail) return null;

  const others = projects.filter((entry) => entry.id !== id);

  return (
    <article className="pb-12">
      <div className="container mx-auto px-5 pt-10">
        <InternalLink
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-body transition-colors hover:text-heading"
        >
          <ArrowRightIcon className="h-4 w-4 rotate-180" />
          {t(ui.backToProjects)}
        </InternalLink>
      </div>

      <header className="container mx-auto px-5 pt-8">
        <p className="enter font-mono text-sm text-accent-soft">{t(project.category)}</p>
        <h1 className="title-font enter mt-2 text-4xl font-semibold text-heading sm:text-6xl">{project.title}</h1>
        <p className="enter mt-4 max-w-2xl text-xl leading-relaxed">{t(detail.tagline)}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t(project.demoLabel)}
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
          {project.companion && (
            <a href={project.companion.href} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              {t(project.companion.label)}
              <ExternalLinkIcon className="h-4 w-4" />
            </a>
          )}
          {project.repo ? (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <GitHubIcon className="h-4 w-4" />
              {t(ui.code)}
            </a>
          ) : (
            <span className="self-center font-mono text-sm text-muted">{t(ui.sourcePrivate)}</span>
          )}
        </div>
      </header>

      <div className="container mx-auto grid gap-5 px-5 pt-10 lg:grid-cols-2">
        <ProjectCover id={id} className="overflow-hidden rounded-xl border border-line" />
        <img
          src={project.image}
          alt={t(project.imageAlt)}
          width={project.imageWidth}
          height={project.imageHeight}
          decoding="async"
          className="aspect-video w-full rounded-xl border border-line object-cover object-top"
        />
      </div>

      <div className="container mx-auto grid gap-10 px-5 pt-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div>
          <h2 className="title-font text-2xl font-semibold text-heading">{t(ui.contextHeading)}</h2>
          <div className="mt-3 space-y-4 leading-relaxed">
            {t(detail.context).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <h2 className="title-font mt-10 text-2xl font-semibold text-heading">{t(ui.decisionsHeading)}</h2>
          <ol className="mt-4 space-y-5">
            {t(detail.decisions).map((decision, index) => (
              <li key={decision.title} className="rounded-xl border border-line bg-surface p-5">
                <h3 className="title-font flex gap-3 font-medium text-heading">
                  <span aria-hidden="true" className="font-mono text-accent-soft">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {decision.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed">{decision.body}</p>
              </li>
            ))}
          </ol>

          <h2 className="title-font mt-10 text-2xl font-semibold text-heading">{t(ui.nextHeading)}</h2>
          <p className="mt-3 leading-relaxed">{t(detail.next)}</p>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-line bg-surface p-6">
            <dl className="space-y-4">
              {t(detail.facts).map((fact) => (
                <div key={fact.title}>
                  <dt className="eyebrow">{fact.title}</dt>
                  <dd className="mt-0.5 text-sm text-heading">{fact.body}</dd>
                </div>
              ))}
            </dl>

            <h2 className="eyebrow mt-6">
              {t(ui.stackHeading)}
            </h2>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {project.stack.map((item) => (
                <li key={item.name}>
                  <TechChip skill={item} size="sm" />
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <nav aria-label={t(ui.backToProjects)} className="container mx-auto px-5 pt-14">
        <div className="border-t border-line pt-6">
          <ul className="grid gap-4 sm:grid-cols-3">
            {others.map((other) => (
              <li key={other.id}>
                <InternalLink
                  to={projectPath(other.id)}
                  className="flex h-full items-center justify-between gap-4 rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent/60"
                >
                  <span>
                    <span className="eyebrow block">{t(other.category)}</span>
                    <span className="title-font mt-1 block font-medium text-heading">{other.title}</span>
                  </span>
                  <ArrowRightIcon className="h-4 w-4 shrink-0 text-accent-soft" />
                </InternalLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </article>
  );
};

export default ProjectPage;
