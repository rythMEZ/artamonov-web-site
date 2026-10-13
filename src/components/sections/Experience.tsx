import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import { Skills } from "./Skills";

export function Experience() {
  return (
    <Section id="experience" tone="light" labelledBy="experience-title">
      <SectionHeading
        id="experience-title"
        title="Опыт и навыки"
        description="Где я работал и учился, чего достиг и с какими технологиями работаю."
        tone="light"
      />

      <ol className="flex flex-col gap-6">
        {experience.map((item) => (
          <li key={item.id}>
            <Reveal>
              <article className="rounded-card border border-border p-6 sm:p-8">
                <header className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold sm:text-2xl">
                      {item.role}
                    </h3>
                    <p className="text-muted">{item.organization}</p>
                  </div>
                  <p className="text-sm text-muted">{item.period}</p>
                </header>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 text-sm font-medium uppercase tracking-widest text-muted">
                      Обязанности
                    </h4>
                    <ul className="list-disc space-y-2 pl-5 marker:text-muted">
                      {item.responsibilities.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 text-sm font-medium uppercase tracking-widest text-muted">
                      Достижения
                    </h4>
                    <ul className="list-disc space-y-2 pl-5 marker:text-muted">
                      {item.achievements.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <ul
                  aria-label="Технологии"
                  className="mt-6 flex flex-wrap gap-2"
                >
                  {item.technologies.map((tech) => (
                    <li key={tech}>
                      <Badge tone="light">{tech}</Badge>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>

      <Skills tone="light" />
    </Section>
  );
}
