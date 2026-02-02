'use client';
import styles from './CTAButton.module.css';

type CTAButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export default function CTAButton({ className, ...props }: CTAButtonProps) {
  return (
    <button
      // type="button"
      className={[styles.ctaButton, className].filter(Boolean).join(' ')}
      onClick={() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }}
      {...props}
    >
      Заказать консультацию
    </button>
  );
}
