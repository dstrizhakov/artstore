import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { logout } from '../../store/reducers/userOwn.slice';

interface IActive {
  isActive: boolean;
}
const setActive = ({ isActive }: IActive) => (isActive ? style.active : style.link);

export const Navigation: FC = (): ReactNode => {
  const user = useAppSelector((state) => state.userOwn.name);
  const cartTotal = useAppSelector((state) => state.cart.total);
  // const cartTotal = useAppSelector((state) => state.user.cart.total);
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
        <Badge badgeContent={cartTotal} color="primary">
          <ShoppingCartIcon color="action" />
        </Badge>
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
