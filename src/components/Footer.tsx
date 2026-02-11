import styles from './Footer.module.css';
import Container from './Container';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container className={styles.container}>
                <div>
                    <span>Создавать новое с уважением к истории и историям</span>
                    <p className={styles.text}>© 2024 Архитектор Сергей Пономаренко. Все права защищены.</p>
                </div>
                {/* <span>Сила в проекте</span> */}
                
            </Container>
        </footer>
    )
}