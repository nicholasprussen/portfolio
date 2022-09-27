import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.scss";

export interface IHeaderLinks {
    href: string,
    linkText: string,
    disabled?: boolean,
}

export const HeaderLinks: IHeaderLinks[] = [
    {
        href: '/',
        linkText: 'Home',
        disabled: false
    },
    {
        href: '/about',
        linkText: 'About',
        disabled: false
    },
    {
        href: '/skills',
        linkText: 'Skills',
        disabled: false
    },
    {
        href: '/contact',
        linkText: 'Contact',
        disabled: false
    },
    {
        href: '/projects',
        linkText: 'Projects',
        disabled: true
    },
    {
        href: '/visual-resume',
        linkText: 'Visual Resume',
        disabled: true
    },
]

const Header = () => {

    const router = useRouter();

    const mapHeaderLinks = (headerLinks: IHeaderLinks[]) => {
        if (!headerLinks)
            return <></>;
        let index = 0;
        return headerLinks.map((headerLink) => {
            return (
                <li data-disabled={headerLink.disabled} key={++index} data-active={router.pathname === headerLink.href}>
                    {
                        !headerLink.disabled ? 
                        <Link href={headerLink.href}>
                            {headerLink.linkText}
                        </Link> :
                        headerLink.linkText
                    }
                    
                </li>
            );
        })
    }

    return (
        <header className={`container mx-auto flex justify-center ${styles.portfolioHeader} rounded`}>
            <ul className="flex gap-10 p-4">
                {mapHeaderLinks(HeaderLinks)}
            </ul>
        </header>
    )
}

export default Header;