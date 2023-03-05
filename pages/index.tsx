import type { NextPage } from 'next'
import styles from "./Home.module.scss";
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { HeaderContext, ThemeContext, WindowContext } from './_app';

//Slideshow images
import Intro from '../components/Home/Intro/Intro';
import AboutMe from '../components/Home/AboutMe/AboutMe';
import Superpowers from '../components/Home/Superpowers/Superpowers';
import Projects from '../components/Home/Projects/Projects';

const Home: NextPage = () => {
  /** State */
  const { dimensions } = useContext(WindowContext);
  const { headerCollapsedHeight, headerHeight } = useContext(HeaderContext);
  const { theme, updateTheme } = useContext(ThemeContext);

  const introRef = useRef<HTMLDivElement>(null);
  const superPowersRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const getTopSectionHeight = () => {
    if (dimensions.width < 1024)
        return dimensions.height - headerCollapsedHeight;
    return dimensions.height - headerHeight;
  }

  useEffect(() => {
    // document.body.style.overflow = 'hidden';
  }, []);

  return (
    <div className={styles.homePage} data-theme={theme}>
        {/* <div style={{height: dimensions.height - getTopSectionHeight()}}></div> */}
        <section className={styles.topSection} style={{height: '100lvh'}} ref={introRef}>
            <Intro />
        </section>
        <section className='w-full flex flex-col justify-center items-center' ref={aboutRef} style={{height: '100lvh'}}>
            <div style={{height: dimensions.height - getTopSectionHeight()}}></div>
            <div className='flex-grow w-full'>
                <AboutMe />
            </div>
        </section>
        <section className='w-full bg-dark flex flex-col overflow-hidden' style={{height: '100lvh'}}>
            <div style={{height: dimensions.height - getTopSectionHeight()}} ref={superPowersRef}></div>
            <div className='w-full flex-grow' style={{maxHeight: getTopSectionHeight()}}>
                <Superpowers />
            </div>
        </section>
        <section className='w-full flex flex-col' ref={projectsRef} style={{height: '100lvh'}}>
            <div style={{height: dimensions.height - getTopSectionHeight()}}></div>
            <div className='w-full flex-grow'>
                <Projects />
            </div>
        </section>
    </div>
  )
}

export default Home
