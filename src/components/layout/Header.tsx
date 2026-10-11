import Link from "next/link";
import { navItems, profile } from "@/data/profile";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="text-base font-semibold tracking-tight sm:text-lg">
          {profile.name}
        </Link>

        <nav aria-label="Основная навигация" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu items={navItems} />
      </div>
    </header>
  );
}
