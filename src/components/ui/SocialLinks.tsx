import { profile } from "@/data/profile";
import { BrandIcon } from "./BrandIcon";

interface SocialLinksProps {
  tone?: "light" | "dark";
  className?: string;
}

export function SocialLinks({ tone = "light", className = "" }: SocialLinksProps) {
  const toneClasses =
    tone === "dark"
      ? "border-border-on-dark text-on-dark hover:border-on-dark"
      : "border-border text-foreground hover:border-foreground";

  return (
    <ul className={`flex items-center gap-3 ${className}`.trim()}>
      {profile.socials.map((social) => (
        <li key={social.platform}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.label} (откроется в новой вкладке)`}
            className={`inline-flex size-11 items-center justify-center rounded-full border transition-colors ${toneClasses}`}
          >
            <BrandIcon platform={social.platform} className="size-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
