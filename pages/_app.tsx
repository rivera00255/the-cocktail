import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Globalstyle } from '../styles/global-style'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Globalstyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
    </>
  )
}

export default MyApp
