import styles from './Hero.module.css';
import Image from 'next/image';
import Container from './Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Container className={styles.container}>
                <div className={styles.heroContent}>
                    {/* <div className={styles.textContent}>

                    </div> */}
                    <h1 className={styles.heading}>

                            АРХИТЕКТУРА - ДИЗАЙН
                    </h1>
                    <div className={styles.descriptionContent}>
                        <p className={styles.description}>
                            Проектирование объектов с уникальными задачами и сложными творческими замыслами
                        </p>
                        <div className={styles.imageContent}>
                            <Image
                                src="/hero-section-image.png"
                                alt="Современная архитектура"
                                width={1200}
                                height={800}
                                className={styles.image}
                                priority
                            />
                            <span className={styles.arrowText}>
                                ОБРАЗ ФОРМИРУЕТ ЗДАНИЕ
                                <FontAwesomeIcon className={styles.arrowIcon} icon={faArrowRight} />
                            </span>
                        </div>
                        
                    </div>
                </div>

            </Container>

        </section>
    );
}
