import Script from 'next/script'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic';

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

function MyApp({ Component, pageProps }) {

  return (<SafeHydrate><Component {...pageProps} /></SafeHydrate>
  )
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});