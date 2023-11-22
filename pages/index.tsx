import Head from 'next/head'
import { useFetchAllBreedsQuery } from '@/api/getBreeds'
export default function Home() {
  const { data } = useFetchAllBreedsQuery({})
  console.log('data', data)
  return (
    <>
      <Head>
        <title>lynksen-test</title>
      </Head>
      <main>
        <h1>Hello world</h1>
      </main>
    </>
  )
}
