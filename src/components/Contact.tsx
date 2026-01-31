import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {
    return (
        <section className={styles.contact}>
            <div className={styles.container}>
                <h2 className={styles.heading}>От обсуждения — к воплощению</h2>
                <div className={styles.textBlock}>
                    <p className={styles.text}>
                        Я буду рад обсудить ваш проект. Напишите мне или позвоните — я помогу разобраться в деталях и предложу варианты решения вашей задачи. Это лучший момент, чтобы начать диалог
                    </p>
                </div>
                <div className={styles.contacts}>
                    <span>Архитектор Сергей Пономаренко</span>
                    <div className={styles.contactItem}>
                        <span className={styles.label}>Email</span>
                        <a href="mailto:contact@example.com" className={styles.value}>ilichwork@hotmail.com <FontAwesomeIcon icon={faArrowRight} /></a>
                    </div>
                    <div className={styles.contactItem}>
                        <span className={styles.label}>Телефон</span>
                        <a href="tel:+79915585805" className={styles.value}>+7 991 558 58 05</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
