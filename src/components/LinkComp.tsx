import Link, { LinkProps } from "next/link";
import styles from "./LinkComp.module.css";

type LinkCompProps = LinkProps & {
    children?: React.ReactNode;
    className?: string;
}

export default function LinkComp({href, children, className}: LinkCompProps) {
    
    return (
        <Link className={className ? `${styles.linkComp} ${className}` : styles.linkComp} href={href}>
            {children}
        </Link>
    )
};