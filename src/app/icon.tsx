import { ImageResponse } from "next/og";
import { FaviconImage } from "@/components/brand/favicon-mark";

export const contentType = "image/png";

const icons = {
  "48": { size: 48, rounded: true },
  "192": { size: 192, rounded: false },
  "512": { size: 512, rounded: false },
} as const;

type IconId = keyof typeof icons;

export function generateImageMetadata() {
  return (Object.keys(icons) as IconId[]).map((id) => ({
    id,
    contentType,
    size: { width: icons[id].size, height: icons[id].size },
    alt: "A",
  }));
}

export default async function Icon({ id }: { id: Promise<string | number> }) {
  const iconId = String(await id) as IconId;
  const variant = icons[iconId] ?? icons["48"];

  return new ImageResponse(<FaviconImage size={variant.size} rounded={variant.rounded} />, {
    width: variant.size,
    height: variant.size,
  });
}
