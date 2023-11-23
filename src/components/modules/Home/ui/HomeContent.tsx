import { FC } from 'react'
import styles from './HomeContent.module.scss'
import Container from '@/components/ui/Container'
import BreedSwiper from '@/components/modules/Home/ui/BreedSwiper/BreedSwiper'
import dynamic from 'next/dynamic'
const BreedSwiperComponent = dynamic(
  () => import('@/components/modules/Home/ui/BreedSwiper/BreedSwiper'),
  { ssr: false },
)

const HomeContent: FC = () => {
  return (
    <main className={styles['HomeContent']}>
      {/*<Container>*/}
      <BreedSwiperComponent />
      {/*</Container>*/}
    </main>
  )
}

export default HomeContent
