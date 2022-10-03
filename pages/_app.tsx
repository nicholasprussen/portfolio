import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Footer, Header } from '../components'
import Script from 'next/script'
import { createContext, useEffect, useState } from 'react'

interface IHeaderContext {
  headerHeight: number,
  updateHeaderHeight(height: number): any
}

export interface IWindowDimensions {
  width: number,
  height: number
}

interface IWindowContext {
  dimensions: IWindowDimensions,
  updateDimensions(dimensions: IWindowDimensions): any
}

const headerContext: IHeaderContext = {
  headerHeight: 0,
  updateHeaderHeight: () => {}
}

const windowContext: IWindowContext = {
  dimensions: {width: 0, height: 0},
  updateDimensions: (dimensions: IWindowDimensions) => {}
}

export const HeaderContext = createContext(headerContext);
export const WindowContext = createContext(windowContext);

function MyApp({ Component, pageProps }: AppProps) {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [dimensions, setDimensions] = useState<IWindowDimensions>({width: 0, height: 0});

  const updateHeaderHeight = (height: number) => {
    setHeaderHeight(height);
  }

  const updateDimensions = (dimensions: IWindowDimensions) => {
    setDimensions(dimensions);
  }

  useEffect(() => {
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
    <HeaderContext.Provider value={{headerHeight, updateHeaderHeight}}>
      <Script src="https://kit.fontawesome.com/0f1df95d88.js" crossOrigin='anonymous'></Script>
      <div className='min-h-screen w-full grid grid-rows-[auto_1fr_auto]'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </HeaderContext.Provider>
    </WindowContext.Provider>
    
  )
}

export default MyApp
