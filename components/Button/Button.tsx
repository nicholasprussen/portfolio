import Link from 'next/link';
import React from 'react';
import styles from './Button.module.scss';
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IButtonProps {
    buttonText: string,
    onClick(): any,
    linkHref?: string,
    arrow?: 'up' | 'down' | 'left' | 'right',
    disabled?: boolean,
    backgroundColor?: string,
    neumorphism?: boolean,
    darkNeumorphism?: boolean
}

const Button = (props: IButtonProps) => {

    const renderArrow = () => {
        switch (props.arrow) {
            case 'up':
                return <FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon>
            case 'down':
                return <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
            case 'left':
                return <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
            case 'right':
                return <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
        }
    }

    const renderButton = () => {
        return (
            <button onClick={() => props.onClick?.()} className={`${props.backgroundColor ? props.backgroundColor : 'bg-primary'} px-4 py-2 sm:px-8 sm:py-4 rounded text-black font-bold text-xl flex justify-center items-center gap-4 ${styles.button} ${props.backgroundColor}`} disabled={props.disabled}>
                {props.buttonText}
                {props.arrow && renderArrow()}
            </button>
        )
    }

    const renderNeumorphismButton = () => {
        return (
            <button onClick={() => props.onClick?.()} className={`${props.backgroundColor ? props.backgroundColor : 'bg-primary'} px-4 py-2 sm:px-8 sm:py-4 rounded text-black font-bold text-xl flex justify-center items-center gap-4 ${props.darkNeumorphism ? styles.darkButtonNeumorphism : styles.buttonNeumorphism} ${props.backgroundColor}`} disabled={props.disabled}>
                {props.buttonText}
                {props.arrow && renderArrow()}
            </button>
        )
    }

    return (
        props.linkHref ?
        <Link href={props.linkHref}>
            <a>
                {props.neumorphism ? renderNeumorphismButton() : renderButton()}
            </a>
        </Link> :
        props.neumorphism ? renderNeumorphismButton() : renderButton()
    );
};
export default Button;
