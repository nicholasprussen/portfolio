import Link from 'next/link';
import React, { ReactNode } from 'react';
import styles from './FormattedLink.module.scss';

export interface IFormattedLinkProps {
    href: string,
    children?: ReactNode | ReactNode[]
}

const FormattedLink = (props: IFormattedLinkProps) => {
    return (
        <Link href={props.href}>
            <a className={styles.formattedLink}>
                {props.children}
            </a>
        </Link>
    );
};
export default FormattedLink;
