import styles from './Projects.module.css';
import Headline from './Headline';
import ArrowIcon from './ArrowIcon';
import Container from './Container';
import LinkComp from './LinkComp';
import ProjectsTable from './ProjectsTable';
import { getHomeProjectsList } from '@/sanity/projects';

export default async function Projects() {
    const projects = await getHomeProjectsList();
    return (
        <section className={styles.projects}>
            <Container className={styles.container}>
                <div className={styles.projectsContent}>
                    <div className={styles.headingWrapper}>
                        <Headline>Мои проекты</Headline>
                        <p className={styles.description}>
                            Все мои проекты разного масштаба: от частных домов и общественных зданий до храмов со сложными функциональными и техническими требованиями, в том числе архитектурные консультации.
                        </p>

                    </div>
                    <ProjectsTable projects={projects} />
                    <LinkComp href="/projects">
                        <span>Посмотреть все проекты</span>
                        <ArrowIcon />
                    </LinkComp>
                </div>
            </Container>
        </section>
    );
}
