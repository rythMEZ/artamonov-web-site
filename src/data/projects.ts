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
    src: `/images/projects/project-${project}-${screen}.png`,
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

export const projects: Project[] = [
  {
    id: "1",
    slug: "stellar-Burger",
    title: "Космическая бургерная",
    description:
      "Интернет-магазин с конструктором бургеров, авторизацией, профилем пользователя и лентой заказов",
    categories: ["frontend"],
    technologies: ["React", "TypeScript", "Redux Toolkit", "React Router", "Playwright" ],
    features: [
    "Конструктор бургера: выбор булки, добавление, удаление и перестановка ингредиентов",
    "Лента общих заказов и история заказов пользователя",
    "Авторизация с защищёнными маршрутами и обновлением токена",
    "Модальные окна ингредиента и заказа с отдельными URL",

    ],
    images: screenshots(1, "Космическая бургерная"),
    cover: screenshot(1, 1, "Превью проекта «Космическая бургерная»"),
    year: 2025,
    challenge:
    "Нужно было собрать клиентскую часть приложения целиком: маршрутизацию, глобальное состояние и авторизацию без перезагрузки страницы.",
    implementation:
      "Состояние разнесено по слайсам Redux Toolkit, запросы к API вынесены в createAsyncThunk, презентационные компоненты отделены от контейнеров, а доступ к закрытым разделам ограничен отдельным компонентом ProtectedRoute. Для проверки логики написаны юнит-тесты редьюсеров и интеграционные тесты пользовательских сценариев с моками сети.",
    result:
      "Работающее SPA с конструктором бургера, лентой заказов и личным кабинетом, покрытое юнит- и интеграционными тестами.",
    liveUrl: "https://example.com",
    figmaUrl: "https://www.figma.com/design/MdS2PmTcdEAh9Cpe6dueSx/React-Fullstack_%25D0%259F%25D1%2580%25D0%25BE%25D0%25B5%25D0%25BA%25D1%2582%25D0%25BD%25D1%258B%25D0%25B5-%25D0%25B7%25D0%25B0%25D0%25B4%25D0%25B0%25D1%2587%25D0%25B8_3-%25D0%25BC%25D0%25B5%25D1%2581%25D1%258F%25D1%2586%25D0%25B0?node-id=1-5647&p=f&t=RTDQkco1gB5N2DS9-0",
    githubUrl: "https://github.com/rythMEZ/stellar-burgers",
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
