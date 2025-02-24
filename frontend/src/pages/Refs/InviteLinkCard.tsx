import { useState, useEffect } from 'react'
import { Card } from 'primereact/card'
import styles from './style.module.scss'

//TODO: move to features
export const InviteLinkCard = () => {
  const [inviteLink, setInviteLink] =
    useState<string>()
  const [isCopy, setIsCopy] =
    useState<boolean>(false)

  const copyToClipboard = async () => {
    if (inviteLink === undefined) return

    await navigator.clipboard.writeText(
      inviteLink,
    )
  }

  useEffect(() => {
    setInviteLink('https://some.com/7737277')
  }, [inviteLink])

  return (
    <Card
      title='Реферальная ссылка'
      className={[styles.cardBalance, 'p-3'].join(
        ' ',
      )}
    >
      <div className={styles.copyLink}>
        <p>{inviteLink ?? ''}</p>
        <i
          onClick={() => {
            copyToClipboard()
            setIsCopy(true)
            setTimeout(
              () => setIsCopy(false),
              3000,
            )
          }}
          className={
            'pi ' +
            (!isCopy ? 'pi-clone' : 'pi-check')
          }
        ></i>
      </div>
    </Card>
  )
}
