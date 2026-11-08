import type { ImgHTMLAttributes } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";

vi.mock("next/image", () => ({
  default: ({
    alt,
    src,
    width,
    height,
    className,
  }: ImgHTMLAttributes<HTMLImageElement>) => (
    // next/image is not available in the unit test environment
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt ?? ""}
      src={src}
      width={width}
      height={height}
      className={className}
    />
  ),
}));

const project: Project = {
  id: "2",
  slug: "stellar-Burger",
  title: "Космическая бургерная",
  description: "Интернет-магазин с конструктором бургеров",
  categories: ["frontend"],
  technologies: ["React"],
  features: ["Конструктор бургера"],
  images: [],
  cover: {
    src: "/images/projects/project-1-1.png",
    alt: "Превью проекта «Космическая бургерная»",
    width: 2560,
    height: 1440,
  },
  year: 2025,
  challenge: "Собрать клиентскую часть",
  implementation: "Redux Toolkit",
  result: "Работающее SPA",
};

describe("обложка карточки проекта", () => {
  it("заполняет рамку 16/10 обрезкой и не сжимает скриншот", () => {
    render(<ProjectCard project={project} />);

    const cover = screen.getByRole("img", { name: project.cover.alt });

    expect(cover).toHaveClass("object-cover");
    expect(cover).not.toHaveClass("object-fill");
    expect(cover.parentElement).toHaveClass("aspect-[16/10]");
  });
});
