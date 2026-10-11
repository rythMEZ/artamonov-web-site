"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import {
  useEffect,
  useRef,
  type KeyboardEvent,
  type TouchEvent,
} from "react";
import type { ProjectImage } from "@/types/project";

interface ImageLightboxProps {
  images: ProjectImage[];
  index: number;
  open: boolean;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

const SWIPE_THRESHOLD = 50;

const controlClasses =
  "inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20";

export function ImageLightbox({
  images,
  index,
  open,
  onClose,
  onIndexChange,
}: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);
  const total = images.length;
  const image = images[index];

  // Открытие и закрытие нативного модального окна: Escape, перехват фокуса
  // и неактивность фона обеспечивает сам браузер.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // Блокировка прокрутки фоновой страницы.
  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  function showPrevious() {
    onIndexChange((index - 1 + total) % total);
  }

  function showNext() {
    onIndexChange((index + 1) % total);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "Escape") {
      // Явное закрытие: не зависим от поведения браузера по умолчанию.
      event.preventDefault();
      onClose();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null || total < 2) return;

    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (delta > SWIPE_THRESHOLD) showPrevious();
    else if (delta < -SWIPE_THRESHOLD) showNext();
  }

  return (
    <dialog
      ref={dialogRef}
      aria-label="Просмотр изображения"
      onClose={onClose}
      onKeyDown={handleKeyDown}
      onClick={(event) => {
        // Клик по затемнённому фону (сам элемент dialog) закрывает окно.
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 m-0 hidden h-dvh max-h-none w-dvw max-w-none flex-col items-center justify-center bg-transparent p-0 text-white open:flex backdrop:bg-black/95"
    >
      {open && image ? (
        <>
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
            <p aria-live="polite" className="text-sm text-white/80">
              {index + 1} из {total}
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Закрыть"
              className={controlClasses}
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>

          <div
            className="flex w-full flex-1 items-center justify-center px-4 pb-20 pt-20 sm:px-20"
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0].clientX;
            }}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="100vw"
              className="h-auto max-h-full w-auto max-w-full object-contain"
            />
          </div>

          {total > 1 ? (
            <>
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Предыдущее изображение"
                className={`${controlClasses} absolute left-3 top-1/2 -translate-y-1/2 sm:left-5`}
              >
                <ChevronLeft aria-hidden="true" className="size-6" />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Следующее изображение"
                className={`${controlClasses} absolute right-3 top-1/2 -translate-y-1/2 sm:right-5`}
              >
                <ChevronRight aria-hidden="true" className="size-6" />
              </button>
            </>
          ) : null}
        </>
      ) : null}
    </dialog>
  );
}
