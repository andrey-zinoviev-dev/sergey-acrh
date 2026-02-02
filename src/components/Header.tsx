import styles from './Header.module.css';
import Container from './Container';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <p className={styles.logo}>logo</p>
        <button className={styles.ctaButton}>
          заказать консультацию
        </button>
      </Container>
    </header>
  );
}
