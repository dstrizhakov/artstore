import React, { FC } from 'react';
import styles from './CartItem.module.scss';
import { IconButton, Typography } from '@mui/material';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch } from '../../hooks/redux';
import { ICartItem, changeProductCount, deleteProductFromCart } from '../../store/reducers/cart.slice';

interface CartItemProps {
  item: ICartItem;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(changeProductCount({ id: item.id, type: 'plus' }));
  };

  const decrement = () => {
    dispatch(changeProductCount({ id: item.id, type: 'minus' }));
  };

  const deleteItem = () => {
    dispatch(deleteProductFromCart(item.id));
  };

  return (
    <div className={styles.body}>
      <div className={styles.row}>
        <div className={styles.image}>
          <img src={item.product.masterData.staged.masterVariant?.images?.[0]?.url || ''} alt="product image" />
        </div>
        <div className={styles.content}>
          <Typography variant="h6">{item.product.masterData.current.name['en-US']}</Typography>
          <Typography variant="body1">
            {item.product.masterData.current.description && item.product.masterData.current.description['en-US']}
          </Typography>
        </div>
        <div className={styles.quantity}>
          <IconButton aria-label="decrement" size="large" onClick={decrement}>
            <RemoveIcon />
          </IconButton>
          <span data-testid="count">{item.count}</span>
          <IconButton aria-label="increment" size="large" onClick={increment}>
            <AddIcon />
          </IconButton>
        </div>
        <Typography data-testid="price" variant="body1" className={styles.price}>
          {item.product.masterData?.staged?.masterVariant?.prices?.[0]?.discounted?.value?.centAmount ?? 0
            ? (item.product.masterData?.staged?.masterVariant?.prices?.[0]?.discounted?.value?.centAmount ?? 0) / 100
            : (item.product.masterData?.staged?.masterVariant?.prices?.[0]?.value?.centAmount ?? 0) / 100}
        </Typography>
        <IconButton aria-label="delete" size="large" onClick={deleteItem}>
          <DeleteSharpIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
