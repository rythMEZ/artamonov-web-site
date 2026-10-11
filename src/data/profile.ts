import type { NavItem, Profile } from "@/types/profile";

// TODO: заменить заглушки реальными данными перед публикацией.
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
  bio: "Создаю быстрые, доступные и аккуратные интерфейсы на React и Next.js. Люблю продуманную компонентную архитектуру, строгую типизацию и внимание к деталям.",
  email: "hello@example.com",
  avatar: {
    src: "/images/avatar.svg",
    alt: "Портрет Сергея Артамонова",
  },
  stack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  socials: [
    { platform: "github", label: "GitHub", href: "https://github.com/" },
    { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/" },
    { platform: "telegram", label: "Telegram", href: "https://t.me/" },
  ],
};

export const navItems: NavItem[] = [
  { label: "Обо мне", href: "/#hero" },
  { label: "Опыт", href: "/#experience" },
  { label: "Проекты", href: "/#projects" },
  { label: "Контакты", href: "/#contacts" },
];
