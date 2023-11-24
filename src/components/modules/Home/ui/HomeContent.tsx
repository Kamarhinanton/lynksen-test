import { FC } from 'react'
import styles from './HomeContent.module.scss'
import Container from '@/components/ui/Container'
import dynamic from 'next/dynamic'
const BreedSwiperComponent = dynamic(
  () => import('@/components/modules/Home/ui/BreedsSwiper/BreedsSwiper'),
  { ssr: false },
)

const HomeContent: FC = () => {
  return (
    <main>
      <Container className={styles['containerMod']}>
        <h1 className="h1">Welcome</h1>
        <div className={styles['swiperWrapper']}>
          <BreedSwiperComponent />
        </div>
      </Container>
    </main>
  )
}

export default HomeContent
