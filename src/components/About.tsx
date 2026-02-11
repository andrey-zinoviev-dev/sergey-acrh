import styles from './About.module.css';
import Image from 'next/image';
import Headline from './Headline';
import Container from './Container';
import Steps from './Steps';
import BoldSpan from './BoldSpan';

export default function About() {

    const aboutSteps = [
        { number: '01', title: 'САКРАЛЬНОЕ И ОБЩЕСТВЕННОЕ', description: 'Храмовое зодчество и общественные здания. Создание знаковых объектов, которые становятся новыми точками притяжения.', isFirst: true },
        { number: '02', title: 'ТЕРРИТОИИ', description: 'Планирование и создание пространств для развития города и региона.' },
        { number: '03', title: 'ЧАСТНАЯ АРХИТЕКТУРА', description: 'Виллы, резиденции и загородные дома. Проектирование уникальной среды под персональные сценарии жизни.' },
        { number: '04', title: 'ДИЗАЙН И АРТ-ОБЪЕКТЫ', description: 'Объекты для искусства и авторские интерьеры. Глубокая работа с тактильностью материалов, светом и диалогом с историей.' },
        { number: '05', title: 'РЕКОНСТРУКЦИЯ И РЕСТАВРАЦИЯ', description: 'Создание объектов с высокой художественной ценностью: от реставрации наследия до реконструкции и восстановления.' },
    ];

    return (
        <section className={styles.about}>
            <Container className={styles.container}>
                <div className={styles.aboutContent}>
                    <Headline className={styles.aboutHeading}>Я — <BoldSpan className={styles.aboutHeadingSpan}>СЕРГЕЙ ПОНОМАРЕНКО, АРХИТЕКТОР</BoldSpan>. СОЗДАЮ ПРОСТРАНСТВА, КОТОРЫЕ <BoldSpan className={styles.aboutHeadingSpan}>МЕНЯЮТ ВОСПРИЯТИЕ</BoldSpan> И ЗАДАЮТ <BoldSpan className={styles.aboutHeadingSpan}>СЦЕНАРИИ ЖИЗНИ</BoldSpan>: Я ФОРМИРУЮ СРЕДУ, КОТОРАЯ УПОРЯДОЧИВАЕТ ХАОС И ВЫВОДИТ КАЧЕСТВО ЖИЗНИ НА НОВЫЙ УРОВЕНЬ. ГЛАВНОЕ ДЛЯ МЕНЯ — СОХРАНИТЬ <BoldSpan className={styles.aboutHeadingSpan}>ЦЕЛЬНОСТЬ ЗАМЫСЛА</BoldSpan> НА ПУТИ ОТ <BoldSpan className={styles.aboutHeadingSpan}>ПЕРВОГО ЭСКИЗА ДО ВОПЛОЩЕНИЯ</BoldSpan>.</Headline>
                    <div className={styles.aboutContentWrapper}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/about.jpg"
                                alt="О нас"
                                width={600}
                                height={600}
                                className={styles.image}
                            />
                            <span className={styles.authorParagraph}>Магистр МАРХИ, член Союза Архитекторов.</span>
                        </div>
                        
                        <Steps
                            steps={aboutSteps}
                        />
                    </div>
                    {/* <p>Архитектура для меня - это живой процесс, а каждое из этих напрвлений - это новый сценарий жизни.</p> */}
                    {/* <Headline className={styles.aboutHeading}>&quot;АРХИТЕКТУРА – <br />
                        ЭТО ЖИВОЙ ПРОЦЕСС.&quot;
                    </Headline> */}
                    {/* <div className={styles.aboutDescriptionContent}>
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
                    </div> */}

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
