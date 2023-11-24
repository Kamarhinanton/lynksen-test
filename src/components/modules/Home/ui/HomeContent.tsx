import { FC } from 'react'
import styles from './HomeContent.module.scss'
import Container from '@/components/ui/Container'
import dynamic from 'next/dynamic'
import AnimatedText from '@/components/ui/AnimatedText/AnimatedText'
import AnimatedElement from '@/components/ui/AnimatedElement/AnimatedElement'
const BreedSwiperComponent = dynamic(
  () => import('@/components/modules/Home/ui/BreedsSwiper/BreedsSwiper'),
  { ssr: false },
)

const HomeContent: FC = () => {
  return (
    <main>
      <Container className={styles['containerMod']}>
        <h1 className="h1">
          <AnimatedText>Welcome</AnimatedText>
        </h1>
        <div className={styles['swiperWrapper']}>
          <AnimatedElement>
            <BreedSwiperComponent />
          </AnimatedElement>
        </div>
      </Container>
    </main>
  )
}

export default HomeContent
