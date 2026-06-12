"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  PROJECT_FILTER_CATEGORIES,
} from "@/lib/utils";
import type { ProjectListRow } from "@/sanity/projects";
import styles from "@/app/(app)/projects/projects.module.css";

const ALL = "Все";

type ProjectsFiltersProps = {
  projects: ProjectListRow[];
};

export default function ProjectsFilters({ projects }: ProjectsFiltersProps) {
  const [active, setActive] = useState<string>(ALL);

  const visible = useMemo((): ProjectListRow[] => {
    if (active === ALL) return projects;
    return projects.filter((project) => project.filterCategory === active);
  }, [active, projects]);

  const selectionCount = visible.length;

  function filterButtonLabel(label: string, active: string, count: number): string {
    if (active !== label) return label;
    return `${label} [${count}]`;
  }

  return (
    <>
      <nav className={styles.filters} aria-label="Фильтр по направлениям">
        <div className={styles.filterButtons}>
          {/* <button
            type="button"
            className={active === ALL ? styles.filterActive : styles.filterBtn}
            aria-pressed={active === ALL}
            onClick={() => setActive(ALL)}
          >
            {ALL}
          </button>
          {PROJECT_FILTER_CATEGORIES.map((label) => (
            <button
              key={label}
              type="button"
              className={
                active === label ? styles.filterActive : styles.filterBtn
              }
              aria-pressed={active === label}
              onClick={() => setActive(label)}
            >
              {label}
            </button>
          ))} */}
          {PROJECT_FILTER_CATEGORIES.map((label) => (
            <button
              key={label}
              type="button"
              className={
                active === label ? styles.filterActive : styles.filterBtn
              }
              aria-pressed={active === label}
              onClick={() => setActive(label)}
            >
              {filterButtonLabel(label, active, selectionCount)}
            </button>
          ))}
        </div>
        {/* <span className={styles.filterCount} aria-live="polite">
          ({selectionCount})
        </span> */}
      </nav>

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
            {visible.length === 0 ? (
              <tr>
                <td colSpan={3} className={styles.emptyRow}>
                  Нет проектов в этой категории
                </td>
              </tr>
            ) : (
              visible.map((project) => (
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
                      <span className={styles.colCategory}>
                        {project.filterCategory}
                      </span>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
