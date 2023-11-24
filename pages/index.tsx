import Head from 'next/head'
import dynamic from 'next/dynamic'
import PageTransitionLayout from '@/components/ui/PageTransitionLayout'
const HomeContentComponent = dynamic(
  () => import('@/components/modules/Home/ui/HomeContent'),
  { ssr: false },
)
export default function Home() {
  return (
    <>
      <Head>
        <title>lynksen-test</title>
      </Head>
      <PageTransitionLayout>
        <HomeContentComponent />
      </PageTransitionLayout>
    </>
  )
}
