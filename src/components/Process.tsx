import styles from './Process.module.css';
import Image from 'next/image';

export default function Process() {
    return (
        <section className={styles.process}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Как я работаю</h2>
                <p className={styles.description}>Мы с вами определяем ключевые задачи и проводим комплексное исследование всех исходных условий: оцениваем существующие ограничения и ищем возможности для их развития. Понимание всех вводных на старте позволяет исключить случайные решения и сформировать ясную основу для качественного воплощения проекта.</p>
                <p>В основе моей работы —  понимание того, как здание будет использоваться, восприниматься и существовать в среде, для которой создаётся. Для меня важно, чтобы исходный замысел проходил скозь все этапы проекта</p>

                <div className={styles.content}>
                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <h3 className={styles.stepTitle}>Предпроектное исследование</h3>
                            <p className={styles.stepDescription}>
                                Анализ участка, определение бюджета, рабочих ограничений, нормативных требований
                            </p>
                        </div>
                        <div className={styles.step}>
                            <h3 className={styles.stepTitle}>Концепция</h3>
                            <p className={styles.stepDescription}>
                                Разработка архитектурных решений, подбор материалов, технологий и конструкций
                            </p>
                        </div>
                        <div className={styles.step}>
                            <h3 className={styles.stepTitle}>Рабочая документация</h3>
                            <p className={styles.stepDescription}>
                                Подготовка комплекта проектных чертежей. Проверка разделов проекта на их соответствия исходной задаче
                            </p>
                        </div>
                        <div className={styles.step}>
                            <h3 className={styles.stepTitle}>Передача проекта</h3>
                            <p className={styles.stepDescription}>
                                Передача полного комплекта документации и консультирование по вопросам реализации проекта
                            </p>
                        </div>
                        <div className={styles.step}>
                            <h3 className={styles.stepTitle}>Авторский надзор</h3>
                            <p className={styles.stepDescription}>
                                Контроль соответствия выполняемых строительных работ проектной документации
                            </p>
                        </div>
                    </div>
                    <Image
                        src="/process-image.png"
                        alt="Процесс работы"
                        width={800}
                        height={600}
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
}
