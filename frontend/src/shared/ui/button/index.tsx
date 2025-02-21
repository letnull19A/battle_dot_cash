import {Button as B} from 'primereact/button'
import styles from './style.module.scss'

type TButtonProps = {
 label?: string
 className?: string
}

export const Button = (props: TButtonProps) => {

 const {label, className} = props

 return (
  <B 
label={label} 
className={styles.button + ' ' + className}/>
 )
}
