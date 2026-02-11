'use client';
import styles from './Step.module.css';
// import { useState } from 'react';
    // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    // import { faChevronRight, faChevronDown, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Headline from './Headline';

export interface StepItem {
    number: string;
    title: string;
    description: string;
    // result: string;
    isFirst?: boolean;
    isSmall?: boolean;
}

export default function Step({ number, title, description, isFirst, isSmall }: StepItem) {
    return (
        <div className={styles.step + ' ' + (isFirst ? styles.stepFirst : '') + ' ' + (isSmall ? styles.stepSmall : '')}>
            <span className={styles.stepNumber}>{number}</span>
            {/* <div className={styles.stepContent}>
                
            </div> */}
            <Headline className={styles.stepTitle}>{title}</Headline>
            <p className={styles.stepDescription}>{description}</p>
        </div>
    );
}