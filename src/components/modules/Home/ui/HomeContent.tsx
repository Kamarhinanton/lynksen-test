import { FC } from 'react'

import styles from './HomeContent.module.scss'
import Container from '@/components/ui/Container'

const HomeContent: FC = () => {
  return (
    <main className={styles['HomeContent']}>
      <Container>
        <h1>hello</h1>
      </Container>
    </main>
  )
}

export default HomeContent
