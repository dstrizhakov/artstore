import { FC } from 'react';
import styles from './Footer.module.scss';
import Container from '@mui/material/Container';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="xl">
        <div className={styles.wrapper}>
          <h2>Footer</h2>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
