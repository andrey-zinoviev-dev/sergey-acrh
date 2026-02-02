import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ArrowIcon.module.css';

type ArrowIconProps = {
  className?: string;
};

export default function ArrowIcon({ className }: ArrowIconProps) {
  return (
    <FontAwesomeIcon
      icon={faArrowRight}
      className={className ? `${styles.arrowIcon} ${className}` : styles.arrowIcon}
    />
  );
}
