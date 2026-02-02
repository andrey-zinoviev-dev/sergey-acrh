import styles from './Footer.module.css';
import Container from './Container';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container className={styles.container}>
                {/* <span>Сила в проекте</span> */}
                <p>© 2024 Архитектор Сергей Пономаренко. Все права защищены.</p>
            </Container>
        </footer>
    )
}