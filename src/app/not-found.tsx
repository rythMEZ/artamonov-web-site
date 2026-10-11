import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Страница не найдена",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-5 py-24 sm:px-8 sm:py-32">
      <p className="text-sm font-medium uppercase tracking-widest text-muted">
        Ошибка 404
      </p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
        Страница не найдена
      </h1>
      <p className="max-w-xl text-lg text-muted">
        Возможно, ссылка устарела или проект был удалён. Вернитесь на главную
        или посмотрите список проектов.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href="/">На главную</Button>
        <Button href="/#projects" variant="secondary">
          Все проекты
        </Button>
      </div>
    </section>
  );
}
