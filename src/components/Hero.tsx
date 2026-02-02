import styles from './Hero.module.css';
import Image from 'next/image';
import Container from './Container';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Container className={styles.container}>
                <div className={styles.textContent}>
                    <h1 className={styles.heading}>
                        От замысла — к концепции.
                        <br />
                        От концепции — к архитектурному проекту под реализацию
                    </h1>
                    <p className={styles.description}>
                        Занимаюсь архитектурным проектированием объектов с уникальными задачами и сложными творческими замыслами: от формирования архитектурного образа до авторского надзора.
                    </p>
                </div>

                <div className={styles.heroImage}>

                </div>
            </Container>
            <Image
                src="/hero-image.png"
                alt="Современная архитектура"
                width={1200}
                height={800}
                className={styles.image}
                priority
            />
        </section>
    );
}
