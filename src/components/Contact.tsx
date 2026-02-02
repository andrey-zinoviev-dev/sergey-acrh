import styles from './Contact.module.css';
import Headline from './Headline';
import ArrowIcon from './ArrowIcon';
import Image from 'next/image';
import Container from './Container';

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <Container className={styles.container}>
                <Headline>От обсуждения — к воплощению</Headline>
                <div className={styles.contentWrapper}>
                    <Image
                        src="/contacts-bg-comp.png"
                        alt="Контакты"
                        width={600}
                        height={600}
                        className={styles.image}
                    />
                    <div className={styles.textBlock}>
                        {/* <div className={styles.textWrapper}>x
                        
                        <p className={styles.text}>
                            Это лучший момент, чтобы начать диалог.
                        </p>
                    </div> */}
                        <p className={styles.text}>
                            Я буду рад обсудить ваш проект. Напишите мне или позвоните — я помогу разобраться в деталях и предложу варианты решения вашей задачи.
                        </p>
                        {/* <div className={styles.divider}></div> */}
                        <div className={styles.contacts}>
                            <span className={styles.author}>Сергей Пономаренко</span>
                            {/* <div className={styles.contactItem}>
                            <span className={styles.label}>Email</span>
                        </div> */}
                            <a href="mailto:ilichwork@hotmail.com" target="_blank" rel="noopener noreferrer" className={styles.value}>ilichwork@hotmail.com <ArrowIcon /></a>
                            <a href="tel:+79915585805" target="_blank" rel="noopener noreferrer" className={styles.value}>+7 991 558 58 05 <ArrowIcon /></a>
                            <a href="https://t.me/ilichwork" target="_blank" rel="noopener noreferrer" className={styles.value}>TG: @ilichwork <ArrowIcon /></a>

                            {/* <div className={styles.contactItem}>
                            <span className={styles.label}>Телефон</span>
                        </div>
                        <div className={styles.contactItem}>
                            <span className={styles.label}>Telegram</span>
                        </div> */}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
