import { useState } from 'react'
import { ConfirmDialog } from 'primereact/confirmdialog'
import { Avatar } from 'primereact/avatar'
import { Button } from 'primereact/button'
import styles from './style.module.scss'

export const Account = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const footerContent = (
    <div>
      <Button
        style={{ padding: 10, marginRight: 10 }}
        label='Отмена'
        icon='pi pi-times'
        onClick={() => setVisible(false)}
        autoFocus
        className='p-button-text'
      />
      <Button
        severity='danger'
        outlined
        style={{ padding: 10 }}
        label='Удалить'
        icon='pi pi-check'
        onClick={() => setVisible(false)}
      />
    </div>
  )

  const buttonStyle: React.CSSProperties = {
    position: 'static',
    zIndex: 0,
    width: '100%',
    backgroundColor: 'var(--indigo-700)',
    borderColor: 'var(--indigo-700)',
  }

  return (
    <>
      <div className={['pt-4', styles.account].join(' ')}>
        <div className={'grid gap-1'}>
          <div style={{ width: 110, height: 110 }}>
            <Avatar style={{ width: '100%', height: '100%' }} />
          </div>
          <div className={'col-7'}>
            <div className={'grid'}>
              <div className={'col-12'}>
                <h1>Name Surname</h1>
              </div>
              <div className={'col-12'}>
                <span>@nickname</span>
              </div>
              <div className={'col-12'}>
                <span>example@mail.ru</span>
              </div>
              <div className={'col-12'}>
                <span>@telegram</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: '100%' }}>
          {!isEdit ? (
            <Button
              label='Редактировать'
              onClick={() => {
                setIsEdit(true)
              }}
              style={buttonStyle}
            />
          ) : (
            <Button
              label='Сохранить'
              onClick={() => setIsEdit(false)}
              severity='success'
              outlined
              style={{ position: 'static', zIndex: 0, width: '100%' }}
            />
          )}
        </div>
        <div style={{ width: '100%' }} className={'mt-3'}>
          <Button
            onClick={() => setVisible(true)}
            label='Удалить аккаунт'
            style={{ position: 'static', zIndex: 0, width: '100%' }}
            severity='danger'
            outlined
          />
        </div>
      </div>
      <ConfirmDialog
        footer={footerContent}
        group='declarative'
        style={{ width: '90vw' }}
        header='Удаление аккаунта'
        message='Вы действительно хотите удалить аккаунт battle.cash?'
        visible={visible}
        onHide={() => setVisible(false)}
      ></ConfirmDialog>
    </>
  )
}
