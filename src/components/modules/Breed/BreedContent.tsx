import React from 'react'
import dynamic from 'next/dynamic'
import Container from '@/components/ui/Container'
const BreedIdSwiperComponent = dynamic(
  () => import('@/components/modules/Breed/ui/BreedIdSwiper/BreedIdSwiper'),
  { ssr: false },
)
import styles from './BreedContent.module.scss'
import Link from 'next/link'

const BreedContent = ({ breedId }: { breedId: string }) => {
  return (
    <Container className={styles['containerMod']}>
      <h2 className="h2">Breed page</h2>
      <Link
        className="p"
        href={{
          pathname: `/`,
        }}
      >
        Back home
      </Link>
      <div className={styles['swiperWrapper']}>
        <BreedIdSwiperComponent breedId={breedId} />
      </div>
    </Container>
  )
}

export default BreedContent
