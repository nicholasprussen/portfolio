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
import rxjs from "public/images/superpowers/rxjs.png";
import aggrid from "public/images/superpowers/ag-grid.png";
import flask from "public/images/superpowers/flask.png";
import sqlalchemy from "public/images/superpowers/sqlalchemy.png";
import mongodb from "public/images/superpowers/mongodb.png";
import postgresql from "public/images/superpowers/postgresql.png";
import snowflake from "public/images/superpowers/snowflake.png";
import cosmosdb from "public/images/superpowers/cosmosdb.png";
import docker from "public/images/superpowers/docker.webp";
import php from "public/images/superpowers/php.png";

import { PageContext, WindowContext } from '../../../pages/_app';

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
    image: html,
    text: "HTML/CSS",
    alt: "html logo",
    level: "Expert"
  },
  {
    image: javascript,
    text: "JavaScript",
    alt: "javascript logo",
    level: "Expert"
  },
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
    image: rxjs,
    text: "RxJS",
    alt: "rxjs logo",
    level: "Advanced"
  },
  {
    image: mongodb,
    text: "MongoDB",
    alt: "mongodb logo",
    level: "Advanced"
  },
  {
    image: postgresql,
    text: "PostgreSQL",
    alt: "postgresql logo",
    level: "Advanced"
  },
  {
    image: docker,
    text: "Docker",
    alt: "docker logo",
    level: "Intermediate"
  },
  {
    image: snowflake,
    text: "Snowflake",
    alt: "snowflake logo",
    level: "Intermediate"
  },
  {
    image: cosmosdb,
    text: "Azure CosmosDB",
    alt: "cosmosdb logo",
    level: "Intermediate"
  },
  {
    image: flask,
    text: "Flask",
    alt: "flask logo",
    level: "Intermediate"
  },
  {
    image: php,
    text: "PHP",
    alt: "php logo",
    level: "Intermediate"
  },
  {
    image: aggrid,
    text: "AG Grid",
    alt: "ag grid logo",
    level: "Intermediate"
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
    image: sqlalchemy,
    text: "SQLAlchemy",
    alt: "sqlalchemy logo",
    level: "Beginner"
  },
];

const Superpowers = (props: ISuperpowersProps) => {
    const containerRef = useRef(null);
    const superpowerScrollRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [ entry ] = entries;
            if (entry.isIntersecting)
                setIsVisible(entry.isIntersecting);
        }, options);
        if (superpowerScrollRef.current) observer.observe(superpowerScrollRef.current);

        return () => {
            if (superpowerScrollRef.current) observer.unobserve(superpowerScrollRef.current);
        }
    }, [containerRef])

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
            let gridColumEnd = index % 2 === 0 ? 2 : 3;
            let gridColumnStart = index % 2 === 0 ? 1 : 2;
            return (
                <div className='relative h-[5rem] w-full mb-2' style={{gridColumnStart: gridColumnStart, gridColumnEnd: gridColumEnd}} key={index}>
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
        <div className={`${styles.superpowerContainer} md:max-w-5xl xl:max-w-7xl mx-auto`}>
            <div className={`${styles.title} md:text-6xl`}>
                Superpowers
            </div>
            <div className={styles.cardContainer} ref={superpowerScrollRef}>
                {renderSuperpowers()}
            </div>
        </div>
    );
};
export default Superpowers;