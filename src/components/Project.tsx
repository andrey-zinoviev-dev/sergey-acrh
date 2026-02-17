import styles from './Project.module.css';
import Image from 'next/image';
// import Link from 'next/link';
import ArrowIcon from './ArrowIcon';
import LinkComp from './LinkComp';

import { ProjectProps } from '@/app/interfaces/interfaces';

export default function Project({
    href,
    category,
    title,
    year,
    locationValue,
    imageSrc,
    imageAlt,
}: ProjectProps) {
    return (
        <LinkComp className={styles.projectLink} href={href}>
            <div className={styles.projectInfo}>
                <span>{year} /</span>
                <span>{locationValue} /</span>
                <span> {category}</span>
            </div>
            <div className={styles.titleBlock}>
                <h3 className={styles.title}>
                    <span className={styles.titleText}>{title}</span>
                    <ArrowIcon className={styles.arrowIcon} />
                </h3>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={800}
                    height={600}
                    className={styles.image}
                />
            </div>

        </LinkComp>
        // <li key={title} className={styles.projectItem}>

        // </li>
        // <Link href={href} className={styles.link}>
        //     <div className={styles.projectInfo}>
        //         <span>{year} /</span>
        //         <span>{locationValue} /</span>
        //         <span> {category}</span>
        //     </div>
        //     <div className={styles.titleBlock}>
        //         <h3 className={styles.title}>{title} <ArrowIcon className={styles.arrowIcon} /></h3>
        //         <Image
        //             src={imageSrc}
        //             alt={imageAlt}
        //             width={800}
        //             height={600}
        //             className={styles.image}
        //         />
        //     </div>

        // </Link>
    );
}
