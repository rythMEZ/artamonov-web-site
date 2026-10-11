import { Mail } from "lucide-react";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

const linkClasses =
  "group flex min-h-16 items-center gap-4 rounded-card border border-border-on-dark p-4 transition-colors hover:border-on-dark sm:p-5";

export function Contacts() {
  return (
    <Section id="contacts" tone="dark" labelledBy="contacts-title">
      <SectionHeading
        id="contacts-title"
        title="Контакты"
        description="Открыт к предложениям о работе и интересным проектам. Напишите мне любым удобным способом."
        tone="dark"
      />

      <Reveal>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <a href={`mailto:${profile.email}`} className={linkClasses}>
              <Mail aria-hidden="true" className="size-6 shrink-0" />
              <span className="min-w-0">
                <span className="block text-sm text-muted-on-dark">Email</span>
                <span className="block truncate">{profile.email}</span>
              </span>
            </a>
          </li>
          {profile.socials.map((social) => (
            <li key={social.platform}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClasses}
              >
                <BrandIcon
                  platform={social.platform}
                  className="size-6 shrink-0"
                />
                <span className="min-w-0">
                  <span className="block text-sm text-muted-on-dark">
                    Профиль
                  </span>
                  <span className="block truncate">{social.label}</span>
                  <span className="sr-only"> (откроется в новой вкладке)</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
