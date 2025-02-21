import { Card } from 'primereact/card'
import React from 'react'
import styles from './style.module.scss'

type TPanel = {
 children?: JSX.Element[]
 className?: string | Array<string>
}

export const Panel = (props: TPanel) => {

 const {children, className} = props

 return (
  <Card className={'p-3 ' + styles.panel + ' ' + (Array.isArray(className) ? 
     className?.join(' ') : className)}>
   {children}
  </Card>
 )
}
