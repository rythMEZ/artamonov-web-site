import type { ExperienceItem } from "@/types/profile";

// TODO: заменить заглушки реальным опытом.
export const experience: ExperienceItem[] = [
  {
    id: "frontend-dev",
    role: "Frontend-разработчик",
    organization: "Название компании",
    period: "2024 — настоящее время",
    responsibilities: [
      "Разработка интерфейсов на React и TypeScript",
      "Поддержка и развитие библиотеки переиспользуемых компонентов",
      "Интеграция с REST API",
    ],
    achievements: [
      "Сократил время загрузки ключевых страниц за счёт оптимизации изображений и разделения кода",
      "Внедрил единый набор UI-компонентов для нескольких продуктов",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    id: "education",
    role: "Обучение frontend-разработке",
    organization: "Название курса или вуза",
    period: "2022 — 2024",
    responsibilities: [
      "Освоение современного стека веб-разработки",
      "Реализация учебных и личных проектов",
    ],
    achievements: ["Выпустил несколько проектов в портфолио"],
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
];
