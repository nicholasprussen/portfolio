import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.scss";
import { faHouse, IconDefinition, faCameraRetro, faHamburger, faFileDownload, faDownload } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef, useState } from "react";
import AnimateHeight, { Height } from "react-animate-height";
import { HeaderContext, WindowContext } from "../../pages/_app";
import Button from "../Button/Button";
export interface IHeaderLinks {
    /** Link that the anchor tag will use */
    href: string,
    /** Text to be displayed inside anchor tag */
    linkText: string,
    /** Whether the link should be disabled */
    disabled?: boolean,
    /** IconDefinition of the icon to use with the link */
    fontAwesomeIcon: IconDefinition
}

/** Pre-defined header links */
export const HeaderLinks: IHeaderLinks[] = [
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
]

/** Site-wide Header Component */
const Header = () => {

    /** State */
    const [headerCollapsed, setHeaderCollapsed] = useState(true);
    const [headerHeight, setHeaderHeight] = useState<number>(0);
    const headerContainer = useRef<HTMLDivElement>(null);
    const { updateHeaderHeight, updateHeaderCollapsedHeight } = useContext(HeaderContext);
    const { dimensions } = useContext(WindowContext);
    const router = useRouter();

    /** UseEffects */
    useEffect(() => {
        setHeaderHeight(headerCollapsed ? 0 : (dimensions.height - headerHeight));
    }, [headerCollapsed])

    useEffect(() => {
        updateHeaderHeight(headerContainer.current?.clientHeight || 0);
    }, [dimensions])

    useEffect(() => {
        updateHeaderCollapsedHeight(headerContainer.current?.clientHeight || 0);
    }, [])


    /** Update header height after react-animate finishes */
    const headerHeightChanged = (newHeight: Height) => {
        if (headerCollapsed)
            updateHeaderCollapsedHeight(headerContainer.current?.clientHeight || 0);
        updateHeaderHeight(headerContainer.current?.clientHeight || 0);
    }

    const getResumeLink = () => {
        return `${window.location.href}/resume/resume.pdf`;
    }

    /** Map header link array to formatted links */
    const mapHeaderLinks = (headerLinks: IHeaderLinks[]) => {
        if (!headerLinks)
            return <></>;
        /** List items need keys */
        let index = 0;
        const renderedHeaderLinks = headerLinks.map((headerLink) => {
            return (
                <li data-disabled={headerLink.disabled} key={++index} data-active={router.pathname === headerLink.href} onClick={() => {setHeaderCollapsed(true)}}>
                    {
                        !headerLink.disabled ? 
                        <Link href={headerLink.href} className="w-full flex md:gap-2 lg:gap-4 items-center truncate">
                            {headerLink.linkText}
                        </Link> :
                        <a className="flex md:gap-2 lg:gap-4 items-center truncate">
                            {headerLink.linkText}
                        </a>
                    }
                </li>
            );
        });

        renderedHeaderLinks.push(
            <Button key={'resume'} href={getResumeLink()} downloadFileName="Resume.pdf" onClick={() => {}} smallPadding>
                <>Resume</>
                <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
            </Button>
        )

        return renderedHeaderLinks;
    }

    return (
        <header className={`${styles.portfolioHeader}`} ref={headerContainer}>
            <div className="w-100 md:hidden px-5 py-3 flex justify-between items-center text-2xl">
                <Link href={"/"}>
                    <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                </Link>
                <FontAwesomeIcon icon={faHamburger} className="hover:text-primary cursor-pointer" onClick={() => {setHeaderCollapsed(!headerCollapsed)}}/>
            </div>
            <AnimateHeight
                duration={750}
                height={headerHeight}
                className="md:hidden"
                onHeightAnimationEnd={(newHeight) => headerHeightChanged(newHeight)}>
                    <ul className="flex flex-col md:flex-row md:py-4 w-full md:w-auto md:gap-5 lg:bg-dark overflow-hidden">
                        {mapHeaderLinks(HeaderLinks)}
                    </ul>
            </AnimateHeight>
            <ul className="hidden md:flex justify-center flex-col md:flex-row py-2 md:p-8 w-full md:w-auto gap-2 md:gap-5 md:bg-dark overflow-hidden items-center">
                {mapHeaderLinks(HeaderLinks)}
            </ul>
        </header>
    )
}

export default Header;