# Портфолио frontend-разработчика

Адаптивный сайт-визитка с каталогом проектов, отдельными страницами проектов и галереей с Lightbox.

## Стек

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4
- Lucide React (иконки), Motion (анимации)

## Запуск

```bash
npm install
npm run dev      # 
npm run lint     # ESLint
npm run build    # production-сборка
npm run start    # запуск собранного проекта
```

## Структура

```
src/
  app/            маршруты: главная, /projects/[slug], not-found, sitemap, robots
  components/
    layout/       Header, MobileMenu, Footer
    sections/     Hero, Experience, Skills, ProjectsSection, Contacts
    projects/     ProjectCard, ProjectFilters, ProjectsCatalog,
                  ProjectDetails, ProjectGallery, ImageLightbox
    ui/           Button, Badge, Section, SectionHeading, Reveal, SocialLinks, BrandIcon
  data/           projects.ts, profile.ts, experience.ts, skills.ts
  types/          project.ts, profile.ts
public/images/    avatar и изображения проектов
```

