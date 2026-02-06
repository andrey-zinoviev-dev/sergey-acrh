import styles from './Projects.module.css';
import Project from './Project';
import Headline from './Headline';
import Link from 'next/link';
import ArrowIcon from './ArrowIcon';
import Container from './Container';

export default function Projects() {
    return (
        <section className={styles.projects}>
            <Container className={styles.container}>
                <div className={styles.headingWrapper}>
                    <Headline>Мои проекты</Headline>
                    
                    {/* <div className={styles.headingBlock}>
                        
                    </div> */}
                    <div className={styles.descriptionWrapper}>
                        <p className={styles.description}>
                            В моей практике как проектирование, так и архитектурное консультирование.
                        </p>
                        <p className={styles.description}>
                            Все мои проекты разного масштаба: от частных домов и общественных зданий до храмов со сложными функциональными и техническими требованиями, как в новом строительстве, так и в существующей застройке — реконструкции и реставрации.
                        </p>
                    </div>

                </div>

                <ul className={styles.projectsList}>
                    <li className={styles.projectItem}>
                        <Project
                            href="/projects/1"
                            category="Градостроительство"
                            title="Стадион Луи II"
                            year="2025"
                            locationValue="Монако"
                            imageSrc="/project-1.png"
                            imageAlt="Стадион Луи II"
                        />
                    </li>
                    <li className={styles.projectItem}>
                        <Project
                            href="/projects/2"
                            category="Градостроительство"
                            title="Ангар S7"
                            year="2024"
                            locationValue="Москва"
                            imageSrc="/project-1.png"
                            imageAlt="Ангар S7"
                        />
                    </li>
                    <li className={styles.projectItem}>
                        <Project
                            href="/projects/2"
                            category="Градостроительство"
                            title="Ангар S7"
                            year="2024"
                            locationValue="Москва"
                            imageSrc="/project-1.png"
                            imageAlt="Ангар S7"
                        />
                    </li>
                </ul>
                <Link className={styles.link} href="/projects">
                    <span>Посмотреть все проекты</span>
                    <ArrowIcon />
                </Link>
                {/* <div className={styles.projectItem}>
                    <div className={styles.label}>Архитектура</div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/project-1.jpg"
                            alt="Архитектурный проект"
                            width={800}
                            height={600}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.projectItem}>
                    <div className={styles.label}>Градостроительство</div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/project-2.jpg"
                            alt="Градостроительный проект"
                            width={800}
                            height={600}
                            className={styles.image}
                        />
                    </div>
                </div> */}
            </Container>
        </section>
    );
}
