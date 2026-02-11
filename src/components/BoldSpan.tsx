import styles from './BoldSpan.module.css';

interface BoldSpanProps {
  children: React.ReactNode;
  className?: string;
}

export default function BoldSpan({ children, className }: BoldSpanProps) {
  return (
    <span className={className ? `${styles.boldSpan} ${className}` : styles.boldSpan}>
      {children}
    </span>
  );
}
