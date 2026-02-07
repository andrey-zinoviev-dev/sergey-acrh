import styles from './About.module.css';
import Image from 'next/image';
import Headline from './Headline';
import Container from './Container';

export default function About() {
    return (
        <section className={styles.about}>
            <Container className={styles.container}>
                <div className={styles.aboutContent}>
                    <Headline className={styles.aboutHeading}>&quot;АРХИТЕКТУРА – <br />
                        ЭТО ЖИВОЙ ПРОЦЕСС.&quot;
                    </Headline>
                    <div className={styles.aboutDescriptionContent}>
                        <p className={styles.aboutParagraph}>
                            Я — частный архитектор.
                        </p>
                        <p className={styles.aboutParagraph}>
                            Специализируюсь на создании объектов с высокой художественной ценностью: от реставрации наследия до новых зданий с уникальным характером.
                        </p>
                        <p className={styles.aboutParagraph}>
                            Мной движет стремление сохранить чистоту идеи на всех этапах и создать архитектуру, которая имеет значение.
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/about-rect.png"
                            alt="О нас"
                            width={600}
                            height={600}
                            className={styles.image}
                        />
                        <div className={styles.authorContent}>
                            <Headline className={styles.authorHeading}>Сергей Ильич Пономаренко</Headline>
                            <p className={styles.authorParagraph}>Магистр МАРХИ, член Союза Архитекторов.</p>
                        </div>
                    </div>
                    
                </div>
                <div className={styles.content}>
                    {/* <Headline className={styles.aboutHeading}>&quot;АРХИТЕКТУРА – ЭТО ЖИВОЙ ПРОЦЕСС.&quot;</Headline>
                    <div className={styles.textBlock}>
                        <p className={[styles.paragraph, styles.author].join(' ')}><span>Сергей Ильич Пономаренко</span> <span>Магистр МАРХИ, член Союза Архитекторов.</span></p>
                        <p className={styles.paragraph}>Я — частный архитектор. Специализируюсь на создании объектов с высокой художественной ценностью: от реставрации наследия до новых зданий с уникальным характером.</p>
                        <p className={styles.paragraph}>Мной движет стремление сохранить чистоту идеи на всех этапах и создать архитектуру, которая имеет значение.</p>
                    </div> */}
                </div>
                {/* <Image
                    src="/about-rect.png"
                    alt="О нас"
                    width={600}
                    height={600}
                    className={styles.image}
                /> */}
            </Container>
        </section>
    );
}
