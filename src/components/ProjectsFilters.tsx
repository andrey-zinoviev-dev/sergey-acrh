"use client";

import { useMemo, useState } from "react";
import {
  PROJECT_FILTER_CATEGORIES,
} from "@/lib/utils";
import type { ProjectGridCard } from "@/sanity/projects";
import ProjectsGrid from "@/components/ProjectsGrid";
import styles from "@/app/(app)/projects/projects.module.css";

const ALL = "Все";

type ProjectsFiltersProps = {
  projects: ProjectGridCard[];
};

export default function ProjectsFilters({ projects }: ProjectsFiltersProps) {
  const [active, setActive] = useState<string>(ALL);

  const visible = useMemo((): ProjectGridCard[] => {
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

      </nav>

      <ProjectsGrid
        projects={visible}
        emptyMessage="Нет проектов в этой категории"
      />
    </>
  );
}
