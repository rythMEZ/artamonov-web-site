import type { Metadata } from "next";
import { Contacts } from "@/components/sections/Contacts";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <Experience />
      <Contacts />
    </>
  );
}
