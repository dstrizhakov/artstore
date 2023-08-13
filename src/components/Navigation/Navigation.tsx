import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Button from '@mui/material/Button';
import { logout } from '../../store/reducers/user.slice';

interface IActive {
  isActive: boolean;
}
const setActive = ({ isActive }: IActive) => (isActive ? style.active : style.link);

export const Navigation: FC = (): ReactNode => {
  const user = useAppSelector((state) => state.user.user.name);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

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
      {user ? (
        <>
          <span>Welcome, {user}!</span>
          <Button variant="text" onClick={handleLogout}>
            Logout
          </Button>
        </>
      ) : (
        <>
          <NavLink to="login" className={setActive}>
            Login
          </NavLink>
          <NavLink to="register" className={setActive}>
            Register
          </NavLink>
        </>
      )}
    </nav>
  );
};
