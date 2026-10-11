import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <Section id="hero" labelledBy="hero-title">
      <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <Reveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted">
            {profile.role}
          </p>
          <h1
            id="hero-title"
            className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
            {profile.bio}
          </p>

          <ul
            aria-label="Основной стек"
            className="mt-8 flex flex-wrap gap-2"
          >
            {profile.stack.map((tech) => (
              <li key={tech}>
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/#projects">Смотреть проекты</Button>
            <Button href="/#contacts" variant="secondary">
              Связаться со мной
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto w-full max-w-xs md:max-w-none">
          <Image
            src={profile.avatar.src}
            alt={profile.avatar.alt}
            width={800}
            height={1000}
            priority
            sizes="(min-width: 768px) 33vw, 320px"
            className="aspect-[4/5] w-full rounded-card border border-border object-cover"
          />
        </Reveal>
      </div>
    </Section>
  );
}
