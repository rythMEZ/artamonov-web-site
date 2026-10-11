import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  tone?: "light" | "dark";
  /** Идентификатор заголовка для aria-labelledby. */
  labelledBy?: string;
  children: ReactNode;
  className?: string;
}

const tones = {
  light: "bg-background text-foreground",
  dark: "bg-ink-dark text-on-dark",
};

export function Section({
  id,
  tone = "light",
  labelledBy,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${tones[tone]} ${className}`.trim()}
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-32">
        {children}
      </div>
    </section>
  );
}
