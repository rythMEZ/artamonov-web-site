import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  tone?: "light" | "dark" | "solid" | "solid-on-dark";
  className?: string;
}

const tones = {
  light: "border-border text-muted",
  dark: "border-border-on-dark text-muted-on-dark",
  solid: "border-foreground bg-foreground text-background",
  "solid-on-dark": "border-on-dark bg-on-dark text-ink-dark",
};

export function Badge({ children, tone = "light", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${tones[tone]} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
