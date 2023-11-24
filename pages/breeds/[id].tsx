import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { BreedContent } from '@/components/modules/Breed'

const Index = ({ breedId }: { breedId: string }) => {
  return (
    <>
      <BreedContent breedId={breedId} />
    </>
  )
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
