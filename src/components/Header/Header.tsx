import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

const Header: FC = (): ReactNode => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.wrapper}>
          <h1>Artstore</h1>
          <nav className={style.nav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="shop">Shop</NavLink>
            <NavLink to="cart">Cart</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="login">Login</NavLink>
            <NavLink to="register">Register</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
