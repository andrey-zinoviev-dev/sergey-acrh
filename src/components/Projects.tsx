import styles from './Projects.module.css';
import Project from './Project';
import Headline from './Headline';
import Link from 'next/link';
import ArrowIcon from './ArrowIcon';
import Container from './Container';
import LinkComp from './LinkComp';

export default function Projects() {
    return (
        <section className={styles.projects}>
            <Container className={styles.container}>
                <div className={styles.projectsContent}>
                    <div className={styles.headingWrapper}>
                        <Headline>Мои проекты</Headline>
                        <div className={styles.descriptionWrapper}>
                            <p className={styles.description}>
                                В моей практике как проектирование, так и архитектурное консультирование.
                            </p>
                            <p className={styles.description}>
                                Все мои проекты разного масштаба: от частных домов и общественных зданий до храмов со сложными функциональными и техническими требованиями, как в новом строительстве, так и в существующей застройке — реконструкции и реставрации.
                            </p>
                        </div>
                    </div>
                    <div className={styles.projectsListWrapper}>
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
                        <LinkComp className={styles.link} href="/projects">
                            <span>Посмотреть все проекты</span>
                            <ArrowIcon className={styles.arrowIcon} />
                        </LinkComp>
                    </div>
                    
                </div>
                {/* <div className={styles.headingWrapper}>
                    <Headline>Мои проекты</Headline>
                    <div className={styles.descriptionWrapper}>
                        <p className={styles.description}>
                            В моей практике как проектирование, так и архитектурное консультирование.
                        </p>
                        <p className={styles.description}>
                            Все мои проекты разного масштаба: от частных домов и общественных зданий до храмов со сложными функциональными и техническими требованиями, как в новом строительстве, так и в существующей застройке — реконструкции и реставрации.
                        </p>
                    </div>

                </div> */}

                
            </Container>
        </section>
    );
}
