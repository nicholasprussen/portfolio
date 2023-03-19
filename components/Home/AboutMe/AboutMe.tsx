import React, { useContext, useEffect, useRef, useState } from 'react';
import Button from '../../Button/Button';
import { IHomeCommon } from '../interfaces';
import styles from './AboutMe.module.scss';
import Image from "next/image";
import headshot from "public/images/home/headshot2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraAlt, faCampground, faGamepad, faHamburger, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { PageContext, WindowContext } from '../../../pages/_app';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

export interface IAboutMeProps extends IHomeCommon {}

const AboutMe = (props: IAboutMeProps) => {

    const headshotContainerRef = useRef(null);
    const hobbiesContainerRef = useRef(null);
    const locatedContainerRef = useRef(null);
    const employedContainerRef = useRef(null);
    const schoolContainerRef = useRef(null);

    const [headshotIsVisible, setHeadshotIsVisible] = useState(false);
    const [hobbiesIsVisible, setHobbiesIsVisible] = useState(false);
    const [locatedIsVisible, setLocatedIsVisible] = useState(false);
    const [employedIsVisible, setEmployedIsVisible] = useState(false);
    const [schoolIsVisible, setSchoolIsVisible] = useState(false);

    const {dimensions} = useContext(WindowContext);

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.25
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [ entry ] = entries;
            if (entry.isIntersecting)
                setHeadshotIsVisible(entry.isIntersecting);
        }, options);
        if (headshotContainerRef.current) observer.observe(headshotContainerRef.current);

        return () => {
            if (headshotContainerRef.current) observer.unobserve(headshotContainerRef.current);
        }
    }, [headshotContainerRef])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [ entry ] = entries;
            if (entry.isIntersecting)
                setHobbiesIsVisible(entry.isIntersecting);
        }, options);
        if (hobbiesContainerRef.current) observer.observe(hobbiesContainerRef.current);

        return () => {
            if (hobbiesContainerRef.current) observer.unobserve(hobbiesContainerRef.current);
        }
    }, [hobbiesContainerRef])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [ entry ] = entries;
            if (entry.isIntersecting)
                setLocatedIsVisible(entry.isIntersecting);
        }, options);
        if (locatedContainerRef.current) observer.observe(locatedContainerRef.current);

        return () => {
            if (locatedContainerRef.current) observer.unobserve(locatedContainerRef.current);
        }
    }, [locatedContainerRef])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [ entry ] = entries;
            if (entry.isIntersecting)
                setEmployedIsVisible(entry.isIntersecting);
        }, options);
        if (employedContainerRef.current) observer.observe(employedContainerRef.current);

        return () => {
            if (employedContainerRef.current) observer.unobserve(employedContainerRef.current);
        }
    }, [employedContainerRef])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [ entry ] = entries;
            if (entry.isIntersecting)
                setSchoolIsVisible(entry.isIntersecting);
        }, options);
        if (schoolContainerRef.current) observer.observe(schoolContainerRef.current);

        return () => {
            if (schoolContainerRef.current) observer.unobserve(schoolContainerRef.current);
        }
    }, [schoolContainerRef])

    const getIconSize = (): SizeProp => {
        if (dimensions.width < 512) {
            return "2x";
        }
        else if (dimensions.width < 768) {
            return "3x";
        }
        else if (dimensions.width < 1536) {
            return "4x";
        }
        return "4x";
    }

    return (
        <div className='w-full h-full max-h-full max-w-full'>
            <div className='h-full max-h-3/4 w-full flex flex-col py-2 items-center overflow-hidden'>
                <div className='flex-grow grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-2 w-full px-4 max-h-full md:max-w-5xl xl:max-w-7xl'>
                    <div className={`text-5xl md:text-6xl font-bold text-center col-span-full row-span-1 mb-2`}>
                        About Me
                    </div>
                    <div className='row-start-2 row-end-6 col-start-1 col-end-6 h-full w-full relative' ref={headshotContainerRef}>
                        <div className={`${styles.animationContainer} ${styles.startLeft}`} data-active={headshotIsVisible}>
                            <img src="images/home/headshot2.jpg" className='rounded-lg max-w-full max-h-full w-full h-full object-cover'></img>
                        </div>
                    </div>
                    <div className='row-start-2 row-end-4 col-start-6 col-end-9 h-full w-full relative' ref={hobbiesContainerRef}>
                        <div className={`${styles.animationContainer} ${styles.startRight} bg-dark p-2`} data-active={hobbiesIsVisible}>
                            <div className='mx-auto h-full grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr_1fr] w-[90%]'>
                                <div className='flex col-span-2 justify-center items-center'>
                                    <p className='text-xl text-center xs:text-3xl md:text-4xl'><b>Hobbies</b></p>
                                </div>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <FontAwesomeIcon icon={faCameraAlt} size={getIconSize()}></FontAwesomeIcon>
                                </div>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <FontAwesomeIcon icon={faCampground} size={getIconSize()}></FontAwesomeIcon>
                                </div>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <FontAwesomeIcon icon={faGamepad} size={getIconSize()}></FontAwesomeIcon>
                                </div>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <FontAwesomeIcon icon={faHamburger} size={getIconSize()}></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row-span-2 col-span-3 relative' ref={locatedContainerRef}>
                        <div className={`${styles.animationContainer} ${styles.startRight} ${styles.mapBackground} delay-200 bg-dark flex flex-col items-center justify-center text-xl relative`} data-active={locatedIsVisible}>
                            {/* <p className='text-center'>Located in</p> */}
                            <div className='absolute top-0 right-0 w-full h-full bg-dark-accent opacity-[85%] z-30 rounded-lg'></div>
                            <FontAwesomeIcon icon={faMapLocationDot} size={getIconSize()} className="z-40"></FontAwesomeIcon>
                            <p className='text-center z-40 xs:text-3xl md:text-4xl'><b>Boise, ID</b></p>
                        </div>
                    </div>
                    <div className='row-span-1 col-span-8 relative' ref={schoolContainerRef}>
                        <div className={`${styles.animationContainer} ${styles.startLeft} delay-[400ms] bg-dark flex justify-between items-center p-2 xs:p-4 gap-4 text-xl xs:text-2xl`} data-active={schoolIsVisible}>
                            <div className={`absolute top-0 right-0 w-full h-full z-40 rounded-lg hidden xs:block ${styles.collegeSection}`}></div>
                            <div className='z-30'>
                                <p><b>Boise State University</b></p>
                                <div><p className='pr-1 inline'>&#x2022;</p><b>Bachelor&lsquo;s</b> in <b>Computer Science</b></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-start-1 col-end-9 row-start-7 row-span-1 h-full w-full relative' ref={employedContainerRef}>
                        <div className={`${styles.animationContainer} ${styles.startRight} delay-300 bg-dark p-2 xs:p-4 text-xl xs:text-2xl flex items-center xs:justify-between`} data-active={employedIsVisible}>
                            <div className={`absolute top-0 right-0 w-full h-full z-40 rounded-lg hidden xs:block ${styles.employeeSection}`}></div>
                            <div className='z-30'>
                                <p><b>Micron Technology Inc</b></p>
                                <div><p className='pr-1 inline'>&#x2022;</p><b>Software Developer</b> for <b>GQIT</b></div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AboutMe;