
import React, { useContext, useEffect, useState } from 'react';
import { IHomeCommon } from '../interfaces';
import styles from './Intro.module.scss';
import { faLinkedin, faInstagram, faTwitter, faGithub, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

    useEffect(() => {
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
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-center relative">
                    {`Hi I'm ${introMessage}`}
                    <div className={styles.blinkingCursor}></div>
                </h1>
                <div className={`flex gap-8 text-[1.8em] xs:text-[2em] lg:text-[2.5em] p-4 ${styles.socialLinks}`}>
                    {mapSocialLinks()}
                </div>
            </div>
        </div>
    );
};
export default Intro;