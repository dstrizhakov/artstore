import { FC, useState } from 'react';
import styles from './CartList.module.scss';
import { clearCart } from '../../store/reducers/cart.slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import CartItem from '../CartItem/CartItem';
import Modal from '../Modal/Modal';
import Button from '@mui/material/Button';
import { Box, Stack } from '@mui/material';
import { createCart } from '../../api/requests';
import { createStoreCart } from '../../store/reducers/commerceCart.slice';
import { setError } from '../../store/reducers/products.slice';

const CartList: FC = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useAppDispatch();
  const cartTotal = useAppSelector((state) => state.storeCart.cart.totalPrice.centAmount / 100);
  const cartList = useAppSelector((state) => state.storeCart.cart.lineItems);
  const totalCount = useAppSelector((state) => state.storeCart.cart.totalLineItemQuantity);

  const completeOrder = async () => {
    setModal(true);
    setTimeout(() => {
      dispatch(clearCart());
      setModal(false);
    }, 1500);
  };

  const removeAllItems = async () => {
    try {
      const response = await createCart();
      dispatch(createStoreCart(response.body));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <Modal isOpen={modal} setIsOpen={setModal}>
        <h3>Thank you for your order!</h3>
      </Modal>
      <div className={styles.body}>
        {cartList.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      {totalCount ? (
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={2}>
            <Button size="large" variant="contained" onClick={completeOrder}>
              Make order
            </Button>
            <Button size="large" color="success" variant="contained" onClick={completeOrder}>
              Enter promocode
            </Button>
            <Button size="large" color="warning" variant="contained" onClick={() => removeAllItems()}>
              Clear cart
            </Button>
          </Stack>

          <div className={styles.summary}>
            <span className={styles.total}>Total: {cartTotal}</span>
          </div>
        </Box>
      ) : (
        <h3>Cart is empty...</h3>
      )}
    </div>
  );
};

export default CartList;
