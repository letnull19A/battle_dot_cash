import { createContext } from 'react';

export type TMenuContext = {
 isOpen: boolean
 setIsOpen: (value: boolean) => void
}

export const MenuContext = createContext<TMenuContext>({
 isOpen: false,
 setIsOpen: (value: boolean) => null
});
