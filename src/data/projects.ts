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

function screenshot(
  project: number,
  screen: number,
  alt: string,
  size: { width: number; height: number } = { width: 2560, height: 1440 },
): ProjectImage {
  return {
    src: `/images/projects/project-${project}-${screen}.png`,
    alt,
    width: size.width,
    height: size.height,
  };
}

function screenshots(project: number, title: string): ProjectImage[] {
  return [1, 2, 3].map((screen) =>
    screenshot(project, screen, `${title}: экран ${screen}`),
  );
}

export const projects: Project[] = [
// {
//   id: "1",
//   slug: "artamonova-portfolio",
//   title: "Портфолио фотографа",
//   description:
//     "Сайт-портфолио фотографа с отдельной стилизацией каждой галереи, полноэкранным просмотром фотографий, светлой и тёмной темами.",
//   categories: ["frontend"],
//   technologies: ["Next.js", "TypeScript", "Tailwind CSS", "CSS Modules", "Sharp"],
//   features: [
//     "Lookbook-галерея: фотографии выравниваются по высоте, широкие кадры занимают отдельную строку, а на главной используется мозаичная раскладка",
//     "Карусель обложек: по одной фотографии на экран, управление стрелками, свайпами и клавиатурой",
//     "Полноэкранный lightbox: переход между соседними кадрами, свайпы, управление фокусом и закрытие по Escape",
//     "Индивидуальное оформление каждой серии, а также светлая и тёмная темы с сохранением выбранного режима без мерцания при загрузке"
//   ],
//   images: [
//   screenshot(2, 1, "Портфолио фотографа Елены Артамоновой: экран 1"),
//   screenshot(2, 2, "Портфолио фотографа Елены Артамоновой: экран 2"),
//   screenshot(2, 3, "Портфолио фотографа Елены Артамоновой: экран 3"),
//   screenshot(2, 4, "Портфолио фотографа Елены Артамоновой: экран 4"),
//   screenshot(2, 5, "Портфолио фотографа Елены Артамоновой: экран 5"),
//   screenshot(2, 6, "Портфолио фотографа Елены Артамоновой: экран 6"),
// ],
//   cover: screenshot(2, 1, "Превью проекта «Портфолио фотографа Елены Артамоновой»"),
//   year: 2026,
//   challenge:
//     "Основная задача — сделать сайт, в котором главное место отведено фотографиям. У каждой серии свой характер и настроение, для этого реализована цветовая палитра для каждой серии портфолио отдельная стилизация.",
//   implementation:
//     "Основные страницы работают на Server Components, а клиентский код используется только для интерактивных элементов.  Галерея учитывает пропорции снимков и подстраивает их расположение под ширину экрана. Для полноэкранного просмотра используется native dialog: одновременно загружается текущая фотография и несколько соседних.",
//   result:
//     "Готовый сайт фотографа, с отдельными страницами и прайсом. Проект поддерживает адаптивную вёрстку и доступность, включая проверку контрастности и настройку prefers-reduced-motion.",
//   githubUrl: "https://github.com/rythMEZ/ph-artamonova-ea",
// },
  {
    id: "2",
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
    liveUrl: "https://rythmez.github.io/stellar-burgers/",
    figmaUrl: "https://www.figma.com/design/MdS2PmTcdEAh9Cpe6dueSx/React-Fullstack_%25D0%259F%25D1%2580%25D0%25BE%25D0%25B5%25D0%25BA%25D1%2582%25D0%25BD%25D1%258B%25D0%25B5-%25D0%25B7%25D0%25B0%25D0%25B4%25D0%25B0%25D1%2587%25D0%25B8_3-%25D0%25BC%25D0%25B5%25D1%2581%25D1%258F%25D1%2586%25D0%25B0?node-id=1-5647&p=f&t=RTDQkco1gB5N2DS9-0",
    githubUrl: "https://github.com/rythMEZ/stellar-burgers",
  },
{
  id: "3",
  slug: "film",
  title: "Онлайн-кинотеатр Film!",
  description:
    "Сервис онлайн-афиши: каталог фильмов, выбор сеанса и мест, корзина и оформление заказа.",
  categories: ["backend"],
  technologies: ["NestJS", "MongoDB", "PostgreSQL"],
  features: [
    "Пошаговое бронирование в модалке: сеанс, схема зала, корзина и контакты",
    "REST API каталога, расписания и заказа с проверкой границ зала и занятости мест",
    "Атомарная бронь: занятость проверяется и записывается в одной транзакции, одно место нельзя продать дважды",
  ],
  images: [
  screenshot(3, 1, "Онлайн-кинотеатр Film! 1"),
  screenshot(3, 2, "Онлайн-кинотеатр Film! 2"),
  screenshot(3, 3, "Онлайн-кинотеатр Film! 3"),
  screenshot(3, 4, "Онлайн-кинотеатр Film! 4"),
  screenshot(3, 5, "Онлайн-кинотеатр Film! 5"),
  screenshot(3, 6, "Онлайн-кинотеатр Film! 6"),
],
  cover: screenshot(3, 1, "Превью проекта «Онлайн-кинотеатр Film!»"),
  year: 2026,
  challenge:
    "Нужно было провести пользователя от афиши до купленного билета и при этом не допустить, чтобы одно место продали дважды.",
  implementation:
    "Сначала произведена реализация бэкенда с использованием MongoDB, затем осуществлена миграция на PostgreSQL. Связь OneToMany, бронь в транзакции с блокировкой строки.",
  result:
    "Работающее приложение кинотеатра с афишей, выбором мест и заказом билетов. Бэкенд покрыт e2e-тестами на каталог, расписание и конфликтные брони.",
  githubUrl: "https://github.com/rythMEZ/film-react-nest",
},
  {
  id: "4",
  slug: "weblarek",
  title: "Web-Larёk",
  description:
    "Интернет-магазин сувениров для разработчиков: каталог, корзина и двухшаговое оформление заказа.",
  categories: ["frontend"],
  technologies: ["TypeScript", "Vite", "SCSS", "HTML", "BEM"],
  features: [
    "Каталог с категориями, цветными бейджами, картинками и ценами",
    "Корзина: счётчик в шапке, сумма заказа и удаление позиций",
    "Двухшаговое оформление: способ оплаты и адрес, затем почта и телефон",
    "Заказ уходит на сервер, товары без цены помечены как бесценные и недоступны для покупки",
  ],
  images: [
  screenshot(4, 1, "weblarek 1"),
  screenshot(4, 2, "weblarek 2"),
  screenshot(4, 3, "weblarek 3"),
  screenshot(4, 4, "weblarek 4"),
  screenshot(4, 5, "weblarek 5"),
],
  cover: screenshot(4, 1, "Превью проекта «Веб-ларек»"),
  year: 2026,
  challenge:
    "Нужно было собрать полный цикл покупки без фреймворка: каталог, корзину и оформление заказа так, чтобы данные и интерфейс не знали друг о друге.",
  implementation:
    "Слои разделены по MVP: модели каталога, корзины и покупателя хранят состояние и шлют события, представления рисуют HTML-шаблоны, а презентер в точке входа только связывает их через EventEmitter. Карточки каталога, превью и корзины наследуют общий класс Card. Формы проверяют оплату, адрес, почту и телефон до отправки заказа на REST API.",
  result:
    "Работающий магазин с каталогом, корзиной и оформлением заказа: от выбора товара до подтверждения на сервере.",
  githubUrl: "https://github.com/rythMEZ/weblarek",
  figmaUrl: "https://www.figma.com/design/92C0vV1ZCsVpgN9cH2DZ2d/Yandex--%D0%92%D0%B5%D0%B1-%D0%BB%D0%B0%D1%80%D1%91%D0%BA-?node-id=201-9445&p=f&t=XZ9Jl7yqgFHBm1Wp-0",
  liveUrl: "https://rythmez.github.io/weblarek/"
},
// {
//   id: "5",
//   slug: "skillswap",
//   title: "SkillSwap",
//   description:
//     "Платформа обмена навыками: каталог предложений, фильтры, избранное и заявки на обмен.",
//   categories: ["frontend"],
//   technologies: ["React", "TypeScript", "Redux Toolkit", "React Router", "Vitest"],
//   features: [
//     "Каталог с поиском, фильтрами по типу, категории, полу и городу и бесконечной подгрузкой",
//     "Карточка навыка: профиль автора, галерея, похожие предложения и заявка на обмен",
//     "Регистрация в три шага: аккаунт, профиль и навык, которому могу научить",
//     "Избранные авторы, уведомления о заявках и редактирование профиля",
//   ],
//   images: screenshots(5, "SkillSwap"),
//   cover: screenshot(5, 1, "Превью проекта «SkillSwap»"),
//   year: 2026,
//   challenge:
//     "Нужно было собрать платформу, где люди находят, кого научить и у кого научиться: каталог с фильтрами, заявка на обмен и регистрация, после которой сразу появляется первое предложение.",
//   implementation:
//     "Интерфейс разложен по Feature-Sliced Design, состояние — в слайсах Redux Toolkit, страницы подгружаются lazy, закрытые разделы режет PrivateRoute. Фильтры, поиск и бесконечная подгрузка работают на клиенте. Сессия, избранное и уведомления сохраняются в localStorage, каталог читается из JSON.",
//   result:
//     "Полный гостевой и авторизованный сценарий: от каталога до заявки на обмен, избранного и личного кабинета. Поведение покрыто юнит-тестами, в CI гоняются lint, typecheck, тесты и сборка.",
// },
{
  id: "6",
  slug: "slozhno-sosredotochitsya",
  title: "Сложно сосредоточиться",
  description:
    "Лонгрид о внимании с переключением тем День / Авто / Неон и вёрсткой от телефона до десктопа.",
  categories: ["layout"],
  technologies: ["HTML", "CSS", "JavaScript", "BEM", "CSS Grid"],
  features: [
    "Три темы: День, Неон и Авто, которая следует системной схеме",
    "Адаптив: контейнер от 375 до 1440px, сетка с 768px и 1024px",
    "Статья: почему сложно сосредоточиться, что мешает и пять советов",
    "Галерея кадров и декоративный REC в тёмной теме",
  ],
  images: [
  screenshot(6, 1, "slozhno-sosredotochitsya 1"),
  screenshot(6, 2, "slozhno-sosredotochitsya 2"),
  screenshot(6, 3, "slozhno-sosredotochitsya 3"),
  screenshot(6, 4, "slozhno-sosredotochitsya 4"),
  screenshot(6, 5, "slozhno-sosredotochitsya 5"),
  screenshot(6, 6, "slozhno-sosredotochitsya 6")
],
  cover: screenshot(6, 1, "Превью проекта «Сложно сосредоточиться»"),
  year: 2025,
  challenge:
    "Нужно было сверстать длинный текст так, чтобы он держал характер: неон, моноширинный шрифт и смена настроения день/ночь без потери читаемости.",
  implementation:
    "Стили на CSS-переменных, светлая и тёмная темы в отдельных файлах. Переключатель пишет выбор в localStorage, режим Авто смотрит на prefers-color-scheme. Сетка на Grid и Flex, заголовки через clamp, картинки с lazy-загрузкой.",
  result:
    "Адаптивный лонгрид с тремя режимами оформления и узнаваемым неоновым героем «no focus».",
  githubUrl: "https://github.com/rythMEZ/slozhno-sosredotochitsya-fd",
  figmaUrl: "https://www.figma.com/design/92C0vV1ZCsVpgN9cH2DZ2d/Yandex--%D0%92%D0%B5%D0%B1-%D0%BB%D0%B0%D1%80%D1%91%D0%BA-?node-id=201-9445&p=f&t=XZ9Jl7yqgFHBm1Wp-0",
  liveUrl: "https://rythmez.github.io/slozhno-sosredotochitsya-fd/"
},
{
  id: "7",
  slug: "posmotri-v-okno",
  title: "Посмотри в окно",
  description:
    "Интерфейс для просмотра городских видео: выбор города и времени суток, плеер и список сцен.",
  categories: ["layout"],
  technologies: ["HTML", "CSS", "JavaScript", "BEM"],
  features: [
    "Видеоплеер с переключением ролика из списка сцен",
    "Поиск по городу и времени суток: утро, день, ночь",
    "Подгрузка следующих карточек по кнопке «Показать ещё»",
    "Прелоадер и сообщение, если для города нет видео",
  ],
  images: [
    screenshot(7, 1, "Посмотри в окно: нет видео для города", {
      width: 1440,
      height: 900,
    }),
    screenshot(7, 2, "Посмотри в окно: поиск по Тбилиси, день", {
      width: 1440,
      height: 900,
    }),
  ],
  cover: screenshot(7, 1, "Превью проекта «Посмотри в окно»", {
    width: 1440,
    height: 900,
  }),
  year: 2025,
  challenge:
    "Нужно было сделать стилизовать экран плеера.",
  implementation:
    "Разметка и стили на HTML, CSS и BEM, кастомные чекбоксы, hover и focus-visible. Карточки собираются из HTML-шаблона. Список и видео приходят с API, пагинация и смена ролика — на чистом JavaScript, с прелоадером и пустым состоянием.",
  result:
    "Работающий плеер видео: фильтр, список сцен и плеер на одной странице.",
  githubUrl: "https://github.com/rythMEZ/posmotri-v-okno-fd",
  figmaUrl: "https://www.figma.com/design/ApJjZAA3pBv2tCZM9E2ul2/2-%D1%81%D0%BF%D1%80%D0%B8%D0%BD%D1%82.-%D0%9F%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B8-%D0%B2-%D0%BE%D0%BA%D0%BD%D0%BE?node-id=0-1&p=f&t=18Cr1OS7vkuSDTQt-0",
  liveUrl: "https://rythmez.github.io/posmotri-v-okno-fd/"
},
{
  id: "8",
  slug: "ono-tebe-nado",
  title: "Оно тебе надо",
  description:
    "Лендинг аукциона вещей, в которые никто не верил: крупная типографика, лоты на фото и блок об аукционе.",
  categories: ["layout"],
  technologies: ["HTML", "CSS", "BEM", "CSS Grid", "Flexbox"],
  features: [
    "Hero с рваным заголовком «Оно тебе надо» и кнопкой ставки",
    "Шапка: навигация, логотип, телефон, почта и адрес",
    "Три карточки лотов на фото с затемнением и описанием",
    "Блок об аукционе и футер с меню и соцсетями",
  ],
  images: [
    screenshot(8, 1, "Оно тебе надо: шапка и заголовок", {
      width: 1440,
      height: 1046,
    }),
    screenshot(8, 2, "Оно тебе надо: лоты аукциона", {
      width: 1440,
      height: 900,
    }),
  ],
  cover: screenshot(8, 1, "Превью проекта «Оно тебе надо»", {
    width: 1440,
    height: 1046,
  }),
  year: 2025,
  challenge:
    "Нужно было собрать характерный промо-сайт аукциона: крупный заголовок, сетка шапки и фотокарточки лотов, которые читаются как обложки, а не как таблица товаров.",
  implementation:
    "Одностраничный лендинг на HTML и CSS, блоки по BEM. Шапка и футер собраны на Grid, лоты — на Flex. Обложка и карточки — фоновые фото с тёмным оверлеем, шрифт Raleway подключён локально.",
  result:
    "Десктопный лендинг аукциона с узнаваемой типографикой и тремя лотами на одной странице.",
  githubUrl: "https://github.com/rythMEZ/ono-tebe-nado-fd",
  figmaUrl: "https://www.figma.com/design/PqHJvUBvwCsv8UmOUPWBXJ/1-%D1%81%D0%BF%D1%80%D0%B8%D0%BD%D1%82.-%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BD%D0%B0%D1%8F-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0?node-id=0-1&p=f&t=kU5cO4kLcBobbV1I-0",
  liveUrl: "https://rythmez.github.io/ono-tebe-nado-fd/"
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
