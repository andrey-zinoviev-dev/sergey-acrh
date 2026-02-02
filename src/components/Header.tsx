import styles from './Header.module.css';
import Container from './Container';
import CTAButton from './CTAButton';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <p className={styles.logo}>logo</p>
        <CTAButton />
      </Container>
    </header>
  );
}
