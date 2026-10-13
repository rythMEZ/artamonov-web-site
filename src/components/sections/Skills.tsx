import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { skills } from "@/data/skills";

interface SkillsProps {
  tone?: "light" | "dark";
}

const tones = {
  light: {
    card: "border-border",
    groupTitle: "text-muted",
    badge: "light",
  },
  dark: {
    card: "border-border-on-dark",
    groupTitle: "text-muted-on-dark",
    badge: "dark",
  },
} as const;

export function Skills({ tone = "light" }: SkillsProps) {
  const styles = tones[tone];

  return (
    <div className="mt-20 sm:mt-28">
      <h3
        id="skills-title"
        className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        Навыки
      </h3>
      <ul
        aria-labelledby="skills-title"
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {skills.map((group, index) => (
          <li key={group.title}>
            <Reveal delay={index * 0.05} className="h-full">
              <div
                className={`h-full rounded-card border p-5 ${styles.card}`}
              >
                <h4 className={`mb-4 text-sm font-medium ${styles.groupTitle}`}>
                  {group.title}
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Badge tone={styles.badge}>{item}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
