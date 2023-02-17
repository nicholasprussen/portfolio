
import React, { useContext, useEffect, useRef, useState } from 'react';
import Button from '../../Button/Button';
import { IHomeCommon } from '../interfaces';
import styles from './Intro.module.scss';
import { faLinkedin, faInstagram, faTwitter, faGithub, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PageContext } from '../../../pages/_app';

export interface IIntroProps extends IHomeCommon {}

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

const intros = [
    "Nicholas",
    "Awesome",
    "Epic",
    "Insightful",
    "Diligent",
    "Reliable",
    "Motivated",
    "Organized",
    "Devoted",
    "Attentive",
    "Determined",
    "Persistent",
]

const Intro = (props: IIntroProps) => {
    const [introMessage, setIntroMessage] = useState("");
    const [typingStatus, setTypingStatus] = useState<'typing' | 'deleting'>('typing');
    const [chosenMessage, setChosenMessage] = useState("Nicholas");
    const { activePage, updatePage } = useContext(PageContext);

    useEffect(() => {
        // console.table([introMessage, typingStatus, chosenMessage]);
        const timeout = setTimeout(() => {
            if (typingStatus === 'typing' && introMessage !== chosenMessage) {
                setIntroMessage(chosenMessage.slice(0, introMessage.length + 1));
            }
            else if (introMessage === chosenMessage && typingStatus === "typing") {
                new Promise((resolve) => setTimeout(resolve, 4000)).then(() => {
                    setTypingStatus('deleting');
                })
            }
            else if ((chosenMessage === introMessage && typingStatus === "deleting") || typingStatus === "deleting") {
                if (introMessage.length <= 0) {
                    const randomIndex = Math.floor(Math.random()*intros.length);
                    if (intros[randomIndex] === chosenMessage) {
                        setChosenMessage(intros.find(intro => intro !== chosenMessage) || "Nicholas");
                    } else {
                        setChosenMessage(intros[randomIndex])
                    }
                } else {
                    setIntroMessage(chosenMessage.slice(0, introMessage.length - 1));
                }
            }
        }, 100);
        return () => clearTimeout(timeout);

        
        
    }, [introMessage, typingStatus])

    useEffect(() => {
        const changeWordTimeout = setTimeout(() => {
            setTypingStatus("typing");
        }, 1000)
        return () => clearTimeout(changeWordTimeout);
    }, [chosenMessage])

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

    return (
        <div className='w-full h-full max-h-full max-w-full'>
            <div className='h-[100%] w-full flex flex-col justify-center items-center'>
                <h1 className="text-4xl font-bold text-center relative">
                    {`Hi I'm ${introMessage}`}
                    <div className={styles.blinkingCursor}></div>
                </h1>
                <div className={`flex gap-8 text-[1.8em] xs:text-[2em] lg:text-[2.5em] p-4 ${styles.socialLinks}`}>
                    {mapSocialLinks()}
                </div>
            </div>
            {/* <div className='h-[20%] w-full flex justify-center'>
                <Button 
                    buttonText='Hi Nicholas! Can you tell me a bit about yourself?'
                    onClick={() => {updatePage('About Me')}}
                    arrow={'down'}
                    backgroundColor={'bg-dark'}>
                </Button>
            </div> */}
        </div>
    );
};
export default Intro;

{/* <div className='flex flex-col h-full w-full justify-center gap-[20%] items-center'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className={`text-2xl 2xs:text-[2em] xs:text-[3em] sm:text-[3.5em] md:text-[4em] lg:text-[5em] font-bold ${styles.lineHeightNormal} ${styles.headingTextShadow}`}>
                    {"Hi, I'm Nicholas"}
                </h1>
                <p className={`text-[1em] md:text-[1.4em] font-serif font-bold ${styles.firstSectionText}`}>
                    <span className='text-primary'>Boise</span> based <span className='text-primary'>Full Stack Developer</span>, with a <span className='text-primary'>Bachelors of Science</span> in <span className='text-primary'>Computer Science</span>. Currently working at <span className='text-primary'>Micron Technology</span>.
                </p>
                <div className={`flex gap-8 text-[1.8em] xs:text-[2em] lg:text-[2.5em] p-4 ${styles.socialLinks}`}>
                    {mapSocialLinks()}
                </div>
            </div>
            <div className=''>
                <Button buttonText='Hi Nicholas! Can you tell me a bit about yourself?' onClick={() => {aboutRef.current?.scrollIntoView({behavior: 'smooth'})}} arrow={'down'} backgroundColor={'bg-dark'}></Button>
            </div>
        </div> */}