import { Panel, Button, Input } from '@ui'
import { useForm, Controller } from 'react-hook-form'
import styles from './style.module.scss'

export const LoginPage = () => {
  const { control, handleSubmit, formState: {errors} } = useForm({
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
	  rules={{required: "Логин не введён"}}
          control={control}
          render={({ field, fieldState }) => (
            <Input {...field} 
	    errorMessage={errors.login?.message}
	    isError={fieldState.error}
	    label='Логин' />
          )}
        />
        <Controller
          name='password'
	  rules={{required: "Пароль не введён"}}
          control={control}
          render={({ field, fieldState }) => <Input 
		  {...field} 
		  isPassword 
		  isError={fieldState.error}
		  errorMessage={errors.password?.message}
		  label='Пароль' />}
        />
        <Button label='Войти' />
        <span className={styles.accountManage}>Создать аккаунт</span>
      </form>
    </Panel>
  )
}
