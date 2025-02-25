import {
  useState,
  useEffect,
  useRef,
} from 'react'
import { Card } from 'primereact/card'
import QRCode from 'qrcode'
import styles from './style.module.scss'

//TODO: move to features
export const InviteLinkCard = () => {
  const [inviteLink, setInviteLink] =
    useState<string>()
  const [isCopy, setIsCopy] =
    useState<boolean>(false)

  const canvasRef =
    useRef<HTMLCanvasElement>(null)

  const copyToClipboard = async () => {
    if (inviteLink === undefined) return

    await navigator.clipboard.writeText(
      inviteLink,
    )
  }

  useEffect(() => {
    setInviteLink('https://some.com/7737277')
  }, [inviteLink])

  useEffect(() => {
    if (
      canvasRef.current === undefined ||
      inviteLink === undefined
    ) {
      console.error(
        'canvas or link not found!',
        'canvas: ',
        canvasRef,
      )
      return
    }

    QRCode.toCanvas(
      canvasRef.current,
      inviteLink,
      console.error,
    )
  }, [inviteLink, canvasRef])

  return (
    <Card
      title='Реферальная ссылка'
      className={[styles.cardBalance, 'p-3'].join(
        ' ',
      )}
    >
      <canvas
        style={{
          width: 256,
          marginTop: 20,
          borderRadius: 5,
        }}
        ref={canvasRef}
      />
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
