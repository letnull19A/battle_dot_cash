import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@ui';
import styles from './style.module.scss';

type TBurgerMenuPros = {
  isOpen: boolean;
};

export const BurgerMenu = (props: TBurgerMenuProps) => {
  const { isOpen } = props;

  const data: Array<{ text: string; path: string }> = [
    { text: 'Главная', path: '/' },
    { text: 'Аккаунт', path: '/account' },
    { text: 'Пополнить баланс', path: '/balance' },
    { text: 'Игры', path: '/games' },
    { text: 'Рефералы', path: '/refs' },
  ];

  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    console.log(isOpen);
    if (!isOpen && isDisabled) {
      var timeout = setTimeout(() => {
        setIsDisabled(true);
      }, 2000);
    } else {
      if (timeout !== undefined) clearTimeout(timeout);
      setIsDisabled(false);
    }
  }, [isOpen, isDisabled]);

  useEffect(() => {
    console.log(isDisabled);
  }, [isDisabled]);

  return (
    <div
      className={[
        styles.burgerMenu,
        isDisabled ? styles.disabled : styles.enabled,
        isOpen ? styles.show : styles.hidden,
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

  return (
    <li className={styles.burgerMenuItem} style={style}>
      <span onClick={() => navigate(path)}>{text}</span>
    </li>
  );
};
