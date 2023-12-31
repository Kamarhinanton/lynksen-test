import 'swiper/css'
import '@/styles/index.scss'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import { Provider } from 'react-redux'
import store from '@/store/store'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useNextCssRemovalPrevention } from '@madeinhaus/nextjs-page-transition'

const NotoSans = localFont({
  src: [
    {
      path: '../public/fonts/NotoSans-Regular.woff',
      weight: '400',
    },
    {
      path: '../public/fonts/NotoSans-Regular.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/NotoSans-SemiBold.woff',
      weight: '500',
    },
    {
      path: '../public/fonts/NotoSans-SemiBold.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/NotoSans-Bold.woff',
      weight: '700',
    },
    {
      path: '../public/fonts/NotoSans-Bold.woff2',
      weight: '700',
    },
  ],
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pageKey = router.asPath
  useNextCssRemovalPrevention()

  return (
    <Provider store={store}>
      <style jsx global>{`
        :root {
          --font-family-primary: ${NotoSans.style.fontFamily};
        }
      `}</style>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={pageKey} />
      </AnimatePresence>
    </Provider>
  )
}
