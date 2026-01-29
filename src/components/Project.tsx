import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Project.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
        <li key={title} className={styles.projectItem}>
            <Link href={href} className={styles.link}>
                <div className={styles.projectInfo}>
                    <span>{year} /</span>
                    <span>{locationValue} /</span>
                    <span> {category}</span>
                    {/* <h3>{title}</h3> */}
                </div>
                <div className={styles.titleBlock}>
                    <h3 className={styles.title}>{title} <FontAwesomeIcon className={styles.arrowIcon} icon={faArrowRight} /></h3>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={800}
                        height={600}
                        className={styles.image}
                    />
                </div>

            </Link>
        </li>
    );
}
