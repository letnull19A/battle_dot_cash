import React, {
  forwardRef,
  ForwardedRef,
} from 'react'
import { InputText } from 'primereact/inputtext'
import styles from './style.module.scss'

type TInputProps = {
  label: string
  isError: boolean | undefined
  isPassword?: boolean
  errorMessage: string | undefined
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void
}

const I = (
  props: TInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const {
    label,
    isError,
    isPassword,
    errorMessage,
    onChange,
    value,
  } = props

  return (
    <div
      className={[
        styles.inputContainer,
        isError ? styles.error : null,
      ].join(' ')}
    >
      <span className={styles.inputLabel}>
        {label}
      </span>
      <InputText
        onChange={onChange}
        value={value}
        ref={ref}
        className={styles.input}
        type={isPassword ? 'password' : 'text'}
      />
      {isError && (
        <span className={styles.errorMessage}>
          {errorMessage}
        </span>
      )}
    </div>
  )
}

export const Input = forwardRef(I)
