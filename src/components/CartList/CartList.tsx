import { FC, useEffect, useState } from 'react';
import styles from './CartList.module.scss';
import { clearCart } from '../../store/reducers/cart.slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import CartItem from '../CartItem/CartItem';
import Modal from '../Modal/Modal';
import Button from '@mui/material/Button';
import { Box, Chip, Stack, Typography } from '@mui/material';
import {
  addDiscountCode,
  createCart,
  getDiscountsCodes,
  recalculateCart,
  removeDiscountCode,
} from '../../api/requests';
import { createStoreCart } from '../../store/reducers/commerceCart.slice';
import { setError } from '../../store/reducers/products.slice';
import { DiscountCode } from '@commercetools/platform-sdk';

const CartList: FC = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useAppDispatch();
  const cartTotal = useAppSelector((state) => state.storeCart.cart.totalPrice.centAmount / 100);
  const cartList = useAppSelector((state) => state.storeCart.cart.lineItems);
  const totalCount = useAppSelector((state) => state.storeCart.cart.totalLineItemQuantity);
  const cart = useAppSelector((state) => state.storeCart.cart);

  const [discounts, setDiscounts] = useState<DiscountCode[]>([]);

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

  const getDiscounts = async () => {
    try {
      const response = await getDiscountsCodes();
      // dispatch(createStoreCart(response.body));
      setDiscounts(response.body.results);
      console.log(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      }
    }
  };

  useEffect(() => {
    getDiscounts();
  }, []);

  const addDiscount = async (code: string) => {
    try {
      const response = await addDiscountCode(cart.id, cart.version, code);
      dispatch(createStoreCart(response.body));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      }
    }
  };

  const removeDiscount = async (code: string) => {
    try {
      const response = await removeDiscountCode(cart.id, cart.version, code);
      dispatch(createStoreCart(response.body));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      }
    }
  };

  const recalculate = async () => {
    try {
      const response = await recalculateCart(cart.id, cart.version, true);
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

      {totalCount && (
        <>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
            <Typography>Available discount codes:</Typography>
            {discounts.map((item) => (
              <Chip key={item.id} label={item.code} onClick={() => addDiscount(item.code)} />
            ))}
          </Stack>
        </>
      )}
      {cart.discountCodes.length !== 0 && (
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Active discount codes:</Typography>
          <Stack direction="row" spacing={1}>
            {cart.discountCodes.map((item) => (
              <Chip
                key={item.discountCode.id}
                label={discounts.find((discount) => discount.id === item.discountCode.id)?.code}
                onDelete={() => removeDiscount(item.discountCode.id)}
              />
            ))}
          </Stack>
        </Stack>
      )}
      {totalCount ? (
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={2}>
            <Button size="large" variant="contained" onClick={completeOrder}>
              Make order
            </Button>
            <Button size="large" color="success" variant="contained" onClick={recalculate}>
              Recalculate
            </Button>
            <Button size="large" color="warning" variant="contained" onClick={removeAllItems}>
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
