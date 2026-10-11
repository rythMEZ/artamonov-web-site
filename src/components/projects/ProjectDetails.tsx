import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { categoryLabels } from "@/data/projects";
import type { Project } from "@/types/project";
import { ProjectGallery } from "./ProjectGallery";

interface ProjectDetailsProps {
  project: Project;
}

interface InfoBlockProps {
  title: string;
  children: ReactNode;
}

function InfoBlock({ title, children }: InfoBlockProps) {
  return (
    <section className="border-t border-border pt-6">
      <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const links = [
    { label: "Открыть сайт", href: project.liveUrl },
    { label: "Макет в Figma", href: project.figmaUrl },
    { label: "Репозиторий на GitHub", href: project.githubUrl },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <article className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-16">
      <nav aria-label="Навигация по страницам" className="mb-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <Link
          href="/#projects"
          className="inline-flex min-h-11 items-center gap-2 text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Назад к проектам
        </Link>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-muted transition-colors hover:text-foreground"
        >
          На главную
        </Link>
      </nav>

      <header className="mb-10 max-w-3xl">
        <ul aria-label="Категории" className="mb-4 flex flex-wrap gap-2">
          {project.categories.map((category) => (
            <li key={category}>
              <Badge tone="solid">{categoryLabels[category]}</Badge>
            </li>
          ))}
        </ul>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          {project.title}
        </h1>
        <p className="mt-5 text-lg text-muted sm:text-xl">{project.description}</p>
        <ul aria-label="Технологии" className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>
      </header>

      <ProjectGallery images={project.images} />

      <div className="mt-12 grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <InfoBlock title="Задача и назначение">
            <p className="text-muted">{project.challenge}</p>
          </InfoBlock>

          <InfoBlock title="Что реализовано">
            <ul className="list-disc space-y-2 pl-5 text-muted marker:text-foreground">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </InfoBlock>

          <InfoBlock title="Особенности реализации">
            <p className="text-muted">{project.implementation}</p>
          </InfoBlock>

          <InfoBlock title="Результат">
            <p className="text-muted">{project.result}</p>
          </InfoBlock>
        </div>

        <aside aria-label="Информация о проекте" className="flex flex-col gap-8 lg:sticky lg:top-24 lg:self-start">
          <div>
            <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-muted">
              Год
            </h2>
            <p>{project.year}</p>
          </div>

          {links.length > 0 ? (
            <div>
              <h2 className="mb-3 text-sm font-medium uppercase tracking-widest text-muted">
                Ссылки
              </h2>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Button
                      href={link.href}
                      external
                      variant="secondary"
                      fullWidth
                    >
                      {link.label}
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                      <span className="sr-only"> (откроется в новой вкладке)</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>
      </div>
    </article>
  );
}
