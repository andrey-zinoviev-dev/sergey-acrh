import type { Metadata } from "next";

import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";

import Headline from "@/components/Headline";

import Container from "@/components/Container";

import { projects } from "@/app/utils/utils";

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



          <div className={styles.tableWrap}>

            <table className={styles.table}>

              <thead>

                <tr>

                  <th className={styles.colIndex}>No</th>

                  <th className={styles.colTitle}>Название</th>

                  <th className={styles.colDesc}>Локация</th>

                  <th className={styles.colRole}>Роль</th>

                </tr>

              </thead>

              <tbody>

                {projects.map((project, i) => (

                  <tr key={project.href}>

                    <td className={styles.colIndex}>

                      {String(i + 1).padStart(2, "0")}

                    </td>

                    <td className={styles.colTitle}>

                      <Link href={project.href} className={styles.titleLink}>

                        {project.title}

                      </Link>

                    </td>

                    <td className={styles.colDesc}>{project.locationValue}</td>

                    <td className={styles.colRole}>{project.category}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </Container>

      </section>

    </div>

  );

}

