import styles from './Headline.module.css';

type HeadlineProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Headline({ children, className }: HeadlineProps) {
  return (
    <h2 className={className ? `${styles.headline} ${className}` : styles.headline}>
      {children}
    </h2>
  );
}
