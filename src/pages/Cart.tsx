import { FC } from 'react';
import styles from './Cart.module.scss';
import CartList from '../components/CartList/CartList';

const Cart: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Cart Page</h2>
      <CartList />
    </div>
  );
};

export default Cart;
