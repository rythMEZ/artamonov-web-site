import { SkillIcon } from "@/components/ui/SkillIcon";

interface SkillChipProps {
  children: string;
  tone?: "light" | "dark";
}

const tones = {
  light: {
    chip: "border-border text-foreground hover:text-background",
    fill: "bg-foreground",
  },
  dark: {
    chip: "border-border-on-dark text-on-dark hover:text-ink-dark",
    fill: "bg-on-dark",
  },
} as const;

export function SkillChip({ children, tone = "light" }: SkillChipProps) {
  const styles = tones[tone];

  return (
    <span
      className={`group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border px-3 py-1.5 text-sm font-medium transition-colors duration-300 motion-reduce:transition-none ${styles.chip}`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none ${styles.fill}`}
      />
      <SkillIcon name={children} className="relative z-10 size-3.5 shrink-0" />
      <span className="relative z-10">{children}</span>
    </span>
  );
}
