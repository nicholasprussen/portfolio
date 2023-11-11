'use client';

import styles from "./Home.module.scss";
import { useContext } from "react";
import { HeaderContext, WindowContext } from "./layout";
import Intro from "./_components/Home/Intro/Intro";
import AboutMe from "./_components/Home/AboutMe/AboutMe";
import Projects from "./_components/Home/Projects/Projects";
import Superpowers from "./_components/Home/Superpowers/Superpowers";

export default function Home() {
    const { dimensions } = useContext(WindowContext);
    const { headerCollapsedHeight, headerHeight } = useContext(HeaderContext);

    const getTopSectionHeight = () => {
        if (dimensions.width < 1024)
            return dimensions.height - headerCollapsedHeight;
        return dimensions.height - headerHeight;
    }

    return (
        <div className={styles.homePage}>
            <section className={`w-full ${styles.fullscreenHeight}`}>
                <Intro />
            </section>
            <section className={`${styles.aboutMe} ${styles.fullscreenHeight}`}>
                <div style={{ height: dimensions.height - getTopSectionHeight() }}></div>
                <div className='flex-grow w-full'>
                    <AboutMe />
                </div>
            </section>
            <section className={`${styles.superpowers} ${styles.fullscreenHeight}`}>
                <div style={{ height: dimensions.height - getTopSectionHeight() }}></div>
                <div className='w-full' style={{ height: dimensions.height - headerHeight }}>
                    <Superpowers />
                </div>
            </section>
            <section className={`w-full flex flex-col ${styles.fullscreenHeight}`}>
                <div style={{ height: dimensions.height - getTopSectionHeight() }}></div>
                <div className='w-full flex-grow'>
                    <Projects />
                </div>
            </section>
        </div>
    )
}