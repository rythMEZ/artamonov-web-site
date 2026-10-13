"use client";

import { Maximize2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ProjectImage } from "@/types/project";
import { ImageLightbox } from "./ImageLightbox";

interface ProjectGalleryProps {
  images: ProjectImage[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const openerRef = useRef<HTMLButtonElement>(null);

  const wasOpenRef = useRef(false);

  // Возвращаем фокус на кнопку-источник после закрытия Lightbox. Эффект
  // родителя выполняется после эффекта потомка, то есть когда dialog уже закрыт.
  useEffect(() => {
    if (wasOpenRef.current && !lightboxOpen) openerRef.current?.focus();
    wasOpenRef.current = lightboxOpen;
  }, [lightboxOpen]);

  const active = images[activeIndex];
  if (!active) return null;

  function closeLightbox() {
    setLightboxOpen(false);
  }

  return (
    <section aria-label="Галерея изображений проекта">
      <button
        ref={openerRef}
        type="button"
        onClick={() => setLightboxOpen(true)}
        aria-label={`Открыть изображение ${activeIndex + 1} из ${images.length} на весь экран`}
        className="group relative block w-full overflow-hidden rounded-card border border-border bg-surface"
      >
        <Image
          src={active.src}
          alt={active.alt}
          width={active.width}
          height={active.height}
          priority
          sizes="(min-width: 1152px) 1088px, 100vw"
          className="aspect-[16/10] w-full object-fill"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-3 right-3 inline-flex size-10 items-center justify-center rounded-full bg-black/60 text-white transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100"
        >
          <Maximize2 className="size-5" />
        </span>
      </button>

      {images.length > 1 ? (
        <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {images.map((image, index) => {
            const isActive = index === activeIndex;

            return (
              <li key={image.src}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Показать изображение ${index + 1}: ${image.alt}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`block w-full overflow-hidden rounded-xl border-2 transition-opacity ${
                    isActive
                      ? "border-foreground"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt=""
                    width={image.width}
                    height={image.height}
                    sizes="(min-width: 1024px) 160px, 33vw"
                    className="aspect-[16/10] w-full object-fill"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}

      <ImageLightbox
        images={images}
        index={activeIndex}
        open={lightboxOpen}
        onClose={closeLightbox}
        onIndexChange={setActiveIndex}
      />
    </section>
  );
}
