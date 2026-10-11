import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { skills } from "@/data/skills";

export function Skills() {
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
              <div className="h-full rounded-card border border-border-on-dark p-5">
                <h4 className="mb-4 text-sm font-medium text-muted-on-dark">
                  {group.title}
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Badge tone="dark">{item}</Badge>
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
