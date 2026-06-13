import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import Container from '@/components/Container';
import Headline from '@/components/Headline';
import ProjectImageGallery from '@/components/ProjectImageGallery';
import { getAllProjectSlugs, getProjectDetail } from '@/sanity/projects';
import styles from './page.module.css';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getProjectDetail(slug);
  if (!data) {
    return { title: 'Проект не найден' };
  }
  return {
    title: `${data.title} — проект`,
    description: data.description.slice(0, 160),
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getProjectDetail(slug);
  if (!data) {
    notFound();
  }

  return (
    <>
      <main className={styles.page}>
        <Container>
          <div className={styles.pageHeader}>
            <Breadcrumbs
              items={[
                { label: 'Главная', href: '/' },
                { label: 'Проекты', href: '/projects' },
                { label: data.title },
              ]}
            />
            <Headline>{data.title}</Headline>
          </div>

          <figure className={styles.cover}>
            <ProjectImageGallery images={data.galleryImages} />
            <figcaption className={styles.captionRow}>
              <span>{data.coverCaptionLeft}</span>
            </figcaption>
          </figure>

          {/* <section className={styles.splitSection} aria-labelledby="project-categories-heading">
            <div className={styles.splitLabel} id="project-categories-heading">
              [ 01 ] Категории
            </div>
            <div className={styles.categoryRows}>
              <div className={styles.categoryRow}>
                <span className={styles.categoryName}>Направление</span>
                <span className={styles.leader} aria-hidden />
                <span className={styles.categoryValue}>{data.category}</span>
                <span className={styles.rowArrow} aria-hidden>
                  ↗
                </span>
              </div>
              <div className={styles.categoryRow}>
                <span className={styles.categoryName}>Статус</span>
                <span className={styles.leader} aria-hidden />
                <span className={styles.categoryValue}>{data.status}</span>
                <span className={styles.rowArrow} aria-hidden>
                  ↗
                </span>
              </div>
              <div className={styles.categoryRow}>
                <span className={styles.categoryName}>Локация</span>
                <span className={styles.leader} aria-hidden />
                <span className={styles.categoryValue}>{data.locationValue}</span>
                <span className={styles.rowArrow} aria-hidden>
                  ↗
                </span>
              </div>
            </div>
          </section> */}

          <section className={styles.splitSection} aria-labelledby="project-description-heading">
            <div className={styles.splitLabel} id="project-description-heading">
              [ 02 ] Описание
            </div>
            <p className={styles.sectionText}>{data.description}</p>
          </section>

          <section className={styles.splitSection} aria-labelledby="project-architect-heading">
            <div className={styles.splitLabel} id="project-architect-heading">
              [ 03 ] Роль архитектора
            </div>
            <p className={styles.sectionText}>
              Создал генплан, определил все необходимые работы, рассчитал материалы для строительства
            </p>
          </section>

          <section className={styles.splitSection} aria-labelledby="project-technical-heading">
            <div className={styles.splitLabel} id="project-technical-heading">
              [ 04 ] Технические параметры
            </div>
            <p className={styles.sectionText}>{data.technicalParameters}</p>
          </section>
        </Container>
      </main>
    </>
  );
}
