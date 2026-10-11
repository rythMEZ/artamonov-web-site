import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonTone = "light" | "dark";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  /** `dark` — кнопка размещается на тёмном фоне. */
  tone?: ButtonTone;
  external?: boolean;
  /** Растянуть кнопку на всю ширину, содержимое разносится по краям. */
  fullWidth?: boolean;
  className?: string;
}

const base =
  "inline-flex min-h-11 items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-colors duration-200 sm:text-base";

const styles: Record<ButtonTone, Record<ButtonVariant, string>> = {
  light: {
    primary: "bg-foreground text-background hover:bg-zinc-700",
    secondary:
      "border border-border text-foreground hover:border-foreground",
  },
  dark: {
    primary: "bg-on-dark text-ink-dark hover:bg-zinc-300",
    secondary:
      "border border-border-on-dark text-on-dark hover:border-on-dark",
  },
};

export function Button({
  href,
  children,
  variant = "primary",
  tone = "light",
  external = false,
  fullWidth = false,
  className = "",
}: ButtonProps) {
  const layout = fullWidth ? "w-full justify-between" : "justify-center";
  const classes = `${base} ${layout} ${styles[tone][variant]} ${className}`.trim();

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
