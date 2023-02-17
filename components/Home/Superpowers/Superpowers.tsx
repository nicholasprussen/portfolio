import React, { useContext, useEffect, useRef, useState } from 'react';
import Button from '../../Button/Button';
import { IHomeCommon } from '../interfaces';
import styles from './Superpowers.module.scss';
import NextImage, { StaticImageData } from "next/image";

export interface ISuperpowersProps extends IHomeCommon {}

//Slideshow images
import angular from "public/images/superpowers/angular.png";
import bootstrap from "public/images/superpowers/bootstrap.png";
import javascript from "public/images/superpowers/javascript.png";
import net from "public/images/superpowers/net.png";
import nextjs from "public/images/superpowers/nextjs.jpg";
import python from "public/images/superpowers/python.png";
import react from "public/images/superpowers/react.png";
import sass from "public/images/superpowers/sass.webp";
import tailwind from "public/images/superpowers/tailwind.png";
import typescript from "public/images/superpowers/typescript.png";
import html from "public/images/superpowers/html.png";
import css from "public/images/superpowers/css.png";
import { PageContext } from '../../../pages/_app';

interface SkillsetImage {
  /** Static image data for this image */
  image: StaticImageData,
  /** Text to be displayed below the image */
  text: string,
  /** Alt text to display for accessibility */
  alt: string,
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
}

/** All skillset images */
const images: SkillsetImage[] = [
  {
    image: angular,
    text: "Angular",
    alt: "angular logo",
    level: 'Advanced'
  },
  {
    image: react,
    text: "ReactJS",
    alt: "react logo",
    level: "Advanced"
  },
  {
    image: nextjs,
    text: "NextJS",
    alt: "nextjs logo",
    level: "Advanced"
  },
  {
    image: javascript,
    text: "JavaScript",
    alt: "javascript logo",
    level: "Expert"
  },
  {
    image: bootstrap,
    text: "Bootstrap",
    alt: "bootstrap logo",
    level: "Advanced"
  },
  {
    image: net,
    text: ".NET Core",
    alt: ".net core logo",
    level: "Advanced"
  },
  {
    image: python,
    text: "Python",
    alt: "python logo",
    level: "Intermediate"
  },
  {
    image: sass,
    text: "Sass",
    alt: "sass logo",
    level: "Intermediate"
  },
  {
    image: tailwind,
    text: "TailwindCSS",
    alt: "tailwind css logo",
    level: "Advanced"
  },
  {
    image: typescript,
    text: "TypeScript",
    alt: "typescript logo",
    level: "Advanced"
  },
  {
    image: html,
    text: "HTML/CSS",
    alt: "html logo",
    level: "Expert"
  },
];

const Superpowers = (props: ISuperpowersProps) => {
    const containerRef = useRef(null);
    const superpowerScrollRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [superpowerAppearance, setSuperpowerAppearance] = useState<"fancy" | "simple">("fancy");
    const { activePage, updatePage } = useContext(PageContext);

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [ entry ] = entries;
            setIsVisible(entry.isIntersecting);
        }, options);
        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        }
    }, [containerRef])

    useEffect(() => {
        if (!isVisible || !superpowerScrollRef) {
            return;
        }
        superpowerScrollRef?.current?.scrollTo({top: 0});
    }, [isVisible])

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
        return images.map(image => {
            index++;
            return (
                <div className='relative h-[5rem] w-full mb-2' key={index}>
                    <div className={`${styles.animationContainer} ${styles.startLeft}`} style={{transitionDelay: `${index}00ms`}} data-active={isVisible}>
                        <div className={`${styles.superpowerCard}`}>
                            <div className={styles.firstCol}>
                                <NextImage src={image.image} objectFit={'contain'}></NextImage>
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
        <>
            <div className='w-full h-full max-h-full max-w-full relative'>
                <div className='h-full max-h-full w-full flex flex-col justify-around items-center overflow-hidden' ref={containerRef}>
                    <div className='flex-grow w-full grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-2 max-h-full px-4 relative'>
                        <div className={`text-5xl font-bold text-center col-span-full row-span-1 mb-2`}>
                            Superpowers
                        </div>
                        <div className={`row-start-2 row-end-[11] col-span-full w-full h-full overflow-auto`} ref={superpowerScrollRef} id={"allow-scroll"}>
                            {renderSuperpowers()}
                            <div className={`h-[10vh]`}></div>
                        </div>
                    </div>
                    <div className={`${styles.bottomGradient} absolute h-[23%] w-full bottom-0`}></div>
                </div>
                <div className={`absolute h-[20%] w-full flex justify-center bottom-0`}>
                    <div className='absolute bottom-4 right-4'>
                        <Button buttonText="" arrow='up' containerClassName='ml-auto' onClick={() => updatePage('About Me')}></Button>
                    </div>
                    <Button 
                        buttonText="Those are cool and all, but where's the experience?"
                        onClick={() => updatePage('Projects')}
                        arrow={'down'}
                        backgroundColor={'bg-dark'}>
                    </Button>
                </div>
            </div>
        </>
    );
};
export default Superpowers;

{/* <div className='w-full container mx-auto flex gap-4 md:gap-24 flex-col'>
          <h2 className={`text-2xl 2xs:text-[1.8em] xs:text-[2em] sm:text-[2.5em] md:text-[3em] lg:text-[4em] font-bold text-center ${styles.lineHeightNormal} ${styles.headingTextShadow}`}>
            My Superpowers
          </h2>
          <div className={`${styles.slider}`} ref={sliderRef}>
            <div className={`${styles.sliderTrack}`} style={{width: sliderTrackWidth, transform: `translateX(${sliderOffset}px)`}}>
              {renderImages()}
            </div>
          </div>
          <p style={{"display": dimensions.width < 768 ? 'block' : 'none'}} className='text-center'>This scrolls automatically I promise...</p>
        </div> 
        <div className='w-full flex justify-center items-center mb-24'>
          <Button buttonText="Those are cool and all, but where's the experience?" onClick={() => {timelineRef.current?.scrollIntoView({behavior: 'smooth'})}} arrow={'down'} backgroundColor={'bg-dark-accent'}></Button>
        </div> */}