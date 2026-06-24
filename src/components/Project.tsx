import styles from './Project.module.css';
import Image from 'next/image';
import LinkComp from './LinkComp';

import type { ProjectGridCard } from '@/sanity/projects';

function projectMetaLabel(category: string): string {
    return category.split(',')[0].trim().toUpperCase();
}

export default function Project({
    href,
    category,
    title,
    year,
    locationValue,
    imageSrc,
    imageAlt,
}: ProjectGridCard) {
    const metaLabel = projectMetaLabel(category);

    return (
        <LinkComp className={styles.projectLink} href={href}>
            <article className={styles.card}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={640}
                        height={640}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <p className={styles.year}>{year}</p>
                    <p className={styles.location}>{locationValue}</p>
                    <p className={styles.category}>{metaLabel}</p>
                    <h3 className={styles.title}>{title}</h3>
                </div>
            </article>
        </LinkComp>
    );
}
