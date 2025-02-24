import { useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import styles from './style.module.scss'
import './override.css'

export type TReferal = {
  id: string
  nickname: string
  date: Date
}

export const RefsList = () => {
  const [refList, setRefList] = useState<
    Array<TReferal>
  >([])

  return (
    <>
      <h2
        style={{
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        Список рефералов
      </h2>
      <DataTable
        paginator
        value={refList}
        rows={5}
      >
        <Column field='id' header='ID' />
        <Column field='nickname' header='Ник' />
        <Column
          field='date'
          header='Дата перехода'
        />
      </DataTable>
    </>
  )
}
