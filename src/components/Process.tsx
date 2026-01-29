import styles from './Process.module.css';
import Image from 'next/image';
import Step from './Step';

export default function Process() {
    return (
        <section className={styles.process}>
            <div className={styles.container}>
                <div className={styles.headingWrapper}>
                    <div className={styles.descriptionWrapper}>
                        <h2 className={styles.heading}>Как я работаю</h2>
                        <p className={styles.description}>Мы с вами определяем ключевые задачи и проводим комплексное исследование всех исходных условий: оцениваем существующие ограничения и ищем возможности для их развития.</p>
                        {/* <p className={styles.description}>Понимание всех вводных на старте позволяет исключить случайные решения и сформировать ясную основу для качественного воплощения проекта.</p> */}
                        <ul>
                            <li>
                                <Step number="01" title="Предпроектное исследование" description="Изучаю параметры участка, градостроительный регламент и фиксирую бюджетные рамки." result="Защита от юридических рисков и переплат на старте." />

                            </li>
                            <li>
                                <Step number="02" title="Концепция" description="Разрабатываю решения по форме, материалам и технологиям, отвечающие вашим задачам." result="Согласованная архитектурная концепция и образ." />
                            </li>
                            <li>
                                <Step number="03" title="Рабочая документация" description="Перевожу утвержденную идею в систему детальных чертежей и спецификаций." result="Безошибочный рабочий проект для точного расчета сметы." />
                            </li>
                            <li>
                                <Step number="04" title="Передача проекта" description="Формирую полный комплект документации и провожу финальную консультацию по проекту." result="Готовый пакет документов для выхода на стройплощадку." />
                            </li>
                            <li>
                                <Step number="05" title="Авторский надзор" description="В процессе строительства я контролирую соблюдение геометрии и точность выполнения сложных узлов на объекте." result="Реальный объект, идентичный проектному замыслу." />
                            </li>
                        </ul>                  
                    </div>
                    <Image
                        src="/process.png"
                        alt="Процесс работы"
                        width={800}
                        height={600}
                        className={styles.image}
                    />
                </div>
                {/* <p>В основе моей работы —  понимание того, как здание будет использоваться, восприниматься и существовать в среде, для которой создаётся. Для меня важно, чтобы исходный замысел проходил скозь все этапы проекта</p> */}

                <div className={styles.content}>
                    <div className={styles.steps}>

                        {/* <div className={styles.step}>
                            <span>01</span>
                            <h3 className={styles.stepTitle}>Предпроектное исследование</h3>
                            <p className={styles.stepDescription}>
                                Анализ участка, определение бюджета, рабочих ограничений, нормативных требований
                            </p>
                        </div>
                        <div className={styles.step}>
                            <span>02</span>
                            <h3 className={styles.stepTitle}>Концепция</h3>
                            <p className={styles.stepDescription}>
                                Разработка архитектурных решений, подбор материалов, технологий и конструкций
                            </p>
                        </div>
                        <div className={styles.step}>
                            <span>03</span>
                            <h3 className={styles.stepTitle}>Рабочая документация</h3>
                            <p className={styles.stepDescription}>
                                Подготовка комплекта проектных чертежей. Проверка разделов проекта на их соответствия исходной задаче
                            </p>
                        </div>
                        <div className={styles.step}>
                            <span>04</span>
                            <h3 className={styles.stepTitle}>Передача проекта</h3>
                            <p className={styles.stepDescription}>
                                Передача полного комплекта документации и консультирование по вопросам реализации проекта
                            </p>
                        </div>
                        <div className={styles.step}>
                            <span>05</span>
                            <h3 className={styles.stepTitle}>Авторский надзор</h3>
                            <p className={styles.stepDescription}>
                                Контроль соответствия выполняемых строительных работ проектной документации
                            </p>
                        </div> */}
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
