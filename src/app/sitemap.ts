import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/profile";
import { getProjectSlugs } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, changeFrequency: "monthly", priority: 1 },
    ...getProjectSlugs().map((slug) => ({
      url: `${siteConfig.url}/projects/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
