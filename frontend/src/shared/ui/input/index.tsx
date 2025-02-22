import styles from './style.module.scss'
import { InputText } from 'primereact/inputtext'

type TInputProps = {
  label: string
  isError: boolean
  isPassword: boolean
  errorMessage: string
}

export const Input = (props: Partial<TInputProps>) => {
  const { label, isError, isPassword, errorMessage } = props

  return (
    <div
      className={[styles.inputContainer, isError ? styles.error : null].join(
        ' ',
      )}
    >
      <span className={styles.inputLabel}>{label}</span>
      <InputText
        className={styles.input}
        type={isPassword ? 'password' : 'text'}
      />
      {isError && <span className={styles.errorMessage}>{errorMessage}</span>}
    </div>
  )
}
