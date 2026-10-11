import type {
  Project,
  ProjectCategoryFilter,
  ProjectImage,
} from "@/types/project";

export const categoryLabels: Record<ProjectCategoryFilter, string> = {
  all: "Все проекты",
  frontend: "Frontend",
  backend: "Backend",
  layout: "Вёрстка",
};

export const filterOptions: ProjectCategoryFilter[] = [
  "all",
  "frontend",
  "backend",
  "layout",
];

function screenshot(project: number, screen: number, alt: string): ProjectImage {
  return {
    src: `/images/projects/project-${project}-${screen}.svg`,
    alt,
    width: 1600,
    height: 1000,
  };
}

function screenshots(project: number, title: string): ProjectImage[] {
  return [1, 2, 3].map((screen) =>
    screenshot(project, screen, `${title}: экран ${screen}`),
  );
}

// TODO: заменить заглушки реальными проектами, скриншотами и ссылками.
export const projects: Project[] = [
  {
    id: "1",
    slug: "task-manager",
    title: "Менеджер задач",
    description:
      "Веб-приложение для планирования задач с досками, фильтрами и drag-and-drop.",
    categories: ["frontend"],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: [
      "Доски и колонки с перетаскиванием карточек",
      "Фильтрация и поиск задач",
      "Сохранение состояния в localStorage",
    ],
    images: screenshots(1, "Менеджер задач"),
    cover: screenshot(1, 1, "Превью проекта «Менеджер задач»"),
    year: 2025,
    challenge:
      "Нужно было создать простой инструмент для личного планирования без регистрации и лишних настроек.",
    implementation:
      "Состояние вынесено в типизированный редьюсер, компоненты разделены по ответственности, интерфейс адаптирован под мобильные устройства.",
    result:
      "Готовое приложение, которое работает офлайн и сохраняет данные между сессиями.",
    liveUrl: "https://example.com",
    figmaUrl: "https://www.figma.com/",
    githubUrl: "https://github.com/",
  },
  {
    id: "2",
    slug: "landing-studio",
    title: "Лендинг студии дизайна",
    description:
      "Адаптивная вёрстка многостраничного лендинга по макету из Figma.",
    categories: ["layout"],
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Pixel-perfect вёрстка по макету",
      "Адаптивность от 360 до 1920 px",
      "Анимации появления блоков",
    ],
    images: screenshots(2, "Лендинг студии дизайна"),
    cover: screenshot(2, 1, "Превью проекта «Лендинг студии дизайна»"),
    year: 2024,
    challenge:
      "Перенести макет студии дизайна в аккуратную и быструю вёрстку.",
    implementation:
      "Использованы семантические теги, CSS-переменные и сетка на Grid и Flexbox.",
    result: "Страница с высокими показателями Lighthouse и корректным отображением на всех устройствах.",
    figmaUrl: "https://www.figma.com/",
    githubUrl: "https://github.com/",
  },
  {
    id: "3",
    slug: "shop-api",
    title: "API интернет-магазина",
    description:
      "Серверная часть магазина: каталог, корзина и заказы с REST API.",
    categories: ["backend"],
    technologies: ["Node.js", "TypeScript", "PostgreSQL"],
    features: [
      "REST API для каталога, корзины и заказов",
      "Валидация запросов и обработка ошибок",
      "Документация эндпоинтов",
    ],
    images: screenshots(3, "API интернет-магазина"),
    cover: screenshot(3, 1, "Превью проекта «API интернет-магазина»"),
    year: 2025,
    challenge:
      "Спроектировать API, на который можно опереться при разработке клиентского приложения.",
    implementation:
      "Слоистая архитектура, строгая типизация входных и выходных данных, миграции базы данных.",
    result: "Стабильный API с документацией, который используется в учебном магазине.",
    githubUrl: "https://github.com/",
  },
  {
    id: "4",
    slug: "weather-dashboard",
    title: "Панель погоды",
    description:
      "Полный стек: Next.js-приложение с прогнозом погоды и собственным API-прокси.",
    categories: ["frontend", "backend"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Route Handlers"],
    features: [
      "Поиск города и прогноз на неделю",
      "Кэширование ответов внешнего API",
      "Тёмные и светлые блоки интерфейса",
    ],
    images: screenshots(4, "Панель погоды"),
    cover: screenshot(4, 1, "Превью проекта «Панель погоды»"),
    year: 2026,
    challenge:
      "Показать прогноз погоды, не раскрывая ключ внешнего API в браузере.",
    implementation:
      "Запросы к внешнему сервису идут через Route Handlers, данные типизированы и кэшируются.",
    result: "Быстрое приложение, развёрнутое на Vercel.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function filterProjects(
  list: Project[],
  category: ProjectCategoryFilter,
): Project[] {
  if (category === "all") return list;
  return list.filter((project) => project.categories.includes(category));
}
