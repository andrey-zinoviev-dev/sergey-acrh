import type { Metadata } from "next";

import Breadcrumbs from "@/components/Breadcrumbs";
import Headline from "@/components/Headline";
import Container from "@/components/Container";
import ProjectsFilters from "@/components/ProjectsFilters";

import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "Проекты",
  description: "Все проекты архитектурного бюро.",
};

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <Container>
          <div className={styles.pageHeader}>
            <Breadcrumbs
              items={[
                { label: "Главная", href: "/" },
                { label: "Проекты" },
              ]}
            />
            <Headline>Проекты</Headline>
          </div>

          <ProjectsFilters />
        </Container>
      </section>
    </div>
  );
}
