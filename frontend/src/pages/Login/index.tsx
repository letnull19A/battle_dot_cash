import { Panel, Button, Input } from '@ui'
import { useForm, Controller } from 'react-hook-form'
import styles from './style.module.scss'

export const LoginPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
  })

  const onSubmit = (data) => {
    console.log(data)
    // call to api.auth()
  }

  return (
    <Panel className={styles.authPanel}>
      <h2>Войти</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='login'
          control={control}
          render={({ field }) => (
            <Input {...field} errorMessage='some error' label='Логин' />
          )}
        />
        <Controller
          name='password'
          control={control}
          render={({ field }) => <Input {...field} isPassword label='Пароль' />}
        />
        <Button label='Войти' />
        <span className={styles.accountManage}>Создать аккаунт</span>
      </form>
    </Panel>
  )
}
