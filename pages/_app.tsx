import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Button, Footer, Header } from '../components'
import Script from 'next/script'
import { createContext, useEffect, useState } from 'react'

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

interface IPageContext {
    activePage: Page,
    updatePage(pageName: Page): void
}

export type Page = 'Intro' | 'About Me' | 'Superpowers' | 'Projects';
export const PageDefinitions: {[key in Page]: number} = {
    Intro: 0,
    'About Me': 1,
    Superpowers: 2,
    Projects: 3
} 
export type PortfolioTheme = 'professional' | 'default' | 'wacky' | 'neumorphism';

interface IThemeContext {
    theme: PortfolioTheme,
    updateTheme(theme: PortfolioTheme): void
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

const themeContext: IThemeContext = {
    theme: 'default',
    updateTheme: (theme: PortfolioTheme) => {}
}

const pageContext: IPageContext = {
    activePage: 'Intro',
    updatePage: (pageName: Page) => {}
}

export const HeaderContext = createContext(headerContext);
export const WindowContext = createContext(windowContext);
export const ThemeContext = createContext(themeContext);
export const PageContext = createContext(pageContext);

function MyApp({ Component, pageProps }: AppProps) {
  const [headerHeight, setHeaderHeight] = useState<number>(headerContext.headerHeight);
  const [headerCollapsedHeight, setHeaderCollapsedHeight] = useState<number>(headerContext.headerCollapsedHeight);
  const [dimensions, setDimensions] = useState<IWindowDimensions>(windowContext.dimensions);
  const [theme, setTheme] = useState<PortfolioTheme>(themeContext.theme);
  const [activePage, setActivePage] = useState<Page>(pageContext.activePage);

  const updateHeaderHeight = (height: number) => {
    setHeaderHeight(height);
  }

  const updateHeaderCollapsedHeight = (height: number) => {
    setHeaderCollapsedHeight(height);
  }

  const updateDimensions = (dimensions: IWindowDimensions) => {
    setDimensions(dimensions);
  }

  const updateTheme = (theme: PortfolioTheme) => {
    setTheme(theme);
  }

  useEffect(() => {
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

  const updatePage = (page: Page) => {
    setActivePage(page);
  }

  useEffect(() => {
    window.scrollTo({top: (window.innerHeight * PageDefinitions[activePage]), behavior: 'smooth'});
  }, [activePage])

  return (
    <WindowContext.Provider value={{dimensions, updateDimensions}}>
    <HeaderContext.Provider value={{headerHeight, headerCollapsedHeight, updateHeaderCollapsedHeight, updateHeaderHeight}}>
    <ThemeContext.Provider value={{theme, updateTheme}}>
    <PageContext.Provider value={{activePage, updatePage}}>
      <Script src="https://kit.fontawesome.com/0f1df95d88.js" crossOrigin='anonymous'></Script>
      <div className='min-h-screen w-full grid grid-rows-[auto_1fr_auto]'>
        <div className='fixed bottom-4 left-4 z-50 flex flex-col gap-4 justify-end'>
            {/* <Button buttonText="" arrow='double-up' containerClassName='ml-auto' onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}></Button> */}
            {/* <Button buttonText="Change Theme" onClick={() => {updateTheme(theme === 'default' ? 'neumorphism' : 'default')}}></Button> */}
        </div>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </PageContext.Provider>
    </ThemeContext.Provider>
    </HeaderContext.Provider>
    </WindowContext.Provider>
    
  )
}

export default MyApp
