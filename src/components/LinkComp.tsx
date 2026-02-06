import Link, { LinkProps } from "next/link";
import styles from "./LinkComp.module.css";

type LinkCompProps = LinkProps & {
    children?: React.ReactNode;
}

export default function LinkComp({href, children}: LinkCompProps) {
    return (
        <Link className={styles.link} href={href}>
            {children}
        </Link>
    )
};