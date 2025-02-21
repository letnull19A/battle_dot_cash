import { InputText } from 'primereact/inputtext'
import styles from './style.module.scss'

type TInputProps = {
 label?: string
}

export const Input = (props: TInputProps) => {

 const {label} = props

 return (
  <div className={styles.inputContainer}>
   <span className={styles.inputLabel}>{label}</span>
   <InputText className={styles.input}/>
  </div>
 )
}
