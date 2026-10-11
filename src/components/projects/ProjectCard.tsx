import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { categoryLabels } from "@/data/projects";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-card border border-border bg-background transition duration-300 hover:-translate-y-1 hover:border-foreground hover:shadow-xl focus-visible:-translate-y-1 focus-visible:border-foreground motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          width={project.cover.width}
          height={project.cover.height}
          sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <ul aria-label="Категории" className="flex flex-wrap gap-2">
          {project.categories.map((category) => (
            <li key={category}>
              <Badge tone="solid">{categoryLabels[category]}</Badge>
            </li>
          ))}
        </ul>

        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <ArrowUpRight
            aria-hidden="true"
            className="mt-1 size-5 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
          />
        </div>

        <p className="text-muted">{project.description}</p>

        <ul aria-label="Технологии" className="mt-auto flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
