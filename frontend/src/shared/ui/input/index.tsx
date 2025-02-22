import { forwardRef } from 'react'
import { InputText } from 'primereact/inputtext'
import styles from './style.module.scss'

type TInputProps = {
  label: string
  isError: boolean
  isPassword: boolean
  errorMessage: string
  value: string
  onChange: (e) => void
}

export const Input = forwardRef<Partial<TInputProps>>((props, ref) => {
  const { label, isError, isPassword, errorMessage, onChange, value } = props

  return (
    <div
      className={[styles.inputContainer, isError ? styles.error : null].join(
        ' ',
      )}
    >
      <span className={styles.inputLabel}>{label}</span>
      <InputText
        onChange={onChange}
        value={value}
        ref={ref}
        className={styles.input}
        type={isPassword ? 'password' : 'text'}
      />
      {isError && <span className={styles.errorMessage}>{errorMessage}</span>}
    </div>
  )
})
