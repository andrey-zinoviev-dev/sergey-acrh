import type { ReactNode } from 'react';
import Link from 'next/link';
import styles from './Breadcrumbs.module.css';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  ariaLabel?: string;
  className?: string;
};

export default function Breadcrumbs({
  items,
  ariaLabel = 'Навигационная цепочка',
  className,
}: BreadcrumbsProps) {
  const row: ReactNode[] = [];

  items.forEach((item, index) => {
    if (index > 0) {
      row.push(
        <li key={`sep-${index}`} className={styles.breadcrumbSep} aria-hidden>
          /
        </li>
      );
    }

    const key = item.href ? `${item.href}-${item.label}` : item.label;

    if (item.href) {
      row.push(
        <li key={key}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      );
    } else {
      row.push(
        <li key={key} className={styles.breadcrumbCurrent} aria-current="page">
          {item.label}
        </li>
      );
    }
  });

  return (
    <nav className={`${styles.breadcrumbs}${className ? ` ${className}` : ''}`} aria-label={ariaLabel}>
      <ol className={styles.breadcrumbRow}>{row}</ol>
    </nav>
  );
}
