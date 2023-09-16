import React, { FC, useState } from 'react';
import styles from './CartItem.module.scss';
import { IconButton, Typography } from '@mui/material';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { LineItem } from '@commercetools/platform-sdk';
import { incrementLineItem, decrementLineItem } from '../../api/requests';
import { createStoreCart } from '../../store/reducers/commerceCart.slice';
import { setError } from '../../store/reducers/products.slice';

interface CartItemProps {
  item: LineItem;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
  const cartId = useAppSelector((store) => store.storeCart.cart.id);
  const cartVersion = useAppSelector((store) => store.storeCart.cart.version);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useAppDispatch();

  const increment = async () => {
    setIsDisabled(true);
    try {
      const response = await incrementLineItem(cartId, cartVersion, item.productId, 1);
      dispatch(createStoreCart(response.body));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      }
    } finally {
      setIsDisabled(false);
    }
  };

  const decrement = async () => {
    setIsDisabled(true);
    try {
      const response = await decrementLineItem(cartId, cartVersion, item.id, 1);
      dispatch(createStoreCart(response.body));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      }
    } finally {
      setIsDisabled(false);
    }
  };

  const deleteItem = async () => {
    setIsDisabled(true);
    try {
      const response = await decrementLineItem(cartId, cartVersion, item.id, item.quantity);
      dispatch(createStoreCart(response.body));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      }
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.row}>
        <div className={styles.image}>
          <img src={item.variant.images?.[0]?.url || ''} alt={item.name['en-US']} />
        </div>
        <div className={styles.content}>
          <Typography variant="h6">{item.name['en-US']}</Typography>
          <Typography variant="body1">
            {/* {item.product.masterData.current.description && item.product.masterData.current.description['en-US']} */}
          </Typography>
        </div>
        <div className={styles.quantity}>
          <IconButton disabled={isDisabled} aria-label="decrement" size="large" onClick={decrement}>
            <RemoveIcon />
          </IconButton>
          <span data-testid="count">{item.quantity}</span>
          <IconButton disabled={isDisabled} aria-label="increment" size="large" onClick={increment}>
            <AddIcon />
          </IconButton>
        </div>
        <Typography data-testid="price" variant="body1" className={styles.price}>
          {item.price.value.centAmount / 100}
          {/* {item.product.masterData?.staged?.masterVariant?.prices?.[0]?.discounted?.value?.centAmount ?? 0
            ? (item.product.masterData?.staged?.masterVariant?.prices?.[0]?.discounted?.value?.centAmount ?? 0) / 100
            : (item.product.masterData?.staged?.masterVariant?.prices?.[0]?.value?.centAmount ?? 0) / 100} */}
        </Typography>
        <IconButton disabled={isDisabled} aria-label="delete" size="large" onClick={deleteItem}>
          <DeleteSharpIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
