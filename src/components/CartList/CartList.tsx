import { FC, useState } from 'react';
import styles from './CartList.module.scss';
import { clearCart } from '../../store/reducers/user.slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import CartItem from '../CartItem/CartItem';
import Modal from '../Modal/Modal';
import Button from '@mui/material/Button';

const CartList: FC = () => {
  const [modal, setModal] = useState(false);

  const cartTotal = useAppSelector((state) => state.user.cart.price);
  const cartList = useAppSelector((state) => state.user.cart.items);
  const totalCount = useAppSelector((state) => state.user.cart.total);

  const dispatch = useAppDispatch();

  const completeOrder = async () => {
    setModal(true);
    setTimeout(() => {
      dispatch(clearCart());
      setModal(false);
    }, 1500);
  };

  return (
    <div className={styles.wrapper}>
      <Modal isOpen={modal} setIsOpen={setModal}>
        <h3>Thank you for order!</h3>
      </Modal>
      <div className={styles.body}>
        {cartList.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      {totalCount ? (
        <div className={styles.summary}>
          <Button size="large" variant="contained" onClick={completeOrder}>
            Оформить заказ
          </Button>
          <span className={styles.total} data-testid="cart-total">
            {cartTotal}
          </span>
        </div>
      ) : (
        <h3>Cart is empty...</h3>
      )}
    </div>
  );
};

export default CartList;
