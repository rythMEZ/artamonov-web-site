import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { categoryLabels } from "@/data/projects";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  tone?: "light" | "dark";
}

const tones = {
  light: {
    card: "border-border bg-background text-foreground hover:border-foreground focus-visible:border-foreground",
    cover: "bg-surface",
    categoryBadge: "solid",
    arrow: "text-muted group-hover:text-foreground",
    description: "text-muted",
    techBadge: "light",
  },
  dark: {
    card: "border-border-on-dark bg-zinc-900 text-on-dark hover:border-on-dark focus-visible:border-on-dark",
    cover: "bg-zinc-800",
    categoryBadge: "solid-on-dark",
    arrow: "text-muted-on-dark group-hover:text-on-dark",
    description: "text-muted-on-dark",
    techBadge: "dark",
  },
} as const;

export function ProjectCard({ project, tone = "light" }: ProjectCardProps) {
  const styles = tones[tone];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-card border transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${styles.card}`}
    >
      <div
        className={`relative aspect-[16/10] overflow-hidden ${styles.cover}`}
      >
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          width={project.cover.width}
          height={project.cover.height}
          sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-fill transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <ul aria-label="Категории" className="flex flex-wrap gap-2">
          {project.categories.map((category) => (
            <li key={category}>
              <Badge tone={styles.categoryBadge}>
                {categoryLabels[category]}
              </Badge>
            </li>
          ))}
        </ul>

        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <ArrowUpRight
            aria-hidden="true"
            className={`mt-1 size-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${styles.arrow}`}
          />
        </div>

        <p className={styles.description}>{project.description}</p>

        <ul aria-label="Технологии" className="mt-auto flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <Badge tone={styles.techBadge}>{tech}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
