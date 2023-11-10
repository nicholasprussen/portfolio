
import React, { useContext, useEffect, useState } from 'react';
import { IHomeCommon } from '../interfaces';
import styles from './Intro.module.scss';
import { faLinkedin, faInstagram, faTwitter, faGithub, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SiteDataContext } from '../../../pages/_app';

export interface IIntroProps extends IHomeCommon {}

export interface ISocialLink {
    icon: IconDefinition,
    href: string
}

const Intro = (props: IIntroProps) => {
    const siteData = useContext(SiteDataContext);

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
                    const randomIndex = Math.floor(Math.random()*siteData.intro.attributes.length);
                    if (siteData.intro.attributes[randomIndex] === chosenMessage) {
                        setChosenMessage(siteData.intro.attributes.find(intro => intro !== chosenMessage) || "Nicholas");
                    } else {
                        setChosenMessage(siteData.intro.attributes[randomIndex])
                    }
                } else {
                    setIntroMessage(chosenMessage.slice(0, introMessage.length - 1));
                }
            }
        }, typingStatus === "deleting" ? 100 : 150);
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
        return siteData.intro.socialLinks.map(link => {
            return (
            <Link href={link.href} key={index++}>
                <FontAwesomeIcon icon={link.icon}></FontAwesomeIcon>
            </Link>
            );
        });
    }

    return (
        <div className='w-full h-full max-h-full max-w-full'>
            <div className='h-[100%] w-full flex flex-col justify-center items-center'>
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-center relative">
                    <span className='pr-[0.5ch] font-normal'>Hi I'm</span><span>{introMessage}</span>
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