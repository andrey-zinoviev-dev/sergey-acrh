'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { GalleryImage } from '@/app/interfaces/interfaces';
import styles from './ProjectImageGallery.module.css';

const MOBILE_MEDIA_QUERY = '(max-width: 768px)';

type ProjectImageGalleryProps = {
  images: GalleryImage[];
};

export default function ProjectImageGallery({ images }: ProjectImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = images[activeIndex] ?? images[0];

  useEffect(() => {
    const thumb = thumbRefs.current[activeIndex];
    if (!thumb || !window.matchMedia(MOBILE_MEDIA_QUERY).matches) {
      return;
    }
    thumb.scrollIntoView({ inline: 'nearest', block: 'nearest' });
  }, [activeIndex]);

  if (!active) {
    return null;
  }

  return (
    <>
      <Image
        src={active.src}
        alt={active.alt}
        width={1600}
        height={900}
        className={styles.coverImage}
        priority={activeIndex === 0}
        sizes="(max-width: 1200px) 100vw, 1200px"
      />

      {images.length > 1 ? (
        <div className={styles.thumbTrack} role="list" aria-label="Галерея проекта">
          {images.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              ref={(element) => {
                thumbRefs.current[index] = element;
              }}
              type="button"
              role="listitem"
              className={styles.thumbButton}
              data-active={index === activeIndex}
              aria-label={`Показать изображение ${index + 1} из ${images.length}`}
              aria-current={index === activeIndex ? 'true' : undefined}
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
    </>
  );
}
