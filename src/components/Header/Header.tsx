import { FC, ReactNode } from 'react';
import style from './Header.module.scss';
import Container from '@mui/material/Container';
import { Navigation } from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

const Header: FC = (): ReactNode => {
  return (
    <header className={style.header}>
      <Container maxWidth="xl">
        <div className={style.wrapper}>
          <Link to="/">
            <div className={style.logo}>
              <h4>Arina&apos;s fineart</h4>
              <p>Artworks for your home</p>
            </div>
          </Link>
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
