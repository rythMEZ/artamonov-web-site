"use client";

import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { useState } from "react";
import { categoryLabels, filterProjects } from "@/data/projects";
import type { Project, ProjectCategoryFilter } from "@/types/project";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilters } from "./ProjectFilters";

interface ProjectsCatalogProps {
  projects: Project[];
}

function pluralizeProjects(count: number): string {
  const lastTwo = count % 100;
  const last = count % 10;
  if (lastTwo >= 11 && lastTwo <= 14) return "проектов";
  if (last === 1) return "проект";
  if (last >= 2 && last <= 4) return "проекта";
  return "проектов";
}

export function ProjectsCatalog({ projects }: ProjectsCatalogProps) {
  const [category, setCategory] = useState<ProjectCategoryFilter>("all");
  const visible = filterProjects(projects, category);

  return (
    <MotionConfig reducedMotion="user">
      <ProjectFilters active={category} onChange={setCategory} />

      <p role="status" aria-live="polite" className="sr-only">
        {visible.length > 0
          ? `Показано ${visible.length} ${pluralizeProjects(visible.length)}`
          : "Проектов в этой категории нет"}
      </p>

      {visible.length > 0 ? (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project) => (
              <motion.li
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard project={project} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      ) : (
        <div className="mt-8 rounded-card border border-dashed border-border p-10 text-center">
          <p className="text-lg font-medium">
            В категории «{categoryLabels[category]}» пока нет проектов
          </p>
          <button
            type="button"
            onClick={() => setCategory("all")}
            className="mt-4 min-h-11 rounded-full border border-border px-5 text-sm font-medium transition-colors hover:border-foreground"
          >
            Показать все проекты
          </button>
        </div>
      )}
    </MotionConfig>
  );
}
