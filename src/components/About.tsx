import styles from './About.module.css';
import Image from 'next/image';

export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>Об архитекторе</h2>
                    <div className={styles.textBlock}>
                        <p className={styles.paragraph}>
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
                        </p>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/about-figma.png"
                        alt="О нас"
                        width={600}
                        height={600}
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
}
