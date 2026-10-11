"use client";

import { categoryLabels, filterOptions } from "@/data/projects";
import type { ProjectCategoryFilter } from "@/types/project";

interface ProjectFiltersProps {
  active: ProjectCategoryFilter;
  onChange: (category: ProjectCategoryFilter) => void;
}

export function ProjectFilters({ active, onChange }: ProjectFiltersProps) {
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
              isActive
                ? "border-foreground bg-foreground text-background"
                : "border-border text-foreground hover:border-foreground"
            }`}
          >
            {categoryLabels[option]}
          </button>
        );
      })}
    </div>
  );
}
