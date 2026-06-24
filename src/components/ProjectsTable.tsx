import Link from 'next/link';

import type { ProjectListRow } from '@/sanity/projects';
import styles from '@/app/(app)/projects/projects.module.css';

type ProjectsTableProps = {
  projects: ProjectListRow[];
  emptyMessage?: string;
};

export default function ProjectsTable({
  projects,
  emptyMessage = 'Нет проектов',
}: ProjectsTableProps) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.colTitle}>Название</th>
            <th className={styles.colDesc}>Локация</th>
            <th className={styles.colCategory}>Категория</th>
          </tr>
        </thead>
        <tbody>
          {projects.length === 0 ? (
            <tr>
              <td colSpan={3} className={styles.emptyRow}>
                {emptyMessage}
              </td>
            </tr>
          ) : (
            projects.map((project) => (
              <tr key={project.slug} className={styles.projectRow}>
                <td className={styles.colPrimary}>
                  <div className={styles.primaryTop}>
                    <div className={styles.colTitle}>
                      <Link href={project.href} className={styles.titleLink}>
                        {project.title}
                      </Link>
                    </div>
                  </div>
                  <div className={styles.metaInline}>
                    <span className={styles.colDesc}>{project.locationValue}</span>
                    <span className={styles.colCategory}>{project.filterCategory}</span>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
