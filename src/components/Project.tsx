import styles from './Project.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
    href: string;
    category: string;
    title: string;
    year: string;
    industry: string;
    territories: string;
    location: string;
    locationValue: string;
    imageSrc: string;
    imageAlt: string;
}

export default function Project({
    href,
    category,
    title,
    year,
    industry,
    territories,
    location,
    locationValue,
    imageSrc,
    imageAlt,
}: ProjectProps) {
    return (
        <li className={styles.projectItem}>
            <Link href={href} className={styles.link}>
                <div className={styles.content}>
                    <div className={styles.titleBlock}>
                        <div className={styles.category}>{category}</div>
                        <h3 className={styles.title}>{title}</h3>
                        <span className={styles.year}>{year}</span>
                    </div>
                    <div className={styles.metadata}>
                        <div className={styles.metadataColumn}>
                            <span className={styles.metadataLabel}>{industry}</span>
                            <span className={styles.metadataValue}>{territories}</span>
                        </div>
                        <div className={styles.metadataColumn}>
                            <span className={styles.metadataLabel}>{location}</span>
                            <span className={styles.metadataValue}>{locationValue}</span>
                        </div>
                    </div>
                </div>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={800}
                    height={600}
                    className={styles.image}
                />
            </Link>
        </li>
    );
}
