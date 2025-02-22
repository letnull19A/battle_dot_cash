import { Panel, Button, Input } from '@ui'
import styles from './style.module.scss'

export const LoginPage = () => {
  return (
    <Panel className={styles.authPanel}>
      <h2>Войти</h2>
      <Input errorMessage='some error' label='Логин' />
      <Input isPassword label='Пароль' />
      <Button label='Войти' />
      <span className={styles.accountManage}>Создать аккаунт</span>
    </Panel>
  )
}
