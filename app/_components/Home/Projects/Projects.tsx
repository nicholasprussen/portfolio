
import React, { useContext, useEffect, useRef, useState } from 'react';
import { IHomeCommon } from '../interfaces';
import styles from "./Projects.module.scss";
import { SiteDataContext } from '../../../layout';

export interface IProjectsProps extends IHomeCommon {}

export interface IProjectCard {
    image?: string,
    title: string,
    shortDescription?: string,
    description?: string,
    alt: string,
    href?: string,
}

const Projects = (props: IProjectsProps) => {
    const siteData = useContext(SiteDataContext);
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.25
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [ entry ] = entries;
            if (entry.isIntersecting)
                setIsVisible(entry.isIntersecting);
        }, options);
        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        }
    }, [containerRef])

    const renderProjects = () => {
        return siteData.projects.cards.map((project, idx) => {
            return (
                <div className="w-full h-full relative col-span-full row-span-2 md:col-span-1 md:row-span-4" key={idx}>
                    <div className={`${styles.animationContainer} ${idx % 2 === 0 ? styles.startLeft : styles.startRight} relative overflow-hidden`} style={{transitionDelay: `${idx}00ms`}} data-active={isVisible}>
                        <div className={`${styles.cardOverlay} absolute top-0 left-0 w-full h-full p-2 z-[50]`}>
                            {
                                project?.href ?
                                <a href={project?.href} target="_blank" rel="noreferrer" className="font-bold text-lg text-primary underline">
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
        <div className='w-full h-full max-h-full max-w-full md:max-w-5xl xl:max-w-7xl mx-auto' ref={containerRef}>
            <div className={`h-full max-h-full w-full relative px-4 ${styles.projectsContainer}`}>
                <div className={`text-5xl md:text-6xl font-bold text-center col-span-full row-span-1 mb-4`}>
                    {siteData.projects.title}
                </div>
                <div className={`${styles.projectsContainer} gap-4 relative col-span-full row-start-2 row-end-[8]`}>
                    {renderProjects()}
                </div>
            </div>
        </div>
    );
};
export default Projects;