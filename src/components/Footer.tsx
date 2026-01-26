import styles from './Footer.module.css';
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <span>Сила в проекте</span>
                <p>© 2024 Архитектор Сергей Пономаренко. Все права защищены.</p>
            </div>
        </footer>
    )
}