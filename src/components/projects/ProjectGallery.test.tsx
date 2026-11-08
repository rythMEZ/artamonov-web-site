import type { ImgHTMLAttributes } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { ProjectImage } from "@/types/project";
import { ProjectGallery } from "./ProjectGallery";

vi.mock("next/image", () => ({
  default: ({
    alt,
    src,
    width,
    height,
    className,
    style,
  }: ImgHTMLAttributes<HTMLImageElement>) => (
    // next/image is not available in the unit test environment
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt ?? ""}
      src={src}
      width={width}
      height={height}
      className={className}
      style={style}
    />
  ),
}));

const wideFrame: ProjectImage[] = [
  {
    src: "/images/projects/project-1-1.png",
    alt: "Космическая бургерная: экран 1",
    width: 2560,
    height: 1440,
  },
  {
    src: "/images/projects/project-1-2.png",
    alt: "Космическая бургерная: экран 2",
    width: 2560,
    height: 1440,
  },
];

const portraitFrame: ProjectImage[] = [
  {
    src: "/images/projects/project-6-5.png",
    alt: "Узкий вертикальный кадр",
    width: 369,
    height: 1444,
  },
];

function expectContainedFrame(image: ProjectImage) {
  const frame = screen.getByRole("img", { name: image.alt });

  expect(frame).toHaveAttribute("width", String(image.width));
  expect(frame).toHaveAttribute("height", String(image.height));
  expect(frame).toHaveStyle({
    aspectRatio: `${image.width} / ${image.height}`,
  });
  expect(frame).toHaveClass("object-contain");
  expect(frame).not.toHaveClass("object-fill");
}

describe("крупный кадр галереи", () => {
  it("держит широкий скриншот в рамке без растяжения", () => {
    render(<ProjectGallery images={wideFrame} />);

    expectContainedFrame(wideFrame[0]);
  });

  it("так же вписывает портретный кадр, не подгоняя класс под широкий скриншот", () => {
    render(<ProjectGallery images={portraitFrame} />);

    const image = portraitFrame[0];
    expect(image.width).toBeLessThan(image.height);
    expectContainedFrame(image);
  });
});

describe("миниатюры галереи", () => {
  it("обрезают кадр в общей сетке и не растягивают его", () => {
    render(<ProjectGallery images={wideFrame} />);

    const thumbs = screen.getByRole("list").querySelectorAll("img");

    expect(thumbs).toHaveLength(wideFrame.length);
    for (const thumb of thumbs) {
      expect(thumb).toHaveClass("object-cover");
      expect(thumb).not.toHaveClass("object-fill");
    }
  });
});
