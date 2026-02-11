// 'use client';
import styles from './Steps.module.css';
import Step from './Step';
import { StepItem } from './Step';

interface StepsProps {
    steps: StepItem[];
}

export default function Steps({ steps }: StepsProps) {
    return (
        <ul className={styles.stepsList}>
            {steps.map((step) => (
                <li key={step.number}>
                    <Step {...step} />
                </li>
            ))}
        </ul>
    );
}
