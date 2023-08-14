// import React, { FC } from 'react';
// import styles from './CartItem.module.scss';
// import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
// import RemoveIcon from '@mui/icons-material/Remove';
// import AddIcon from '@mui/icons-material/Add';
// import IconButton from '@mui/material/IconButton';
// import { useAppDispatch } from '../../hooks/redux';
// import { ICartItem, changeProductCount, deleteProductFromCart } from '../../store/reducers/user.slice';

// interface CartItemProps {
//   item: ICartItem;
// }

// const CartItem: FC<CartItemProps> = ({ item }) => {
//   const dispatch = useAppDispatch();

//   const increment = () => {
//     dispatch(changeProductCount({ id: item.id, type: 'plus' }));
//   };

//   const decrement = () => {
//     dispatch(changeProductCount({ id: item.id, type: 'minus' }));
//   };

//   const deleteItem = () => {
//     dispatch(deleteProductFromCart(item.id));
//   };

//   return (
//     <div className={styles.body}>
//       <div className={styles.row}>
//         <div className={styles.image}>
//           <img src={item.product.masterData.staged.masterVariant?.images?.[0]?.url || ''} alt="product image" />
//         </div>
//         <div className={styles.content}>
//           <h4>{item.product.masterData.current.name['en-US']}</h4>
//           <p>{item.product.masterData.current.name['en-US']}</p>
//         </div>
//         <div className={styles.quantity}>
//           <IconButton aria-label="decrement" size="large" onClick={decrement}>
//             <RemoveIcon fontSize="inherit" />
//           </IconButton>
//           <span>{item.count}</span>
//           <IconButton aria-label="increment" size="large" onClick={increment}>
//             <AddIcon fontSize="inherit" />
//           </IconButton>
//         </div>
//         <div className={styles.price}>
//           {(item.product.masterData?.staged?.masterVariant?.prices?.[0]?.value?.centAmount ?? 0) / 100}
//         </div>
//         <IconButton aria-label="delete" size="large" onClick={deleteItem}>
//           <DeleteSharpIcon fontSize="inherit" />
//         </IconButton>
//       </div>
//     </div>
//   );
// };

// export default CartItem;

import React, { FC } from 'react';
import styles from './CartItem.module.scss';
import { IconButton, Typography } from '@mui/material';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch } from '../../hooks/redux';
import { ICartItem, changeProductCount, deleteProductFromCart } from '../../store/reducers/user.slice';

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
          <span>{item.count}</span>
          <IconButton aria-label="increment" size="large" onClick={increment}>
            <AddIcon />
          </IconButton>
        </div>
        <Typography variant="body1" className={styles.price}>
          {(item.product.masterData?.staged?.masterVariant?.prices?.[0]?.value?.centAmount ?? 0) / 100}
        </Typography>
        <IconButton aria-label="delete" size="large" onClick={deleteItem}>
          <DeleteSharpIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
