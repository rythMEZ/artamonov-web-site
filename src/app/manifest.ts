import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/profile";

function icon(
  size: "48" | "192" | "512",
  purpose: "any" | "maskable",
): NonNullable<MetadataRoute.Manifest["icons"]>[number] {
  return {
    src: `/icon/${size}`,
    sizes: `${size}x${size}`,
    type: "image/png",
    purpose,
  };
}

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Артамонов",
    description: siteConfig.description,
    lang: "ru",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      icon("48", "any"),
      icon("192", "any"),
      icon("192", "maskable"),
      icon("512", "any"),
      icon("512", "maskable"),
    ],
  };
}
