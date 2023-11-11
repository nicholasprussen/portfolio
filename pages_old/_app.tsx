import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Footer, Header } from '../components'
import { createContext, useEffect, useState } from 'react'
import { ISiteData, SiteData } from './information'

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
  updateHeaderHeight: (height: number) => {},
  updateHeaderCollapsedHeight: (height: number) => {}
}

const windowContext: IWindowContext = {
  dimensions: {width: 9999, height: 9999},
  updateDimensions: (dimensions: IWindowDimensions) => {}
}

const siteDataContext: ISiteData = SiteData;

export const HeaderContext = createContext(headerContext);
export const WindowContext = createContext(windowContext);
export const SiteDataContext = createContext(siteDataContext);

function MyApp({ Component, pageProps }: AppProps) {
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
    console.log(siteData)
    if (window) {
        setDimensions({width: window.innerWidth, height: window.innerHeight});
    }

    /** Watch for window resize to report header height appropriately */
    window.addEventListener('resize', () => {
      setDimensions({width: window.innerWidth, height: window.innerHeight});
    });
    return () => {
        window.removeEventListener('resize', () => {
          setDimensions({width: window.innerWidth, height: window.innerHeight});
        })
    }
  }, [])

  return (
    <WindowContext.Provider value={{dimensions, updateDimensions}}>
    <SiteDataContext.Provider value={siteData}>
    <HeaderContext.Provider value={{headerHeight, headerCollapsedHeight, updateHeaderCollapsedHeight, updateHeaderHeight}}>
      <div className='w-full grid grid-rows-[auto_1fr_auto]' style={{minHeight: '100lvh'}}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </HeaderContext.Provider>
    </SiteDataContext.Provider>
    </WindowContext.Provider>
    
  )
}

export default MyApp