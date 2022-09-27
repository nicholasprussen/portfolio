import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Footer, Header } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
