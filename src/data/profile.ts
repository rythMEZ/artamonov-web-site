import type { NavItem, Profile } from "@/types/profile";

export const siteConfig = {
  name: "Сергей Артамонов",
  title: "Сергей Артамонов — Frontend-разработчик",
  description:
    "Портфолио frontend-разработчика: React, TypeScript, Next.js и Tailwind CSS. Проекты, опыт и контакты.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const profile: Profile = {
  name: siteConfig.name,
  role: "Frontend-разработчик",
  bio: "Создаю быстрые, доступные и аккуратные интерфейсы на React и Next.js. Люблю продуманную компонентную архитектуру, создавать полезные проекты и постоянно прокачивать свои навыки.",
  email: "artamonov4work@ya.ru",
  avatar: {
    src: "/images/avatar.jpg",
    alt: "Портрет Сергея Артамонова",
  },
  stack: ["React", "Next.js", "TypeScript", "JavaScript", "CSS", "HTML"],
  socials: [
    { platform: "github", label: "GitHub", href: "https://github.com/rythMEZ" },
    { platform: "telegram", label: "Telegram", href: "https://t.me/rythMEEE" },
  ],
};

export const navItems: NavItem[] = [
  { label: "Обо мне", href: "/#hero" },
  { label: "Опыт", href: "/#experience" },
  { label: "Проекты", href: "/#projects" },
  { label: "Контакты", href: "/#contacts" },
];
