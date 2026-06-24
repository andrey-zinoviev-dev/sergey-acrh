import Project from '@/components/Project';
import type { ProjectGridCard } from '@/sanity/projects';
import styles from '@/app/(app)/projects/projects.module.css';

type ProjectsGridProps = {
  projects: ProjectGridCard[];
  emptyMessage?: string;
};

export default function ProjectsGrid({
  projects,
  emptyMessage = 'Нет проектов',
}: ProjectsGridProps) {
  if (projects.length === 0) {
    return <p className={styles.emptyGrid}>{emptyMessage}</p>;
  }

  return (
    <ul className={styles.projectsGrid}>
      {projects.map((project) => (
        <li key={project.href} className={styles.projectsGridItem}>
          <Project {...project} />
        </li>
      ))}
    </ul>
  );
}
