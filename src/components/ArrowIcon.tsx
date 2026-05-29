import Image from 'next/image';
import styles from './ArrowIcon.module.css';

type ArrowIconProps = {
  className?: string;
};

export default function ArrowIcon({ className }: ArrowIconProps) {
  return (
    <Image
      src="/arrow-1.png"
      alt=""
      width={32}
      height={32}
      className={className ? `${styles.arrowIcon} ${className}` : styles.arrowIcon}
    />
  );
}
