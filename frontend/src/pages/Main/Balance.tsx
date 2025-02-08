import { Card } from 'primereact/card';
import styles from './style.module.scss';

export const Balance = () => {
  return (
    <Card title="Ваш баланс" className={[styles.cardBalance, 'p-3'].join(' ')}>
      <p className="mt-3">1200 rub</p>
    </Card>
  );
};
