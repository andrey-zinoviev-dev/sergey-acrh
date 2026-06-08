import styles from './Footer.module.css';
import Container from './Container';
import ArrowIcon from './ArrowIcon';
import Headline from './Headline';

export default function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            <Container className={styles.container}>
                <div className={styles.contactSection}>
                    <span className={styles.label}>Архитектор Сергей Пономаренко</span>
                    <h2 className={styles.heading}>
                        Лучший момент, чтобы начать диалог — сейчас
                        {/* <span className={styles.headingLine}>Лучший момент,</span>
                        <span className={styles.headingLine}>
                            чтобы начать диалог — сейчас
                            <ArrowIcon className={styles.headingArrow} />
                        </span> */}
                    </h2>
                    {/* <Headline>
                        <span className={styles.headingLine}>Лучший момент,</span>
                        <span className={styles.headingLine}>
                            чтобы начать диалог — сейчас
                            <ArrowIcon className={styles.headingArrow} />
                        </span>
                    </Headline> */}
                    <hr className={styles.divider} />
                    <div className={styles.contacts}>
                        <a href="mailto:ilichwork@hotmail.com" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                            ilichwork@hotmail.com
                            <ArrowIcon className={styles.contactArrow} />
                        </a>
                        <a href="tel:+79915585805" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                            +7 991 558 58 05
                            <ArrowIcon className={styles.contactArrow} />
                        </a>
                        <a href="https://t.me/ilichwork" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                            TG: @ilichwork
                            <ArrowIcon className={styles.contactArrow} />
                        </a>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <span className={styles.tagline}>Создавать новое с уважением к истории и историям</span>
                    {/* <p className={styles.text}>© 2024 Архитектор Сергей Пономаренко. Все права защищены.</p> */}
                </div>
            </Container>
        </footer>
    );
}
