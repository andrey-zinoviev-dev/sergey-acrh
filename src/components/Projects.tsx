import styles from './Projects.module.css';
import Project from './Project';

export default function Projects() {
    return (
        <section className={styles.projects}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Мои проекты</h2>
                <p className={styles.description}>
                    В моей практике как проектирование, так и архитектурное консультирование. Все мои проекты разного масштаба: от частных домов и общественных зданий до храмов со сложными функциональными и техническими требованиями, как в новом строительстве, так и в существующей застройке — реконструкции и реставрации.
                </p>
                <ul className={styles.projectsList}>
                    <Project
                        href="/projects/1"
                        category="Градостроительство"
                        title="Стадион Луи II"
                        year="2025"
                        industry="Инудстрия"
                        territories="Территории"
                        location="Локация"
                        locationValue="Монако"
                        imageSrc="/project-1.png"
                        imageAlt="Стадион Луи II"
                    />
                    <Project
                        href="/projects/2"
                        category="Градостроительство"
                        title="Ангар S7"
                        year="2024"
                        industry="Инудстрия"
                        territories="Территории"
                        location="Локация"
                        locationValue="Москва"
                        imageSrc="/project-1.png"
                        imageAlt="Ангар S7"
                    />
                </ul>
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
            </div>
        </section>
    );
}
