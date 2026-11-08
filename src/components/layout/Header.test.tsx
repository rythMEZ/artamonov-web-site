import type { ImgHTMLAttributes } from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Home from "@/app/page";
import { navItems, profile } from "@/data/profile";
import { Header } from "./Header";

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

function sectionId(href: string): string {
  const id = href.split("#")[1];
  if (!id) {
    throw new Error(`Ожидался якорь секции в ссылке ${href}`);
  }
  return id;
}

describe("ссылки шапки", () => {
  it("ведёт имя на главную страницу", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: profile.name })).toHaveAttribute(
      "href",
      "/",
    );
  });

  it("показывает пункты меню с адресами секций главной страницы", () => {
    render(<Header />);

    const nav = screen.getByRole("navigation", { name: "Основная навигация" });

    for (const item of navItems) {
      expect(
        within(nav).getByRole("link", { name: item.label }),
      ).toHaveAttribute("href", item.href);
    }
  });

  it("указывает каждый пункт на существующую секцию главной страницы", () => {
    render(<Home />);

    for (const item of navItems) {
      expect(item.href.startsWith("/#")).toBe(true);
      expect(document.getElementById(sectionId(item.href))).toBeInTheDocument();
    }
  });

  it("открывает мобильное меню с теми же ссылками и закрывает его после перехода", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const button = screen.getByRole("button", { name: "Открыть меню" });
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByRole("navigation", { name: "Мобильная навигация" }),
    ).not.toBeInTheDocument();

    await user.click(button);

    const menu = screen.getByRole("navigation", { name: "Мобильная навигация" });
    expect(button).toHaveAttribute("aria-expanded", "true");

    for (const item of navItems) {
      expect(
        within(menu).getByRole("link", { name: item.label }),
      ).toHaveAttribute("href", item.href);
    }

    await user.click(within(menu).getByRole("link", { name: "Проекты" }));

    expect(
      screen.queryByRole("navigation", { name: "Мобильная навигация" }),
    ).not.toBeInTheDocument();
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("закрывает мобильное меню по Escape и возвращает фокус на кнопку", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const button = screen.getByRole("button", { name: "Открыть меню" });
    await user.click(button);
    expect(
      screen.getByRole("navigation", { name: "Мобильная навигация" }),
    ).toBeInTheDocument();

    await user.keyboard("{Escape}");

    expect(
      screen.queryByRole("navigation", { name: "Мобильная навигация" }),
    ).not.toBeInTheDocument();
    expect(button).toHaveFocus();
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});
