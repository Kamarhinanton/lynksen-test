import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'

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
  return (
    <>
      <style jsx global>{`
        :root {
          --font-family-primary: ${NotoSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
