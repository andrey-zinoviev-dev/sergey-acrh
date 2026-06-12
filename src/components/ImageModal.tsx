'use client';

import { useEffect, useId, useRef } from 'react';
import Image from 'next/image';
import type { GalleryImage } from '@/types/gallery';
import styles from './ImageModal.module.css';

type ImageModalProps = {
  image: GalleryImage | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
};

export default function ImageModal({
  image,
  isOpen,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: ImageModalProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

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
      } else if (event.key === 'ArrowLeft' && hasPrev) {
        onPrev();
      } else if (event.key === 'ArrowRight' && hasNext) {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext, hasPrev, hasNext]);

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
        <Image
          src={image.src}
          alt={image.alt}
          width={2390}
          height={1000}
          className={styles.image}
          sizes="100vw"
        />
      </dialog>
    </div>
  );
}
