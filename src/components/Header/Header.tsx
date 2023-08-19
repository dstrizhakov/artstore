import { FC, ReactNode } from 'react';
import style from './Header.module.scss';
import PrimarySearchAppBar from '../PrimaryAppBar/PrimaryAppBar';

const Header: FC = (): ReactNode => {
  return (
    <header className={style.header}>
      <PrimarySearchAppBar />
    </header>
  );
};

export default Header;
