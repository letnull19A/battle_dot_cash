import { Header, Container } from '@ui'
import styles from './style.module.scss'

type TDefaultProps = {
  children: JSX.Element
}

export const Default = (props: TDefaultProps) => {
  const { children } = props

  return (
    <div className={styles.defaultLayout}>
      <Header />
      <div className={styles.content}>
        <Container>{children}</Container>
      </div>
    </div>
  )
}
