import Head from 'next/head'
import { HomeContent } from '@/components/modules/Home'
export default function Home() {
  return (
    <>
      <Head>
        <title>lynksen-test</title>
      </Head>
      <HomeContent />
    </>
  )
}
