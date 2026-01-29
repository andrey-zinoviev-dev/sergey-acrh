'use client';
import styles from './Step.module.css';
import { useState } from 'react';
interface StepProps {
    number: string;
    title: string;
    description: string;
    result: string;
}

export default function Step({ number, title, description, result }: StepProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <button className={styles.step} onClick={() => setIsOpen(!isOpen)}>
            {/* <span className={styles.stepNumber}>{number}</span> */}
            <div className={styles.stepHeaderWrapper}>
                <span className={styles.stepNumber}>{number}</span>
                <h3 className={styles.stepTitle}>{title}</h3>
            </div>
            {isOpen && (
                <div className={styles.stepContent}>
                    <p className={styles.stepDescription}>{description}</p>
                    <p className={styles.stepResult}>Итог: {result}</p>
                </div>
            )}
        </button>
    );
}