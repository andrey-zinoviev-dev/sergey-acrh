import styles from './Contact.module.css';
import Headline from './Headline';
import ArrowIcon from './ArrowIcon';
import Container from './Container';

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <Container>
                <div className={styles.contentWrapper}>
                    <Headline className={styles.heading}>Лучший момент, чтобы начать диалог — сейчас</Headline>
                    <div className={styles.contacts}>
                        <a href="mailto:ilichwork@hotmail.com" target="_blank" rel="noopener noreferrer" className={styles.value}>ilichwork@hotmail.com <ArrowIcon /></a>
                        <a href="tel:+79915585805" target="_blank" rel="noopener noreferrer" className={styles.value}>+7 991 558 58 05 <ArrowIcon /></a>
                        <a href="https://t.me/ilichwork" target="_blank" rel="noopener noreferrer" className={styles.value}>TG: @ilichwork <ArrowIcon /></a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
