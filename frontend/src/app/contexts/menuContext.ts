import { createContext } from 'react'

export type TMenuContext = {
  isOpen: boolean
  setIsOpen: (_value: boolean) => void
}

export const MenuContext =
  createContext<TMenuContext>({
    isOpen: false,
    setIsOpen: (_value: boolean) => null,
  })
