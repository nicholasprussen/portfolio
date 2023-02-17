
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { PageContext } from '../../../pages/_app';
import Button from '../../Button/Button';
import { IHomeCommon } from '../interfaces';
import styles from "./Projects.module.scss";
import profilePic from "public/images/home/headshot2.jpg";

export interface IProjectsProps extends IHomeCommon {}

interface IProjectCard {
    image?: string,
    title: string,
    shortDescription?: string,
    description?: string,
    alt: string,
    href?: string,
}

const ProjectCards: IProjectCard[] = [
    {
        image: "images/home/projects/thegrind.jpg",
        title: "Camo Grind",
        shortDescription: "Helper for unlocking Guns/Camos in MWII (2022)",
        alt: "Screenshot of Camo Grind",
        href: "https://camo-grind.vercel.app/home"
    },
    {
        image: "images/home/projects/portfolio.jpg",
        title: "Portfolio",
        "shortDescription": "You're looking at it!",
        alt: "Screenshot of portfolio",
    },
    {
        image: "images/home/projects/amplyst.PNG",
        title: "Amplyst",
        shortDescription: "My first venture into a Full Stack application using React, Docker, Python, Flask, MongoDB",
        alt: "Screenshot of Amplyst",
        href: "https://github.com/scorchteam/amplyst"
    },
    {
        image: "images/home/projects/wumpusworld.png",
        title: "Wumpus World App",
        shortDescription: "First Android app recreating my CS121 Final Project",
        alt: "Screenshot of Wumpus World App",
        href: "https://github.com/scorchteam/com.scorchgames.wumpusworld"
    }
]

const Projects = (props: IProjectsProps) => {
    const containerRef = useRef(null);
    const { updatePage } = useContext(PageContext);
    const [isVisible, setIsVisible] = useState(false);

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

    const renderProjects = () => {
        return ProjectCards.map((project, idx) => {
            return (
                <div className="w-full h-full relative row-span-5">
                    <div className={`${styles.animationContainer} ${idx % 2 === 0 ? styles.startLeft : styles.startRight} relative overflow-hidden`} style={{transitionDelay: `${idx}00ms`}} data-active={isVisible}>
                        <div className={`${styles.cardOverlay} absolute top-0 left-0 w-full h-full p-2 z-[100]`}>
                            {
                                project?.href ?
                                <a href={project?.href} target="_blank" className="font-bold text-lg text-primary underline">
                                    {project.title}
                                </a> :
                                <p className='font-bold text-lg'>{project.title}</p>
                            }
                            <p>{project.shortDescription}</p>
                        </div>
                        <div className={`${styles.cardInner} w-full h-full p-4 bg-center bg-cover`} style={{backgroundImage: `url(${project.image})`}}>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className='w-full h-full max-h-full max-w-full' ref={containerRef}>
            <div className='h-[80%] max-h-3/4 w-full relative flex flex-col'>
                <div className={`text-5xl font-bold text-center col-span-full row-span-1 mb-2`}>
                    Projects
                </div>
                <div className={`${styles.projectsContainer} flex-grow p-2 grid grid-cols-2 grid-rows-11 gap-2 relative`}>
                    {renderProjects()}
                    <div className='col-span-full flex justify-center'>
                        <p className='text-lg text-primary font-bold underline opacity-50'>
                            Learn More (Coming Soon)
                        </p>
                    </div>
                </div>
            </div>
            <div className='h-[20%] w-full flex justify-center relative'>
                <div className='absolute bottom-4 right-4'>
                    <Button buttonText="" arrow='up' containerClassName='ml-auto' onClick={() => updatePage('Superpowers')}></Button>
                </div>
                <Button 
                    buttonText="I'm impressed! Can you take me to the top please?"
                    onClick={() => updatePage('Intro')}
                    arrow={'double-up'}
                    backgroundColor={'bg-dark'}>
                </Button>
            </div>
        </div>
    );
};
export default Projects;

{/* <section className='w-full h-fit lg:h-screen relative flex flex-col justify-center gap-16 md:gap-[5%] px-4 py-8' ref={projectsRef}>
        <div className='relative flex flex-col justify-center gap-8 md:gap-12'>
            <h2 className={`text-2xl 2xs:text-[1.8em] xs:text-[2em] sm:text-[2.5em] md:text-[3em] lg:text-[4em] font-bold text-center ${styles.lineHeightNormal} ${styles.headingTextShadow}`}>
                My Projects
            </h2>
            <div className={`w-full mx-auto gap-16 sm:container ${styles.cardContainer}`}>
                {mapProjectCards()}
            </div>
        </div>
        <div className='w-full flex justify-center items-center mt-6'>
          <Button buttonText='Take me back chief!' onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}} arrow={'up'} backgroundColor={'bg-dark-accent'}></Button>
        </div>
      </section> */}