import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.scss';

interface IActive {
  isActive: boolean;
}
const setActive = ({ isActive }: IActive) => (isActive ? style.active : style.link);

export const Navigation: FC = (): ReactNode => {
  return (
    <nav className={style.nav}>
      <NavLink to="/" className={setActive}>
        Home
      </NavLink>
      <NavLink to="shop" className={setActive}>
        Shop
      </NavLink>
      <NavLink to="cart" className={setActive}>
        Cart
      </NavLink>
      <NavLink to="about" className={setActive}>
        About
      </NavLink>
      <NavLink to="login" className={setActive}>
        Login
      </NavLink>
      <NavLink to="register" className={setActive}>
        Register
      </NavLink>
    </nav>
  );
};
