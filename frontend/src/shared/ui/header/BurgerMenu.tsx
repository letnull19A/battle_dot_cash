import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@ui';
import styles from './style.module.scss';
import {MenuContext} from "@contexts/menuContext"

export const BurgerMenu = () => {
  const menuContext = useContext(MenuContext)

  const data: Array<{ text: string; path: string }> = [
    { text: 'Главная', path: '/' },
    { text: 'Аккаунт', path: '/account' },
    { text: 'Пополнить баланс', path: '/balance' },
    { text: 'Игры', path: '/games' },
    { text: 'Рефералы', path: '/refs' },
  ];

  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    console.log(menuContext.isOpen);
    if (!menuContext.isOpen && isDisabled) {
      var timeout = setTimeout(() => {
        setIsDisabled(true);
      }, 2000);
    } else {
      if (timeout !== undefined) clearTimeout(timeout);
      setIsDisabled(false);
    }
  }, [menuContext.isOpen, isDisabled]);

  useEffect(() => {
    console.log(isDisabled);
  }, [isDisabled]);

  return (
    <div
      className={[
        styles.burgerMenu,
        isDisabled ? styles.disabled : styles.enabled,
        menuContext.isOpen ? styles.show : styles.hidden,
      ].join(' ')}
    >
      <Container>
        <ul>
          {data.map((item, index) => (
            <BurgerMenuItem {...item} key={index} />
          ))}
        </ul>
      </Container>
    </div>
  );
};

type TBurgerMenuItemProps = {
  text: string;
  path: steing;
  style?: string;
};

const BurgerMenuItem = (props: TBurgerMenuItemProps) => {
  const { text, path, style } = props;
  const navigate = useNavigate();

  const menuContext = useContext(MenuContext)

  return (
    <li className={styles.burgerMenuItem} style={style}>
      <span onClick={() => {
navigate(path)
menuContext.setIsOpen(false)
}}>{text}</span>
    </li>
  );
};
