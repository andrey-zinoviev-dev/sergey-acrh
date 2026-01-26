import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import styles from "./page.module.css";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.scrollContainer}>
        <Header />
        <main className={styles.main}>
          <Hero />
          <About />
          <Projects />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
