import type { NextPage } from 'next'
import styles from "./Home.module.scss";
import Image, { StaticImageData } from 'next/image';
import { useContext, useEffect, useRef, useState } from 'react';
import { HeaderContext, WindowContext } from './_app';
import { faLinkedin, faInstagram, faTwitter, faGithub, IconDefinition } from "@fortawesome/free-brands-svg-icons";

import headerBackground from "../public/images/home/header/header-background.jpg";

//Slideshow images
import angular from "../public/images/superpowers/angular.png";
import bootstrap from "../public/images/superpowers/bootstrap.png";
import javascript from "../public/images/superpowers/javascript.png";
import net from "../public/images/superpowers/net.png";
import nextjs from "../public/images/superpowers/nextjs.jpg";
import python from "../public/images/superpowers/python.png";
import react from "../public/images/superpowers/react.png";
import sass from "../public/images/superpowers/sass.webp";
import tailwind from "../public/images/superpowers/tailwind.png";
import typescript from "../public/images/superpowers/typescript.png";
import html from "../public/images/superpowers/html.png";
import css from "../public/images/superpowers/css.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Button } from '../components';

interface SkillsetImage {
  /** Static image data for this image */
  image: StaticImageData,
  /** Text to be displayed below the image */
  text: string,
  /** Alt text to display for accessibility */
  alt: string
}

/** All skillset images */
const images: SkillsetImage[] = [
  {
    image: angular,
    text: "Angular",
    alt: "angular logo"
  },
  {
    image: react,
    text: "ReactJS",
    alt: "react logo"
  },
  {
    image: nextjs,
    text: "NextJS",
    alt: "nextjs logo"
  },
  {
    image: javascript,
    text: "JavaScript",
    alt: "javascript logo"
  },
  {
    image: bootstrap,
    text: "Bootstrap",
    alt: "bootstrap logo"
  },
  {
    image: net,
    text: ".NET Core",
    alt: ".net core logo"
  },
  {
    image: python,
    text: "Python",
    alt: "python logo"
  },
  {
    image: sass,
    text: "Sass",
    alt: "sass logo"
  },
  {
    image: tailwind,
    text: "TailwindCSS",
    alt: "tailwind css logo"
  },
  {
    image: typescript,
    text: "TypeScript",
    alt: "typescript logo"
  },
  {
    image: html,
    text: "HTML",
    alt: "html logo"
  },
  {
    image: css,
    text: "CSS",
    alt: "css logo"
  }
];

interface ISocialLink {
  icon: IconDefinition,
  href: string
}

const socialLinks: ISocialLink[] = [
  {
    icon: faInstagram,
    href: "https://www.instagram.com/nick.prussen/",
  },
  {
    icon: faTwitter,
    href: "https://twitter.com/Nickprussen"
  },
  {
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/nicholas-prussen/"
  },
  {
    icon: faGithub,
    href: "https://github.com/nicholasprussen"
  }
]

interface IProjectCard {
  image: StaticImageData,
  title: string,
  description: string
}

const projectCards: IProjectCard[] = [
  {
    image: headerBackground,
    title: "Title",
    description: "Description"
  },
  {
    image: headerBackground,
    title: "Title",
    description: "Description"
  },
  {
    image: headerBackground,
    title: "Title",
    description: "Description"
  },
  {
    image: headerBackground,
    title: "Title",
    description: "Description"
  },
]

const Home: NextPage = () => {
  /** State */
  const [sliderCount, setSliderCount] = useState(0);
  const [sliderOffset, setSliderOffset] = useState<number>(0);
  const [sliderEnd, setSliderEnd] = useState<number>(9999);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { dimensions } = useContext(WindowContext);
  const { headerHeight } = useContext(HeaderContext);
  const [previousWidth, setPreviousWidth] = useState(0);
  const superPowersRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  /** Hardcoded image size */
  const imageSize = 128;

  /** Image Container Size, set to be some divisible amount of the smallest container (256px) */
  const imageContainer = imageSize * 2;

  /** Slideshow delay */
  const slideShowDelay = 3000;

  /** Slider track width */
  const sliderTrackWidth = images.length * imageContainer;


  /** UseEffects */
  useEffect(() => {
    //Initial run, wait three seconds and then start the slideshow
    if (sliderCount === 0) {
      setTimeout(() => {
        setSliderCount(1);
      }, slideShowDelay);
      return;
    }

    //Increase the offset of the sliderTrack to show the next image
    setSliderOffset(sliderOffset - imageContainer);
  }, [sliderCount])

  useEffect(() => {
    //If we've reached the end, reset the offset
    if (sliderOffset <= sliderEnd) {
      setTimeout(() => {
        setSliderOffset(0);
      }, slideShowDelay / 2)
    }
    //Wait 3 seconds, then increment the slider count
    setTimeout(() => {
      setSliderCount(sliderCount + 1);
    }, slideShowDelay)
  }, [sliderOffset])

  useEffect(() => {
    //Get slider size to determine stopping point
    setNewSliderEnd();

    //Start the counter
    if (sliderOffset === 0)
      setSliderCount(0);
  }, [])

  useEffect(() => {
    setNewSliderEnd();
  }, [dimensions])

  const setNewSliderEnd = () => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current?.clientWidth;
      const lastValidPosition = -(sliderTrackWidth - sliderWidth);
      setSliderEnd(lastValidPosition);
    }
  }

  /** Render images into the sliderTrack */
  const renderImages = () => {
    let index = 0;
    return images.map(image => {
      return (
        <div className='inline-flex items-center justify-center text-center' style={{width: `${imageContainer}px`}} key={index++}>
          <div className={`w-48 px-4 py-8 rounded-lg bg-dark-accent ${styles.sliderCard}`}>
            <Image alt={image.alt} src={image.image} width={imageSize} height={imageSize}></Image>
            <p className={`text-lg font-bold`}>{image.text}</p>
          </div>
        </div>
      )
    })
  }

  const mapSocialLinks = () => {
    let index = 0;
    return socialLinks.map(link => {
      return (
        <Link href={link.href} key={index++}>
          <a>
            <FontAwesomeIcon icon={link.icon}></FontAwesomeIcon>
          </a>
        </Link>
      );
    });
  }

  const mapProjectCards = () => {
    let index = 0;
    return projectCards.map(project => {
      return (
        <div className={styles.projectCard} key={index++}>
          <Image src={project.image} width={256} height={256} layout={'responsive'}></Image>
          <div className={styles.projectCardTitle}>{project.title}</div>
          <div className={styles.projectCardDescription}>{project.description}</div>
        </div>
      );
    });
  }

  const scrollToSuperpowers = () => {
    console.log("scrolling")
    if (superPowersRef.current)
      superPowersRef.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className={styles.homePage}>
      <div className='fixed bottom-8 right-8 z-50'>
        <Button buttonText="" arrow='up' onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}} backgroundColor={'bg-dark'} neumorphism darkNeumorphism></Button>
      </div>
      <section className={styles.topSection} style={{height: dimensions.height - headerHeight}}>
        <div className='flex flex-col h-full w-full justify-center pb-96 items-center'>
          <h1 className={`text-2xl 2xs:text-[2em] xs:text-[3em] sm:text-[3.5em] md:text-[4em] lg:text-[5em] font-bold mt-20 ${styles.lineHeightNormal} ${styles.headingTextShadow}`}>
            {"Hi, I'm Nicholas"}
          </h1>
          <p className={`text-[1em] md:text-[1.4em] font-serif font-bold ${styles.firstSectionText}`}>
            <span className='text-primary'>Boise</span> based <span className='text-primary'>Full Stack Developer</span>, with a <span className='text-primary'>Bachelors of Science</span> in <span className='text-primary'>Computer Science</span>. Currently working at <span className='text-primary'>Micron Technology</span>.
          </p>
          <div className={`flex gap-8 text-[1.8em] xs:text-[2em] lg:text-[2.5em] p-4 ${styles.socialLinks}`}>
            {mapSocialLinks()}
          </div>
          <div className='mt-12'>
            <Button buttonText='Nice to meet you! So, what do you know?' onClick={() => {scrollToSuperpowers()}} arrow={'down'} backgroundColor={'bg-dark'} neumorphism darkNeumorphism></Button>
          </div>
        </div>
      </section>
      <section className='w-full h-screen py-10 lg:py-20 bg-dark-accent' ref={superPowersRef}>
        <div className='w-full container mx-auto lg:mb-20 lg:mt-12'>
          <h2 className={`text-2xl 2xs:text-[1.8em] xs:text-[2em] sm:text-[2.5em] md:text-[3em] lg:text-[4em] font-bold text-center mb-10 md:mb-24 ${styles.lineHeightNormal} ${styles.headingTextShadow}`}>
            My Superpowers
          </h2>
          <div className={`${styles.slider}`} ref={sliderRef}>
            <div className={`${styles.sliderTrack}`} style={{width: sliderTrackWidth, transform: `translateX(${sliderOffset}px)`}}>
              {renderImages()}
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center items-center lg:mb-20 mt-10'>
          <Button buttonText="Those are cool and all, but where's the experience?" onClick={() => {timelineRef.current?.scrollIntoView({behavior: 'smooth'})}} arrow={'down'} backgroundColor={'bg-dark-accent'} neumorphism></Button>
        </div>
      </section>
      <section className='w-full h-screen py-14 lg:py-28 px-4 relative flex flex-col justify-center' ref={timelineRef}>
        <h2 className={`text-2xl 2xs:text-[1.8em] xs:text-[2em] sm:text-[2.5em] md:text-[3em] lg:text-[4em] font-bold text-center lg:mb-24 ${styles.lineHeightNormal} ${styles.headingTextShadow}`}>
          My Timeline
        </h2>
        <div className='w-full sm:container mx-auto flex flex-wrap lg:flex-nowrap gap-8'>
          <codersrank-skills-chart  username="nicholasprussen"
                                    svg-width={768}
                                    svg-height={80}
                                    labels={dimensions.width > 512}
                                    branding={false}
                                    tooltip={true}
                                    legend={true}>
          </codersrank-skills-chart>
          <codersrank-activity  username="nicholasprussen"
                                labels={true}
                                legend={true}
                                tooltip={true}
                                branding={false}>
          </codersrank-activity>
        </div>
        <div className='w-full flex justify-center items-center lg:mb-8 mt-12'>
          <Button buttonText='Sweet! Where can I find some of your projects?' onClick={() => {projectsRef.current?.scrollIntoView({behavior: 'smooth'})}} arrow={'down'} backgroundColor={'bg-dark'} neumorphism darkNeumorphism></Button>
        </div>
      </section>
      <section className='w-full h-screen py-14 lg:py-28 px-4 relative flex flex-col gap-8 justify-center bg-dark-accent' ref={projectsRef}>
        <h2 className={`text-2xl 2xs:text-[1.8em] xs:text-[2em] sm:text-[2.5em] md:text-[3em] lg:text-[4em] font-bold text-center lg:mb-24 ${styles.lineHeightNormal} ${styles.headingTextShadow}`}>
          My Projects
        </h2>
        <div className={`w-full mx-auto gap-16 sm:container ${styles.cardContainer}`}>
          {mapProjectCards()}
        </div>
        <div className='w-full flex justify-center items-center lg:mb-8 mt-8 sm:mt-16'>
          <Button buttonText='Take me back chief!' onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}} arrow={'up'} backgroundColor={'bg-dark-accent'} neumorphism></Button>
        </div>
      </section>
    </div>
  )
}

export default Home
