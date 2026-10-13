"use client";

import { categoryLabels, filterOptions } from "@/data/projects";
import type { ProjectCategoryFilter } from "@/types/project";

interface ProjectFiltersProps {
  active: ProjectCategoryFilter;
  onChange: (category: ProjectCategoryFilter) => void;
  tone?: "light" | "dark";
}

const tones = {
  light: {
    active: "border-foreground bg-foreground text-background",
    inactive: "border-border text-foreground hover:border-foreground",
  },
  dark: {
    active: "border-on-dark bg-on-dark text-ink-dark",
    inactive: "border-border-on-dark text-on-dark hover:border-on-dark",
  },
} as const;

export function ProjectFilters({
  active,
  onChange,
  tone = "light",
}: ProjectFiltersProps) {
  const styles = tones[tone];

  return (
    <div
      role="group"
      aria-label="Фильтр проектов по категории"
      className="flex flex-wrap gap-2"
    >
      {filterOptions.map((option) => {
        const isActive = option === active;

        return (
          <button
            key={option}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option)}
            className={`min-h-11 rounded-full border px-5 text-sm font-medium transition-colors duration-200 ${
              isActive ? styles.active : styles.inactive
            }`}
          >
            {categoryLabels[option]}
          </button>
        );
      })}
    </div>
  );
}
