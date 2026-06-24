'use client';

import { useEffect, useId, useRef } from 'react';
import Image from 'next/image';
import type { GalleryImage } from '@/types/gallery';
import styles from './ImageModal.module.css';

type ImageModalProps = {
  images: GalleryImage[];
  activeIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onSelect: (index: number) => void;
};

export default function ImageModal({
  images,
  activeIndex,
  isOpen,
  onClose,
  onSelect,
}: ImageModalProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndexRef = useRef(activeIndex);
  const image = images[activeIndex];
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < images.length - 1;

  activeIndexRef.current = activeIndex;

  const onPrev = () => {
    if (hasPrev) {
      onSelect(activeIndex - 1);
    }
  };

  const onNext = () => {
    if (hasNext) {
      onSelect(activeIndex + 1);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft' && activeIndex > 0) {
        onSelect(activeIndex - 1);
      } else if (event.key === 'ArrowRight' && activeIndex < images.length - 1) {
        onSelect(activeIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onSelect, activeIndex, images.length]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    requestAnimationFrame(() => {
      slideRefs.current[activeIndexRef.current]?.scrollIntoView({
        inline: 'center',
        block: 'nearest',
      });
    });
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const track = scrollTrackRef.current;
    if (!track) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!mostVisible) {
          return;
        }

        const index = Number(mostVisible.target.getAttribute('data-index'));

        if (!Number.isNaN(index) && index !== activeIndexRef.current) {
          onSelect(index);
        }
      },
      { root: track, threshold: 0.6 },
    );

    slideRefs.current.forEach((slide) => {
      if (slide) {
        observer.observe(slide);
      }
    });

    return () => observer.disconnect();
  }, [isOpen, onSelect, images]);

  if (!isOpen || !image) {
    return null;
  }

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="presentation"
    >
      <button
        ref={closeButtonRef}
        type="button"
        className={styles.closeButton}
        aria-label="Закрыть"
        onClick={onClose}
      >
        ×
      </button>

      {hasPrev ? (
        <button
          type="button"
          className={`${styles.navButton} ${styles.navButtonPrev}`}
          aria-label="Предыдущее изображение"
          onClick={(event) => {
            event.stopPropagation();
            onPrev();
          }}
        >
          ‹
        </button>
      ) : null}

      {hasNext ? (
        <button
          type="button"
          className={`${styles.navButton} ${styles.navButtonNext}`}
          aria-label="Следующее изображение"
          onClick={(event) => {
            event.stopPropagation();
            onNext();
          }}
        >
          ›
        </button>
      ) : null}

      <dialog
        open
        className={styles.dialog}
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id={titleId} className={styles.srOnly}>
          {image.alt}
        </h2>

        <div className={styles.desktopImageWrap}>
          <Image
            src={image.src}
            alt={image.alt}
            width={2390}
            height={1000}
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 1440px"
            priority
          />
          
          {images.length > 1 ? (
            <div
              className={styles.thumbTrack}
              role="list"
              aria-label="Превью галереи"
            >
              {images.map((thumb, index) => (
                <button
                  key={`modal-${thumb.src}-${index}`}
                  type="button"
                  role="listitem"
                  className={`${styles.thumbButton} ${
                    index === activeIndex ? styles.thumbButtonActive : ''
                  }`}
                  aria-label={`Показать изображение ${index + 1} из ${images.length}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                  onClick={() => onSelect(index)}
                >
                  <Image
                    src={thumb.src}
                    alt=""
                    width={120}
                    height={120}
                    className={styles.thumbImage}
                    sizes="90px"
                  />
                </button>
              ))}
            </div>
          ) : null}
        </div>
        

        <div className={styles.mobileGallery}>
          <div
            ref={scrollTrackRef}
            className={styles.mobileImageTrack}
            role="list"
            aria-label="Галерея изображений"
          >
            {images.map((slide, index) => (
              <div
                key={`modal-slide-${slide.src}-${index}`}
                ref={(element) => {
                  slideRefs.current[index] = element;
                }}
                data-index={index}
                role="listitem"
                className={styles.mobileImageSlide}
                aria-hidden={index !== activeIndex}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={2390}
                  height={1000}
                  className={styles.mobileImage}
                  sizes="100vw"
                  priority={index === activeIndex}
                />
                <p className={styles.mobileIndex}>
                  {index + 1} / {images.length}
                </p>
              </div>
            ))}
          </div>
        </div>


      </dialog>
    </div>
  );
}
