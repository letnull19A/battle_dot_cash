import { Panel, Button, Input } from '@ui'
import {
  useForm,
  Controller,
} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styles from './style.module.scss'

type TLoginForm = {
  login: string
  password: string
}

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginForm>({
    defaultValues: {
      login: '',
      password: '',
    },
  })

  const navigate = useNavigate()

  const onSubmit = (data: TLoginForm) => {
    console.log(data)
    // call to api.auth()
  }

  return (
    <Panel className={styles.authPanel}>
      <h2>Войти</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='login'
          rules={{ required: 'Логин не введён' }}
          control={control}
          render={({ field, fieldState }) => (
            <Input
              onChange={field.onChange}
              value={field.value}
              errorMessage={
                errors?.login?.message
              }
              isError={
                fieldState.error !== undefined
              }
              label='Логин'
            />
          )}
        />
        <Controller
          name='password'
          rules={{ required: 'Пароль не введён' }}
          control={control}
          render={({ field, fieldState }) => (
            <Input
              onChange={field.onChange}
              value={field.value}
              isPassword
              isError={
                fieldState.error !== undefined
              }
              errorMessage={
                errors?.password?.message
              }
              label='Пароль'
            />
          )}
        />
        <Button label='Войти' />
        <span
          onClick={() =>
            navigate('/registration')
          }
          className={styles.accountManage}
        >
          Создать аккаунт
        </span>
      </form>
    </Panel>
  )
}
