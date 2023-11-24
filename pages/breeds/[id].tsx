import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import PageTransitionLayout from '@/components/ui/PageTransitionLayout'
const BreedContentComponent = dynamic(
  () => import('@/components/modules/Breed/BreedContent'),
  { ssr: false },
)

const Index = ({ breedId }: { breedId: string }) => {
  return (
    <PageTransitionLayout>
      <BreedContentComponent breedId={breedId} />
    </PageTransitionLayout>
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
