import { ProjectsCatalog } from "@/components/projects/ProjectsCatalog";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <Section id="projects" labelledBy="projects-title">
      <SectionHeading
        id="projects-title"
        title="Проекты"
        description="Избранные работы: от вёрстки по макетам до полноценных приложений. Выберите категорию или откройте карточку, чтобы узнать подробности."
      />
      <ProjectsCatalog projects={projects} />
    </Section>
  );
}
