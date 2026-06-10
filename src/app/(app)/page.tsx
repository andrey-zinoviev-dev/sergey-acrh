import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import { getHomeProjects } from "@/sanity/projects";
import styles from "./page.module.css";

export default async function Home() {
  const homeProjects = await getHomeProjects();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <About />
        <Projects projects={homeProjects} />
        <Process />
        {/* <Call /> */}
      </main>
    </div>
  );
}
