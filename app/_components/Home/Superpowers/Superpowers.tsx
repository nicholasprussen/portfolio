import React, { useEffect, useRef, useState } from 'react';
import { IHomeCommon } from '../interfaces';
import styles from './Superpowers.module.scss';
import { StaticImageData } from "next/image";

export interface ISuperpowersProps extends IHomeCommon {}

//Slideshow images
import Image from 'next/image';
import { SiteData } from '../../../_data/information';

export interface SkillsetImage {
  /** Static image data for this image */
  image: StaticImageData,
  /** Text to be displayed below the image */
  text: string,
  /** Alt text to display for accessibility */
  alt: string,
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
}

const Superpowers = (props: ISuperpowersProps) => {
    const containerRef = useRef(null);
    const superpowerScrollRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [options] = useState<any>({
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    });

    useEffect(() => {
        let observerRefValue: HTMLDivElement;
        const observer = new IntersectionObserver((entries) => {
            const [ entry ] = entries;
            if (entry.isIntersecting)
                setIsVisible(entry.isIntersecting);
        }, options);
        if (superpowerScrollRef.current) {
            observer.observe(superpowerScrollRef.current);
            observerRefValue = superpowerScrollRef.current;
        }

        return () => {
            if (observerRefValue) observer.unobserve(observerRefValue);
        }
    }, [containerRef, options])

    const getWidth = (level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'): string => {
        switch (level) {
            case "Beginner":
                return "33%";
            case "Intermediate":
                return "60%";
            case "Advanced":
                return "80%";
            case "Expert":
                return "100%";
            default:
                return "w-0";
        }
    }

    const renderSuperpowers = () => {
        let index = -1;
        return SiteData.skills.skills.map(image => {
            index++;
            let gridColumEnd = index % 2 === 0 ? 2 : 3;
            let gridColumnStart = index % 2 === 0 ? 1 : 2;
            return (
                <div className='relative h-[5rem] w-full mb-2' style={{gridColumnStart: gridColumnStart, gridColumnEnd: gridColumEnd}} key={index}>
                    <div className={`${styles.animationContainer} ${styles.startLeft}`} style={{transitionDelay: `${index}00ms`}} data-active={isVisible}>
                        <div className={`${styles.superpowerCard}`}>
                            <div className={styles.firstCol} style={{position: 'relative'}}>
                                <Image fill src={image.image} style={{objectFit: 'contain'}} alt={image.alt}></Image>
                            </div>
                            <div className={styles.secondCol}>
                                <div className={styles.firstRow}>
                                    <p>{image.text}</p>
                                </div>
                                <div className={styles.secondRow}>
                                    <div className={`${styles.innerBar}`} style={{width: getWidth(image.level)}}>
                                        <p>{image.level}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            )
        })
    }

    return (
        <div className={`${styles.superpowerContainer} md:max-w-5xl xl:max-w-7xl mx-auto`}>
            <div className={`${styles.title} md:text-6xl`}>
                {SiteData.skills.title}
            </div>
            <div className={styles.cardContainer} ref={superpowerScrollRef}>
                {renderSuperpowers()}
            </div>
        </div>
    );
};
export default Superpowers;