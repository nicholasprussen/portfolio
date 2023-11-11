'use client';
import React from "react";
import '../styles/globals.scss'
import { createContext, useEffect, useState } from 'react'
import { ISiteData, SiteData } from "./_data/information";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";

interface IHeaderContext {
    headerHeight: number,
    headerCollapsedHeight: number,
    updateHeaderHeight(height: number): any,
    updateHeaderCollapsedHeight(height: number): void
}

interface IWindowDimensions {
    width: number,
    height: number,
}

interface IWindowContext {
    dimensions: IWindowDimensions,
    updateDimensions(dimensions: IWindowDimensions): any
}

const headerContext: IHeaderContext = {
    headerHeight: 0,
    headerCollapsedHeight: 0,
    updateHeaderHeight: (height: number) => { },
    updateHeaderCollapsedHeight: (height: number) => { }
}

const windowContext: IWindowContext = {
    dimensions: { width: 9999, height: 9999 },
    updateDimensions: (dimensions: IWindowDimensions) => { }
}

const siteDataContext: ISiteData = SiteData;

export const HeaderContext = createContext(headerContext);
export const WindowContext = createContext(windowContext);
export const SiteDataContext = createContext(siteDataContext);

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [headerHeight, setHeaderHeight] = useState<number>(headerContext.headerHeight);
    const [headerCollapsedHeight, setHeaderCollapsedHeight] = useState<number>(headerContext.headerCollapsedHeight);
    const [dimensions, setDimensions] = useState<IWindowDimensions>(windowContext.dimensions);
    const [siteData] = useState<ISiteData>(siteDataContext);

    const updateHeaderHeight = (height: number) => {
        setHeaderHeight(height);
    }

    const updateHeaderCollapsedHeight = (height: number) => {
        setHeaderCollapsedHeight(height);
    }

    const updateDimensions = (dimensions: IWindowDimensions) => {
        setDimensions(dimensions);
    }

    useEffect(() => {
        if (window) {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        }

        /** Watch for window resize to report header height appropriately */
        window.addEventListener('resize', () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        });
        return () => {
            window.removeEventListener('resize', () => {
                setDimensions({ width: window.innerWidth, height: window.innerHeight });
            })
        }
    }, [])

    return (
        <html lang="en" className="w-full min-h-full">
            <body className="w-full min-h-full">
                <WindowContext.Provider value={{ dimensions, updateDimensions }}>
                    <SiteDataContext.Provider value={siteData}>
                        <HeaderContext.Provider value={{ headerHeight, headerCollapsedHeight, updateHeaderCollapsedHeight, updateHeaderHeight }}>
                            <div className='w-full grid grid-rows-[auto_1fr_auto]' style={{ minHeight: '100lvh' }}>
                                <Header />
                                {children}
                                <Footer />
                            </div>
                        </HeaderContext.Provider>
                    </SiteDataContext.Provider>
                </WindowContext.Provider>
            </body>
        </html>
    )
}