'use client';
import styles from './Step.module.css';
import { useState } from 'react';
    // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    // import { faChevronRight, faChevronDown, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Headline from './Headline';

interface StepProps {
    number: string;
    title: string;
    description: string;
    result: string;
    isFirst?: boolean;
}

export default function Step({ number, title, description, result, isFirst }: StepProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        // <button className={styles.step + ' ' + (isFirst ? styles.stepFirst : '')} onClick={() => setIsOpen(!isOpen)}>
        //     <span className={styles.stepNumber}>{number}</span>
        //     <span className={styles.stepNumber}>{number}</span>
        //     <Headline className={styles.stepTitle}>{title}</Headline>
        //     <h3 className={styles.stepTitle}>{title}</h3>
        //     <p className={styles.stepDescription}>{description}</p>

        //     <div className={styles.stepContentWrapper}>
        //         <div className={styles.stepHeaderWrapper}>
        //             <h3 className={styles.stepTitle}>{title}</h3>
        //             <FontAwesomeIcon icon={faChevronRight} className={styles.stepIcon + ' ' + (isOpen ? styles.stepIconOpen : '')} />
        //         </div>
        //         <div className={styles.stepContent}>
        //             <p className={styles.stepDescription}>{description}</p>
        //         </div>
        //     </div>
            
        // </button>
        <div className={styles.step}>
            <span className={styles.stepNumber}>{number}</span>
            <Headline className={styles.stepTitle}>{title}</Headline>
            <p className={styles.stepDescription}>{description}</p>
        </div>
    );
}