export type SocialPlatform = "github" | "linkedin" | "telegram";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  email: string;
  avatar: { src: string; alt: string };
  stack: string[];
  socials: SocialLink[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
