export type ProjectCategory = "frontend" | "backend" | "layout";

export type ProjectCategoryFilter = ProjectCategory | "all";

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  categories: ProjectCategory[];
  technologies: string[];
  features: string[];
  images: ProjectImage[];
  cover: ProjectImage;
  year: number;
  /** Задача и назначение проекта. */
  challenge: string;
  /** Особенности реализации. */
  implementation: string;
  /** Результат работы. */
  result: string;
  liveUrl?: string;
  figmaUrl?: string;
  githubUrl?: string;
}
