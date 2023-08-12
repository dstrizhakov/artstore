import { FC, ReactNode } from 'react';
import style from './Header.module.scss';
import { Navigation } from '../Navigation/Navigation';

const Header: FC = (): ReactNode => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.wrapper}>
          <h1>
            Fineart <span className="font-normal">Store</span>
          </h1>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
