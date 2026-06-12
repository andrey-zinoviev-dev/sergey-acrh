'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { GalleryImage } from '@/types/gallery';
import ImageModal from '@/components/ImageModal';
import styles from './ProjectImageGallery.module.css';

type ProjectImageGalleryProps = {
  images: GalleryImage[];
};

export default function ProjectImageGallery({ images }: ProjectImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isModalOpen = activeIndex !== null;
  const modalImage = activeIndex !== null ? images[activeIndex] : null;
  const cover = images[0];

  if (!cover) {
    return null;
  }

  return (
    <>
      <Image
        src={cover.src}
        alt={cover.alt}
        width={1600}
        height={669}
        className={styles.coverImage}
        priority
        sizes="(max-width: 1200px) 100vw, 1200px"
      />

      {images.length > 1 ? (
        <div
          className={styles.desktopThumbTrack}
          role="list"
          aria-label="Галерея проекта"
        >
          {images.map((image, index) => (
            <button
              key={`desktop-${image.src}-${index}`}
              type="button"
              role="listitem"
              className={styles.thumbButton}
              aria-label={`Открыть изображение ${index + 1} из ${images.length}`}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={image.src}
                alt=""
                width={120}
                height={120}
                className={styles.thumbImage}
                sizes="120px"
              />
            </button>
          ))}
        </div>
      ) : null}

      <div
        className={styles.mobileGalleryTrack}
        role="list"
        aria-label="Галерея проекта"
      >
        {images.map((image, index) => (
          <button
            key={`mobile-${image.src}-${index}`}
            type="button"
            role="listitem"
            className={styles.mobileGallerySlide}
            aria-label={`Открыть изображение ${index + 1} из ${images.length}`}
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={450}
              className={styles.mobileGalleryImage}
              priority={index === 0}
              sizes="85vw"
            />
          </button>
        ))}
      </div>

      <ImageModal
        image={modalImage}
        isOpen={isModalOpen}
        onClose={() => setActiveIndex(null)}
        onPrev={() =>
          setActiveIndex((index) => (index !== null && index > 0 ? index - 1 : index))
        }
        onNext={() =>
          setActiveIndex((index) =>
            index !== null && index < images.length - 1 ? index + 1 : index,
          )
        }
        hasPrev={activeIndex !== null && activeIndex > 0}
        hasNext={activeIndex !== null && activeIndex < images.length - 1}
      />
    </>
  );
}
