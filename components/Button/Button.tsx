import Link from 'next/link';
import React, { useContext } from 'react';
import styles from './Button.module.scss';
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from '../../pages/_app';

export interface IButtonProps {
    buttonText: string,
    onClick(): any,
    linkHref?: string,
    arrow?: 'up' | 'down' | 'left' | 'right',
    disabled?: boolean,
    backgroundColor?: string,
    containerClassName?: string
}

const Button = (props: IButtonProps) => {

    const { theme } = useContext(ThemeContext);

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
            <button onClick={() => props.onClick?.()} className={`px-4 py-2 sm:px-8 sm:py-4 rounded text-black font-bold text-ms lg:text-xl max-w-[275px] sm:max-w-none flex justify-center items-center gap-4 ${styles.button}`} disabled={props.disabled}>
                {props.buttonText}
                {props.arrow && renderArrow()}
            </button>
        )
    }

    return (
        <div className={`${styles.buttonContainer} ${props.containerClassName}`} data-theme={theme}>
            {
                props.linkHref ?
                <Link href={props.linkHref}>
                    <a>
                        {renderButton()}
                    </a>
                </Link> :
                renderButton()
            }
        </div>
    );
};
export default Button;
