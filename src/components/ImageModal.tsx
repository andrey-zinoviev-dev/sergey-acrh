'use client';

import { useEffect, useId, useRef } from 'react';
import Image from 'next/image';
import type { GalleryImage } from '@/app/interfaces/interfaces';
import styles from './ImageModal.module.css';

type ImageModalProps = {
  image: GalleryImage | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ImageModal({ image, isOpen, onClose }: ImageModalProps) {
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
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

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
