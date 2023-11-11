import { IconDefinition, faCameraAlt, faCameraRetro, faCampground, faCopyright, faDownload, faGamepad, faHamburger, faHouse } from "@fortawesome/free-solid-svg-icons"
import { StaticImageData } from "next/image"
import headshot from "public/images/home/headshot2.jpg";
import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

//Slideshow images
import angular from "public/images/superpowers/angular.png";
import bootstrap from "public/images/superpowers/bootstrap.png";
import javascript from "public/images/superpowers/javascript.png";
import net from "public/images/superpowers/net.png";
import nextjs from "public/images/superpowers/nextjs.jpg";
import python from "public/images/superpowers/python.png";
import react from "public/images/superpowers/react.png";
import sass from "public/images/superpowers/sass.webp";
import tailwind from "public/images/superpowers/tailwind.png";
import typescript from "public/images/superpowers/typescript.png";
import html from "public/images/superpowers/html.png";
import rxjs from "public/images/superpowers/rxjs.png";
import aggrid from "public/images/superpowers/ag-grid.png";
import flask from "public/images/superpowers/flask.png";
import sqlalchemy from "public/images/superpowers/sqlalchemy.png";
import mongodb from "public/images/superpowers/mongodb.png";
import postgresql from "public/images/superpowers/postgresql.png";
import snowflake from "public/images/superpowers/snowflake.png";
import cosmosdb from "public/images/superpowers/cosmosdb.png";
import docker from "public/images/superpowers/docker.webp";
import php from "public/images/superpowers/php.png";
import { IHeaderLinks } from "../_components/Header/Header";
import { ISocialLink } from "../_components/Home/Intro/Intro";
import { IProjectCard } from "../_components/Home/Projects/Projects";
import { SkillsetImage } from "../_components/Home/Superpowers/Superpowers";

export interface ISiteData {
    personalInfo: {
        name: string,
        location: string,
        headshot: StaticImageData
    },
    header: {
        hamburgerIcon: IconDefinition,
        homeIcon: IconDefinition,
        headerLinks: IHeaderLinks[],
        resumeButtonData: {
            label: string,
            faIcon: IconDefinition
        }
    },
    footer: {
        copyrightYear: number,
        copyrightText: string | undefined,
        copyrightIcon: IconDefinition
    },
    aboutMe: {
        title: string,
        degree: string,
        jobTitle: string,
        hobbiesTitle: string,
        hobbies: [
            IconDefinition,
            IconDefinition,
            IconDefinition,
            IconDefinition
        ]
    },
    intro: {
        socialLinks: ISocialLink[],
        attributes: string[] //Add your first name first so it shows up on initial render
    },
    projects: {
        title: string,
        cards: [
            IProjectCard,
            IProjectCard,
            IProjectCard,
            IProjectCard
        ]
    },
    skills: {
        title: string,
        skills: SkillsetImage[],
    }
}

export const SiteData: ISiteData = {
    personalInfo: {
        name: "Nicholas Prussen",
        location: "Boise, ID",
        headshot: headshot
    },
    header: {
        hamburgerIcon: faHamburger,
        homeIcon: faHouse,
        headerLinks: [
            {
                href: '/',
                linkText: 'Home',
                disabled: false,
                fontAwesomeIcon: faHouse
            },
            // {
            //     href: '/about',
            //     linkText: 'About',
            //     disabled: true,
            //     fontAwesomeIcon: faAddressCard
            // },
            {
                href: '/photography',
                linkText: 'Photography',
                disabled: false,
                fontAwesomeIcon: faCameraRetro
            },
            // {
            //     href: '/contact',
            //     linkText: 'Contact',
            //     disabled: true,
            //     fontAwesomeIcon: faEnvelope
            // },
            // {
            //     href: '/projects',
            //     linkText: 'Projects',
            //     disabled: true,
            //     fontAwesomeIcon: faDiagramProject
            // },
            // {
            //     href: '/visual-resume',
            //     linkText: 'Visual Resume',
            //     disabled: true,
            //     fontAwesomeIcon: faFileWord
            // },
        ],
        resumeButtonData: {
            label: "Resume",
            faIcon: faDownload
        }
    },
    footer: {
        copyrightYear: 2023,
        copyrightText: undefined,
        copyrightIcon: faCopyright
    },
    aboutMe: {
        title: "About Me",
        degree: "Bachelor's in Computer Science",
        jobTitle: "Full Stack Software Engineer",
        hobbiesTitle: "Hobbies",
        hobbies: [
            faCameraAlt,
            faCampground,
            faGamepad,
            faHamburger
        ]
    },
    intro: {
        socialLinks: [
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
        ],
        attributes: [
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
    },
    projects: {
        title: "Projects",
        cards: [
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
    },
    skills: {
        title: "Superpowers",
        skills: [
            {
                image: html,
                text: "HTML/CSS",
                alt: "html logo",
                level: "Expert"
            },
            {
                image: javascript,
                text: "JavaScript",
                alt: "javascript logo",
                level: "Expert"
            },
            {
                image: angular,
                text: "Angular",
                alt: "angular logo",
                level: 'Advanced'
            },
            {
                image: react,
                text: "ReactJS",
                alt: "react logo",
                level: "Advanced"
            },
            {
                image: nextjs,
                text: "NextJS",
                alt: "nextjs logo",
                level: "Advanced"
            },
            {
                image: bootstrap,
                text: "Bootstrap",
                alt: "bootstrap logo",
                level: "Advanced"
            },
            {
                image: net,
                text: ".NET Core",
                alt: ".net core logo",
                level: "Advanced"
            },
            {
                image: tailwind,
                text: "TailwindCSS",
                alt: "tailwind css logo",
                level: "Advanced"
            },
            {
                image: typescript,
                text: "TypeScript",
                alt: "typescript logo",
                level: "Advanced"
            },
            {
                image: rxjs,
                text: "RxJS",
                alt: "rxjs logo",
                level: "Advanced"
            },
            {
                image: mongodb,
                text: "MongoDB",
                alt: "mongodb logo",
                level: "Advanced"
            },
            {
                image: postgresql,
                text: "PostgreSQL",
                alt: "postgresql logo",
                level: "Advanced"
            },
            {
                image: docker,
                text: "Docker",
                alt: "docker logo",
                level: "Intermediate"
            },
            {
                image: snowflake,
                text: "Snowflake",
                alt: "snowflake logo",
                level: "Intermediate"
            },
            {
                image: cosmosdb,
                text: "Azure CosmosDB",
                alt: "cosmosdb logo",
                level: "Intermediate"
            },
            {
                image: flask,
                text: "Flask",
                alt: "flask logo",
                level: "Intermediate"
            },
            {
                image: php,
                text: "PHP",
                alt: "php logo",
                level: "Intermediate"
            },
            {
                image: aggrid,
                text: "AG Grid",
                alt: "ag grid logo",
                level: "Intermediate"
            },
            {
                image: python,
                text: "Python",
                alt: "python logo",
                level: "Intermediate"
            },
            {
                image: sass,
                text: "Sass",
                alt: "sass logo",
                level: "Intermediate"
            },
            {
                image: sqlalchemy,
                text: "SQLAlchemy",
                alt: "sqlalchemy logo",
                level: "Beginner"
            },
        ]
    }
}