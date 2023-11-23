import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useFetchCatsByBreedIdQuery } from '@/api/getBreeds'

const Index = ({ breedId }: { breedId: string }) => {
  const { data } = useFetchCatsByBreedIdQuery({ breedId })
  console.log(data)
  return <h1>Hello </h1>
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      breedId: context.params?.id,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export default Index
