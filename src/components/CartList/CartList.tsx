import { FC, useCallback, useEffect, useState } from 'react';
import styles from './CartList.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import CartItem from '../CartItem/CartItem';
import Modal from '../Modal/Modal';
import Button from '@mui/material/Button';
import { Chip, Stack, Typography } from '@mui/material';
import { addDiscountCode, createCart, getDiscountsCodes, removeDiscountCode } from '../../api/requests';
import { createStoreCart } from '../../store/reducers/commerceCart.slice';
import { setError } from '../../store/reducers/products.slice';
import { DiscountCode } from '@commercetools/platform-sdk';

const CartList: FC = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useAppDispatch();
  const cartTotal = useAppSelector((state) => state.storeCart.cart.totalPrice.centAmount / 100);
  const cartListItems = useAppSelector((state) => state.storeCart.cart.lineItems);
  const totalCount = useAppSelector((state) => state.storeCart.cart.totalLineItemQuantity);
  const cart = useAppSelector((state) => state.storeCart.cart);

  const [discounts, setDiscounts] = useState<DiscountCode[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const completeOrder = async () => {
    setModal(true);
    setTimeout(() => {
      removeAllItems();
      setModal(false);
    }, 1500);
  };

  const removeAllItems = async () => {
    setIsDisabled(true);
    try {
      const response = await createCart();
      dispatch(createStoreCart(response.body));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      }
    } finally {
      setIsDisabled(false);
    }
  };

  const getDiscounts = useCallback(async () => {
    try {
      const response = await getDiscountsCodes();
      setDiscounts(response.body.results);
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    getDiscounts();
  }, [getDiscounts]);

  const addDiscount = async (code: string) => {
    setIsDisabled(true);
    try {
      const response = await addDiscountCode(cart.id, cart.version, code);
      dispatch(createStoreCart(response.body));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      }
    } finally {
      setIsDisabled(false);
    }
  };

  const removeDiscount = async (code: string) => {
    setIsDisabled(true);
    try {
      const response = await removeDiscountCode(cart.id, cart.version, code);
      dispatch(createStoreCart(response.body));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      }
    } finally {
      setIsDisabled(false);
    }
  };

  // const recalculate = async () => {
  //   try {
  //     const response = await recalculateCart(cart.id, cart.version, true);
  //     dispatch(createStoreCart(response.body));
  //   } catch (error: unknown) {
  //     if (error instanceof Error) {
  //       dispatch(setError(error.message));
  //     }
  //   }
  // };

  const getPrice = () => {
    const total = cart.lineItems.reduce((acc, item) => {
      if (!item.price.discounted?.value.centAmount) return acc + item.price.value.centAmount * item.quantity;
      return acc + item.price.discounted?.value.centAmount * item.quantity;
    }, 0);

    return total / 100;
  };

  const getDiscount = () => {
    return (getPrice() - cartTotal).toFixed(2);
  };

  const isDiscounted = cart.discountCodes.length !== 0;

  return (
    <div className={styles.wrapper}>
      <Modal isOpen={modal} setIsOpen={setModal}>
        <h3>Thank you for your order!</h3>
      </Modal>
      <div className={styles.body}>
        {Array.isArray(cartListItems) && cartListItems.map((item) => <CartItem key={item.id} item={item} />)}
      </div>

      {totalCount ? (
        <Stack sx={{ p: 2, display: 'flex', direction: 'row', alignItems: 'space-between', justifyContent: 'center' }}>
          <Stack
            sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            direction={{ sm: 'column', md: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Stack sx={{ pb: 2 }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
                <Typography>Available discount codes:</Typography>
                {discounts.map((item) => (
                  <Chip
                    key={item.id}
                    disabled={isDisabled}
                    color="success"
                    variant="outlined"
                    label={item.code}
                    onClick={() => addDiscount(item.code)}
                  />
                ))}
              </Stack>
              {isDiscounted && (
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography>Active discount codes:</Typography>
                  <Stack direction="row" spacing={1}>
                    {cart.discountCodes.map((item) => (
                      <Chip
                        key={item.discountCode.id}
                        disabled={isDisabled}
                        color="success"
                        label={discounts.find((discount) => discount.id === item.discountCode.id)?.code}
                        onDelete={() => removeDiscount(item.discountCode.id)}
                      />
                    ))}
                  </Stack>
                </Stack>
              )}
            </Stack>
            <Stack direction="column" alignItems="flex-end">
              {isDiscounted && (
                <>
                  <Typography variant="h6">Subtotal: {getPrice()}$</Typography>
                  <Typography variant="h6">Discount: {getDiscount()}$</Typography>
                </>
              )}
              <Typography variant="h4">Total: {cartTotal.toFixed(2)}$</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ alignSelf: 'center' }}>
            <Button size="large" disabled={isDisabled} variant="contained" onClick={completeOrder}>
              Make order
            </Button>
            <Button size="large" disabled={isDisabled} color="warning" variant="contained" onClick={removeAllItems}>
              Clear cart
            </Button>
          </Stack>
        </Stack>
      ) : (
        <h3>Cart is empty...</h3>
      )}
    </div>
  );
};

export default CartList;
