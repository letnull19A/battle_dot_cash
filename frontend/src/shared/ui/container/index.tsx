import { JSX } from 'react';
import style from './style.module.scss';

type TContainerProps = {
  children?: JSX.Element;
};

export const Container = (props: TContainerProps) => {
  const { children } = props;

  return <div className={style.container}>{children}</div>;
};
