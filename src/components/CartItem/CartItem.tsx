import { FC } from 'react';
import styles from './CartItem.module.scss';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch } from '../../hooks/redux';
import { ICartItem, changeProductCount, deleteProductFromCart } from '../../store/reducers/user.slice';

type CartItemPropsType = {
  item: ICartItem;
};

const CartItem: FC<CartItemPropsType> = ({ item }) => {
  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(changeProductCount({ id: item.id, type: 'plus' }));
  };
  const decrement = () => {
    dispatch(changeProductCount({ id: item.id, type: 'minus' }));
  };
  return (
    <div className={styles.body}>
      <div className={styles.row}>
        <div className={styles.image}>
          <img src={item.product.masterData.staged.masterVariant?.images?.[0]?.url || ''} alt="product image" />
        </div>
        <div className={styles.content}>
          <h4 data-testid="product-title">{item.product.masterData.current.name['en-US']}</h4>
          <p>{item.product.masterData.current.name['en-US']}</p>
        </div>
        <div className={styles.quantuty}>
          <IconButton aria-label="delete" size="large" onClick={decrement}>
            <RemoveIcon fontSize="inherit" />
          </IconButton>
          <span data-testid="item-count">{item.count}</span>
          <IconButton aria-label="delete" size="large" onClick={increment}>
            <AddIcon fontSize="inherit" />
          </IconButton>
        </div>
        <div className={styles.price}>
          {(item.product.masterData?.staged?.masterVariant?.prices?.[0]?.value?.centAmount ?? 0) / 100}
        </div>
        <IconButton aria-label="delete" size="large" onClick={() => dispatch(deleteProductFromCart(item.id))}>
          <DeleteSharpIcon fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
