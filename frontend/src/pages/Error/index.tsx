import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';

export const NotFoundErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.errorMessage}>
      <h1>Ошибка</h1>
      <h2>Страница не найдена :(</h2>
      <Button label="На главную" onClick={() => navigate('/')} />
    </div>
  );
};
