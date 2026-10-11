import Link from "next/link";
import { navItems, profile } from "@/data/profile";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border-on-dark bg-ink-dark text-on-dark">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-on-dark">
          © {new Date().getFullYear()} {profile.name}. Все права защищены.
        </p>

        <nav aria-label="Навигация в подвале">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-on-dark transition-colors hover:text-on-dark"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks tone="dark" />
      </div>
    </footer>
  );
}
