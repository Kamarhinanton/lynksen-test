import React from 'react'
import dynamic from 'next/dynamic'
import Container from '@/components/ui/Container'
const BreedIdSwiperComponent = dynamic(
  () => import('@/components/modules/Breed/ui/BreedIdSwiper/BreedIdSwiper'),
  { ssr: false },
)
import styles from './BreedContent.module.scss'
import Link from 'next/link'
import AnimatedText from '@/components/ui/AnimatedText/AnimatedText'
import AnimatedElement from '@/components/ui/AnimatedElement/AnimatedElement'

const BreedContent = ({ breedId }: { breedId: string }) => {
  return (
    <Container className={styles['containerModBreed']}>
      <h2 className="h2">
        <AnimatedText>Breed page</AnimatedText>
      </h2>
      <AnimatedElement>
        <Link
          className="p"
          href={{
            pathname: `/`,
          }}
          scroll={false}
        >
          Back home
        </Link>
      </AnimatedElement>
      <div className={styles['swiperWrapper']}>
        <AnimatedElement>
          <BreedIdSwiperComponent breedId={breedId} />
        </AnimatedElement>
      </div>
    </Container>
  )
}

export default BreedContent
