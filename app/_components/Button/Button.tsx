"use client";
import Link from 'next/link';
import React from 'react';
import styles from './Button.module.scss';
import { faAngleDown, faAngleLeft, faAngleRight, faAnglesUp, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IButtonProps {
    buttonText?: string,
    children?: string | React.ReactElement | React.ReactElement[],
    onClick(): any,
    linkHref?: string,
    arrow?: 'up' | 'down' | 'left' | 'right' | 'double-up',
    disabled?: boolean,
    backgroundColor?: string,
    containerClassName?: string,
    fontSize?: string,
    href?: string,
    downloadFileName?: string,
    smallPadding?: boolean
}

const Button = (props: IButtonProps) => {

    const renderArrow = () => {
        switch (props.arrow) {
            case 'up':
                return <FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon>
            case 'double-up':
                return <FontAwesomeIcon icon={faAnglesUp}></FontAwesomeIcon>
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
            props.href ? 
            <a  className={`${props.smallPadding ? 'px-4 py-2' : 'px-4 py-2 sm:px-8 sm:py-4'} rounded text-black font-bold ${props.fontSize ? props.fontSize : "text-ms lg:text-xl"} max-w-[275px] sm:max-w-none flex justify-center items-center gap-4 ${styles.button}`}
                href={props.href}
                download={props.downloadFileName}>
                {props.buttonText || props.children}
                {props.arrow && renderArrow()}
            </a>
            :
            <button onClick={() => props.onClick?.()}
                    className={`px-4 py-2 sm:px-8 sm:py-4 rounded text-black font-bold ${props.fontSize ? props.fontSize : "text-ms lg:text-xl"} max-w-[275px] sm:max-w-none flex justify-center items-center gap-4 ${styles.button}`}
                    disabled={props.disabled}>
                {props.buttonText || props.children}
                {props.arrow && renderArrow()}
            </button>
        )
    }

    return (
        <div className={`${styles.buttonContainer} ${props.containerClassName}`}>
            {
                props.linkHref ?
                <Link href={props.linkHref}>
                    {renderButton()}
                </Link> :
                renderButton()
            }
        </div>
    );
};
export default Button;
