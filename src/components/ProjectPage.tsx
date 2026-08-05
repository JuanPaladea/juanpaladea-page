import { useEffect } from "react";
import { projects } from "../data/projects";
import { projectDetails } from "../data/projectDetails";
import { site } from "../data/site";
import { ui } from "../data/ui";
import { usePreferences } from "../preferences/context";
import { projectPath } from "../router";
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
          to="/"
          className="inline-flex items-center gap-2 text-sm text-body transition-colors hover:text-heading"
        >
          <ArrowRightIcon className="h-4 w-4 rotate-180" />
          {t(ui.backToProjects)}
        </InternalLink>
      </div>

      <header className="container mx-auto px-5 pt-8">
        <p className="text-sm font-medium tracking-wide text-accent-soft">{t(project.category)}</p>
        <h1 className="title-font mt-2 text-3xl font-semibold text-heading sm:text-4xl">{project.title}</h1>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed">{t(detail.tagline)}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-medium text-accent-contrast transition-opacity hover:opacity-90"
          >
            {t(project.demoLabel)}
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 font-medium text-heading transition-colors hover:border-accent hover:bg-elevated"
          >
            <GitHubIcon className="h-4 w-4" />
            {t(ui.code)}
          </a>
        </div>
      </header>

      <div className="container mx-auto px-5 pt-10">
        <img
          src={project.image}
          alt={t(project.imageAlt)}
          width={project.imageWidth}
          height={project.imageHeight}
          decoding="async"
          className="w-full rounded-xl border border-line object-cover"
        />
      </div>

      <div className="container mx-auto grid gap-10 px-5 pt-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div>
          <h2 className="title-font text-xl font-semibold text-heading">{t(ui.contextHeading)}</h2>
          <div className="mt-3 space-y-4 leading-relaxed">
            {t(detail.context).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <h2 className="title-font mt-10 text-xl font-semibold text-heading">{t(ui.decisionsHeading)}</h2>
          <ol className="mt-4 space-y-5">
            {t(detail.decisions).map((decision, index) => (
              <li key={decision.title} className="rounded-xl border border-line bg-surface p-5">
                <h3 className="title-font flex gap-3 font-medium text-heading">
                  <span aria-hidden="true" className="text-accent-soft">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {decision.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed">{decision.body}</p>
              </li>
            ))}
          </ol>

          <h2 className="title-font mt-10 text-xl font-semibold text-heading">{t(ui.nextHeading)}</h2>
          <p className="mt-3 leading-relaxed">{t(detail.next)}</p>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-line bg-surface p-6">
            <dl className="space-y-4">
              {t(detail.facts).map((fact) => (
                <div key={fact.title}>
                  <dt className="title-font text-xs font-semibold tracking-widest text-muted">{fact.title}</dt>
                  <dd className="mt-0.5 text-sm text-heading">{fact.body}</dd>
                </div>
              ))}
            </dl>

            <h2 className="title-font mt-6 text-xs font-semibold tracking-widest text-muted">
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
          <ul className="grid gap-4 sm:grid-cols-2">
            {others.map((other) => (
              <li key={other.id}>
                <InternalLink
                  to={projectPath(other.id)}
                  className="flex h-full items-center justify-between gap-4 rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent/60"
                >
                  <span>
                    <span className="block text-xs tracking-widest text-muted">{t(other.category)}</span>
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
