import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import Container from '@/components/Container';
import Headline from '@/components/Headline';
import Footer from '@/components/Footer';
import { getAllProjectSlugs, getProjectPagePayload } from '@/app/utils/utils';
import styles from './page.module.css';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getProjectPagePayload(slug);
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
  const data = getProjectPagePayload(slug);
  if (!data) {
    notFound();
  }

  const counter = `${String(data.index).padStart(2, '0')} — ${String(data.total).padStart(2, '0')}`;

  return (
    <>
      <main className={styles.page}>
        <Container>
          <div className={styles.heroRow}>
            <div className={styles.colAside}>
              <Breadcrumbs
                items={[
                  { label: 'Главная', href: '/' },
                  { label: 'Проекты', href: '/projects' },
                  { label: data.title },
                ]}
              />
            </div>
            <div className={styles.colMain}>
              <Headline>{data.title}</Headline>
            </div>
          </div>

          <figure className={styles.cover}>
            <Image
              src={data.imageSrc}
              alt={data.imageAlt}
              width={1600}
              height={900}
              className={styles.coverImage}
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <figcaption className={styles.captionRow}>
              <span>{data.coverCaptionLeft}</span>
              <span className={styles.captionRight}>{counter}</span>
            </figcaption>
          </figure>

          <section className={styles.splitSection} aria-labelledby="project-categories-heading">
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
          </section>

          <section className={styles.splitSection} aria-labelledby="project-description-heading">
            <div className={styles.splitLabel} id="project-description-heading">
              [ 02 ] Описание
            </div>
            <div className={styles.sectionBody}>
              <p>{data.description}</p>
            </div>
          </section>

          <section className={styles.splitSection} aria-labelledby="project-technical-heading">
            <div className={styles.splitLabel} id="project-technical-heading">
              [ 03 ] Технические параметры
            </div>
            <div className={styles.sectionBody}>
              <p>{data.technicalParameters}</p>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
