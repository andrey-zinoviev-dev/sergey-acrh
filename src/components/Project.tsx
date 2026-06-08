import styles from './Project.module.css';
import Image from 'next/image';
import ArrowIcon from './ArrowIcon';
import LinkComp from './LinkComp';

import { ProjectProps } from '@/types/interfaces';

function projectMetaLabel(category: string): string {
    return category.split(',')[0].trim().toUpperCase();
}

export default function Project({
    href,
    category,
    title,
    year,
    imageSrc,
    imageAlt,
    technicalParameters,
}: ProjectProps) {
    const metaLabel = projectMetaLabel(category);

    return (
        <LinkComp className={styles.projectLink} href={href}>
            <div className={styles.row}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={640}
                        height={480}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.contentHeader}>
                        <h3 className={styles.title}>{title}</h3>
                        <ArrowIcon className={styles.arrowIcon} />
                    </div>
                    {technicalParameters ? (
                        <p className={styles.technicalParameters}>{technicalParameters}</p>
                    ) : null}
                    <p className={styles.meta}>
                        <span className={styles.metaLabel}>{metaLabel}</span>
                        <span className={styles.metaDate}>{year}</span>
                    </p>
                </div>
                
            </div>
        </LinkComp>
    );
}
