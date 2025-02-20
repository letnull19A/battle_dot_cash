import { useState } from 'react'
import { BurgerMenu } from './BurgerMenu'
import { Button } from 'primereact/button'
import { Container } from '@ui'
import { MenuContext } from '@contexts'
import styles from './style.module.scss'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <MenuContext.Provider
      value={{
        isOpen: isMenuOpen,
        setIsOpen: setIsMenuOpen,
      }}
    >
      <header className={styles.header}>
        <Container>
          <div className={styles.headerInner}>
            <Button
              className={[styles.burgerButton].join(' ')}
              icon={isMenuOpen ? 'pi pi-times' : 'pi pi-bars'}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            />
            <span className={styles.headerLogo}>battle.cash</span>
          </div>
        </Container>
      </header>
      {<BurgerMenu />}
    </MenuContext.Provider>
  )
}
