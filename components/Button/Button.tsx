import Link from 'next/link';
import React from 'react';
import styles from './Button.module.scss';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IButtonProps {
    buttonText: string,
    onClick(): any,
    linkHref?: string,
    arrow?: boolean,
    disabled?: boolean
}

const Button = (props: IButtonProps) => {

    const renderButton = () => {
        return (
            <button onClick={() => props.onClick?.()} className={`bg-primary px-4 py-2 sm:px-8 sm:py-4 rounded text-black font-bold text-xl flex justify-center items-center gap-4 ${styles.button}`} disabled={props.disabled}>
                {props.buttonText}
                {props.arrow && <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>}
            </button>
        )
    }

    return (
        props.linkHref ?
        <Link href={props.linkHref}>
            <a>
                {renderButton()}
            </a>
        </Link> :
        renderButton()
    );
};
export default Button;
