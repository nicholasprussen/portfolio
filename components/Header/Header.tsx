import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.scss";
import { faHouse, IconDefinition, faAddressCard, faCameraRetro, faEnvelope, faDiagramProject, faFileWord, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef, useState } from "react";
import AnimateHeight, { Height } from "react-animate-height";
import { HeaderContext, WindowContext } from "../../pages/_app";

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
    {
        href: '/about',
        linkText: 'About',
        disabled: false,
        fontAwesomeIcon: faAddressCard
    },
    {
        href: '/photography',
        linkText: 'Photography',
        disabled: false,
        fontAwesomeIcon: faCameraRetro
    },
    {
        href: '/contact',
        linkText: 'Contact',
        disabled: false,
        fontAwesomeIcon: faEnvelope
    },
    {
        href: '/projects',
        linkText: 'Projects',
        disabled: true,
        fontAwesomeIcon: faDiagramProject
    },
    {
        href: '/visual-resume',
        linkText: 'Visual Resume',
        disabled: true,
        fontAwesomeIcon: faFileWord
    },
]

/** Site-wide Header Component */
const Header = () => {

    /** State */
    const [headerCollapsed, setHeaderCollapsed] = useState(true);
    const [headerHeight, setHeaderHeight] = useState<Height>(0);
    const headerContainer = useRef<HTMLDivElement>(null);
    const { updateHeaderHeight } = useContext(HeaderContext);
    const { dimensions } = useContext(WindowContext);
    const router = useRouter();

    /** UseEffects */
    useEffect(() => {
        setHeaderHeight(headerCollapsed ? 0 : 'auto');
    }, [headerCollapsed])

    useEffect(() => {
        updateHeaderHeight(headerContainer.current?.clientHeight || 0);
    }, [dimensions])


    /** Update header height after react-animate finishes */
    const headerHeightChanged = (newHeight: Height) => {
        updateHeaderHeight(headerContainer.current?.clientHeight || 0);
    }

    /** Map header link array to formatted links */
    const mapHeaderLinks = (headerLinks: IHeaderLinks[]) => {
        if (!headerLinks)
            return <></>;
        /** List items need keys */
        let index = 0;
        return headerLinks.map((headerLink) => {
            return (
                <li data-disabled={headerLink.disabled} key={++index} data-active={router.pathname === headerLink.href}>
                    {
                        !headerLink.disabled ? 
                        <Link href={headerLink.href}>
                            <a className="w-full flex md:gap-2 lg:gap-4 items-center">
                                <FontAwesomeIcon icon={headerLink.fontAwesomeIcon} fixedWidth />
                                {headerLink.linkText}
                            </a>
                        </Link> :
                        <a className="flex md:gap-2 lg:gap-4 items-center">
                            <FontAwesomeIcon icon={headerLink.fontAwesomeIcon} fixedWidth />
                            {headerLink.linkText}
                        </a>
                    }
                </li>
            );
        })
    }

    return (
        <header className={`md:sticky md:top-0 md:z-[999] ${styles.portfolioHeader}`} ref={headerContainer}>
            <div className="w-100 md:hidden px-5 py-3 flex justify-between items-center text-2xl name-header">
                <h1 className={`font-bold whitespace-nowrap text-ellipsis`}>Nicholas Prussen</h1>
                <FontAwesomeIcon icon={faHamburger} className="hover:text-primary cursor-pointer" onClick={() => {setHeaderCollapsed(!headerCollapsed)}}/>
            </div>
            <AnimateHeight
                duration={500}
                height={headerHeight}
                className="md:hidden"
                onHeightAnimationEnd={(newHeight) => headerHeightChanged(newHeight)}>
                    <ul className="flex flex-col md:flex-row md:py-4 w-full md:w-auto md:gap-5 bg-dark-accent lg:bg-dark overflow-hidden">
                        {mapHeaderLinks(HeaderLinks)}
                    </ul>
            </AnimateHeight>
            <ul className="hidden md:flex justify-center flex-col md:flex-row py-2 md:py-4 w-full md:w-auto gap-2 md:gap-5 bg-dark-accent md:bg-dark overflow-hidden">
                {mapHeaderLinks(HeaderLinks)}
            </ul>
        </header>
    )
}

export default Header;