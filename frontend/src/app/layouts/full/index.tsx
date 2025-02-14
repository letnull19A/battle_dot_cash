import { Container } from '@ui';
import styles from './style.module.scss';

type TFullProps = {
  children: JSX.Element;
};

export const Full = (props: TFullProps) => {
  const { children } = props;

  return (
    <Container>
      <div className={styles.full}>{children}</div>
    </Container>
  );
};
