import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import styles from './Container.module.scss'

type PageLayoutProps = {
  children: ReactNode
  className?: string
}

const Container: FC<PageLayoutProps> = ({ children, className }) => {
  return (
    <div className={classNames(styles['baseContainer'], className)}>
      {children}
    </div>
  )
}

export default Container
