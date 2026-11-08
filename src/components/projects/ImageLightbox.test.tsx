import type { ImgHTMLAttributes } from "react";
import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import type { ProjectImage } from "@/types/project";
import { ImageLightbox } from "./ImageLightbox";

beforeAll(() => {
  // jsdom не реализует модальный dialog, а компонент открывает его через showModal.
  HTMLDialogElement.prototype.showModal = function showModal(this: HTMLDialogElement) {
    this.open = true;
  };
  HTMLDialogElement.prototype.close = function close(this: HTMLDialogElement) {
    this.open = false;
  };
});

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

const image: ProjectImage = {
  src: "/images/projects/project-6-2.png",
  alt: "Вертикальный скриншот",
  width: 1200,
  height: 1594,
};

describe("лайтбокс", () => {
  it("вписывает открытый кадр целиком и не растягивает его", () => {
    render(
      <ImageLightbox
        images={[image]}
        index={0}
        open
        onClose={() => {}}
        onIndexChange={() => {}}
      />,
    );

    const frame = screen.getByRole("img", { name: image.alt });

    expect(frame).toHaveClass("object-contain");
    expect(frame).not.toHaveClass("object-fill");
    expect(frame).toHaveAttribute("width", String(image.width));
    expect(frame).toHaveAttribute("height", String(image.height));
  });
});
