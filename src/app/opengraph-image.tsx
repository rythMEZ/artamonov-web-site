import { ImageResponse } from "next/og";
import { profile, siteConfig } from "@/data/profile";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGeist(text: string, weight: 400 | 600): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=Geist:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await fetch(url, {
    headers: {
      // Старый Safari UA: Google отдаёт TTF/OTF, который понимает ImageResponse.
      "User-Agent":
        "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
    },
  }).then((response) => response.text());

  const match = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);

  if (!match?.[1]) {
    throw new Error("Failed to resolve Geist font URL");
  }

  const fontResponse = await fetch(match[1]);

  if (!fontResponse.ok) {
    throw new Error("Failed to download Geist font");
  }

  return fontResponse.arrayBuffer();
}

export default async function OpenGraphImage() {
  const text = `${siteConfig.name} ${profile.role} ${siteConfig.description}`;
  const [regular, semibold] = await Promise.all([
    loadGeist(text, 400),
    loadGeist(text, 600),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          color: "#0a0a0a",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 400,
            letterSpacing: "0.08em",
            color: "#52525b",
          }}
        >
          {profile.role}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 72,
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            maxWidth: 900,
            fontSize: 28,
            fontWeight: 400,
            lineHeight: 1.4,
            color: "#52525b",
          }}
        >
          {siteConfig.description}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: regular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Geist",
          data: semibold,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
