import styles from './About.module.css';
import Image from 'next/image';
import Headline from './Headline';
import Container from './Container';

export default function About() {
    return (
        <section className={styles.about}>
            <Container className={styles.container}>
                <div className={styles.content}>
                    <Headline className={styles.aboutHeading}>&quot;АРХИТЕКТУРА – ЭТО ЖИВОЙ ПРОЦЕСС.&quot;</Headline>
                    <div className={styles.textBlock}>
                        <p className={[styles.paragraph, styles.author].join(' ')}><span>Сергей Ильич Пономаренко</span> <span>Магистр МАРХИ, член Союза Архитекторов.</span></p>
                        <p className={styles.paragraph}>Я — частный архитектор. Специализируюсь на создании объектов с высокой художественной ценностью: от реставрации наследия до новых зданий с уникальным характером.</p>
                        <p className={styles.paragraph}>Мной движет стремление сохранить чистоту идеи на всех этапах и создать архитектуру, которая имеет значение.</p>
                        {/* <p className={styles.paragraph}>
                            Магистр-выпускник МАРХИ, член Союза Архитекторов.
                        </p>
                        <p className={styles.paragraph}>
                            В моей практике работа над идеей всегда начинается с аналитики, предшествующей чертежам.
                        </p>
                        <p className={styles.paragraph}>
                            Архитектура - это живой процесс. Для меня он начинается с образа здания как целостного пространственного и функционального решения
                        </p>
                        <p className={styles.paragraph}>
                            Мой подход к проектированию и вклад в архитектурную среду отмечены публикациями в журнале «Архитектурный вестник», монографии «Архитектурная мастерская Александра Зусика», архитектурном фестивале «Золотое Сечение»
                        </p>
                        <p className={styles.paragraph}>
                            Получил благодарность Правительства Москвы за участие в разработке концепций для Международного православного молодежного форума.
                        </p> */}
                    </div>
                </div>
                <Image
                    src="/about-rect.png"
                    alt="О нас"
                    width={600}
                    height={600}
                    className={styles.image}
                />
            </Container>
        </section>
    );
}
