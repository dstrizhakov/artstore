import { FC } from 'react';
import styles from './RenderPrice.module.scss';
import Stack from '@mui/material/Stack';

interface RenderPriceProps {
  price: number;
  discount: number;
}

const RenderPrice: FC<RenderPriceProps> = ({ price, discount }) => {
  if (discount) {
    return (
      <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
        <div className={styles.price}>${price / 100}</div>
        <div className={styles.discount}>${discount / 100}</div>
        <div>Discount {Math.floor((price / discount) * 100 - 100)}%</div>
      </Stack>
    );
  } else {
    return (
      <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
        <div className={styles.nodiscount}>${price / 100}</div>
      </Stack>
    );
  }
};

export default RenderPrice;
