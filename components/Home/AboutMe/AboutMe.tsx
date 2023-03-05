import React, { useContext, useEffect, useRef, useState } from 'react';
import Button from '../../Button/Button';
import { IHomeCommon } from '../interfaces';
import styles from './AboutMe.module.scss';
import Image from "next/image";
import headshot from "public/images/home/headshot2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraAlt, faCampground, faGamepad, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { PageContext } from '../../../pages/_app';

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

    return (
        <div className='w-full h-full max-h-full max-w-full'>
            <div className='h-[100%] max-h-3/4 w-full flex flex-col py-2 items-center overflow-hidden'>
                <div className='flex-grow grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-2 w-full px-4 max-h-full'>
                    <div className={`text-5xl font-bold text-center col-span-full row-span-1 mb-2`}>
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
                                    <p className='text-xl text-center'><b>Hobbies</b></p>
                                </div>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <FontAwesomeIcon icon={faCameraAlt} size={"xl"}></FontAwesomeIcon>
                                </div>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <FontAwesomeIcon icon={faCampground} size={"xl"}></FontAwesomeIcon>
                                </div>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <FontAwesomeIcon icon={faGamepad} size={"xl"}></FontAwesomeIcon>
                                </div>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <FontAwesomeIcon icon={faHamburger} size={"xl"}></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row-span-2 col-span-3 relative' ref={locatedContainerRef}>
                        <div className={`${styles.animationContainer} ${styles.startRight} delay-200 bg-dark flex flex-col items-center justify-center`} data-active={locatedIsVisible}>
                            <p className='text-center'>Located in</p>
                            <p className='text-center'><b>Boise, ID</b></p>
                        </div>
                    </div>
                    <div className='col-start-1 col-end-9 row-start-6 row-end-7 h-full w-full relative' ref={employedContainerRef}>
                        <div className={`${styles.animationContainer} ${styles.startBottom} delay-300 bg-dark flex justify-center items-center gap-4`} data-active={employedIsVisible}>
                            <img src="images/home/aboutme/micron-logo.png" className='max-w-[30px] max-h-[28px]'></img>
                            <p className='text-center'>Employed at <b>Micron Technology Inc.</b></p>
                        </div>
                    </div>
                    <div className='row-span-2 col-span-8 relative' ref={schoolContainerRef}>
                        <div className={`${styles.animationContainer} ${styles.startBottom} delay-[400ms] bg-dark flex justify-between items-center p-4`} data-active={schoolIsVisible}>
                            <img src={"images/home/aboutme/boise-state-logo.png"} className={'max-w-[70px] max-h-[70px]'}></img>
                            <div>
                                <p><b>Boise State University</b></p>
                                <p><b>Bachelor&quot;s</b> in <b>Computer Science</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='h-[20%] w-full flex justify-center relative'>
                <div className='absolute bottom-4 right-4'>
                    <Button buttonText="" arrow='up' containerClassName='ml-auto' onClick={() => updatePage('Intro')}></Button>
                </div>
                <Button 
                    buttonText='Nice to meet you! So... what skills do you have?'
                    onClick={() => updatePage('Superpowers')}
                    arrow={'down'}
                    backgroundColor={'bg-dark'}>
                </Button>
            </div> */}
        </div>
    );
};
export default AboutMe;

{/* <div className='w-full container mx-auto flex gap-4 md:gap-24 flex-col'>
            <h2 className={`text-2xl 2xs:text-[1.8em] xs:text-[2em] sm:text-[2.5em] md:text-[3em] lg:text-[4em] font-bold text-center ${styles.lineHeightNormal} ${styles.headingTextShadow}`}>
                About Me
            </h2>
        </div>
        <div className={`md:grid md:grid-cols-[1fr_3fr] lg:max-w-6xl md:max-w-4xl sm:max-w-3xl lg:gap-8 md:gap-4 gap-2 px-2 justify-around items-center flex flex-col md:text-left text-center`}>
            <div className='flex justify-center lg:h-64 lg:w-64 md:w-48 md:h-48 w-56 h-56 relative'>
                <NextImage src={headshot} layout={'fill'} className={"rounded-xl"}></NextImage>
            </div>
            <p className='md:text-lg lg:text-xl sm:text-xl text-lg'>
                My name is Nicholas Prussen. I recently graduated from <b>Boise State University</b> with a <b>Bachelors</b> in <b>Computer Science</b>.
                I'm currently employed as a <b>Software Engineer</b> at <b>Micron Technology Inc.</b> My main focus is <b>Web Development</b> and I'm always working
                on a side project in my spare time (<a target={'_blank'} href="">like this portfolio!</a>). I also enjoy playing my fair share of video games and am an avid
                connoisseur of food that isn't good for me. Check out my <Link href={"/about"}>About Me</Link> page to learn even more about me.
            </p>
        </div>
        <div className='w-full flex justify-center items-center mb-24'>
            <Button buttonText='Nice to meet you! So... what do you know?' onClick={() => {scrollToSuperpowers()}} arrow={'down'} backgroundColor={'bg-dark'}></Button>
        </div> */}