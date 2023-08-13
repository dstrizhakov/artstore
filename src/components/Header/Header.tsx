import { FC, ReactNode } from 'react';
import style from './Header.module.scss';
import Container from '@mui/material/Container';
import { Navigation } from '../Navigation/Navigation';

const Header: FC = (): ReactNode => {
  return (
    <header className={style.header}>
      <Container maxWidth="xl">
        <div className={style.wrapper}>
          <h1>
            Fineart <span className="font-normal">Store</span>
          </h1>
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
