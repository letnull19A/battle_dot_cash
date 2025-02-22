import { Panel, Button, Input } from '@ui'
import {
  useForm,
  Controller,
} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styles from './style.module.scss'

type TRegistrationForm = {
  login: string
  nickname: string
  password: string
  rePassword: string
}

export const RegistrationPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegistrationForm>({
    defaultValues: {
      login: '',
      nickname: '',
      password: '',
      rePassword: '',
    },
  })

  const navigate = useNavigate()

  const onSubmit = (data: TRegistrationForm) => {
    console.log(data)
    // call to api.auth()
  }

  return (
    <Panel className={styles.authPanel}>
      <h2>Регистрация</h2>
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
          name='nickname'
          rules={{ required: 'Ник не введён' }}
          control={control}
          render={({ field, fieldState }) => (
            <Input
              onChange={field.onChange}
              value={field.value}
              errorMessage={
                errors?.nickname?.message
              }
              isError={
                fieldState.error !== undefined
              }
              label='Ваш ник'
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
        <ul className={styles.securedList}>
          <li>8 символов минимум</li>
          <li>a-zA-Z</li>
          <li>+!@#$%^&*()\[]_=?</li>
        </ul>
        <Controller
          name='rePassword'
          rules={{
            required:
              'Подтверждение пароля не введено',
          }}
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
                errors?.rePassword?.message
              }
              label='Подтвердите пароль'
            />
          )}
        />
        <Button label='Регистрация' />
        <span
          onClick={() => navigate('/login')}
          className={styles.accountManage}
        >
          Есть аккаунт
        </span>
      </form>
    </Panel>
  )
}
