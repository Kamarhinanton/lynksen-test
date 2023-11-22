import Head from 'next/head'
import { useFetchAllBreedsQuery } from '@/api/getBreeds'
import { HomeContent } from '@/components/modules/Home'
export default function Home() {
  const { data } = useFetchAllBreedsQuery({})
  console.log('data', data)
  return (
    <>
      <Head>
        <title>lynksen-test</title>
      </Head>
      <HomeContent />
    </>
  )
}
