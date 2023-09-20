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
      <Stack
        className={styles.container_price}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={1}
      >
        <div className={styles.price}>${price / 100}</div>
        <div className={styles.discount}>${discount / 100}</div>
        <div> -{(100 - (discount / price) * 100).toFixed(0)}%</div>
      </Stack>
    );
  } else {
    return (
      <Stack direction="row" justifyContent="flex-start" alignItems="flex-end" spacing={1}>
        <div className={styles.nodiscount}>${price / 100}</div>
      </Stack>
    );
  }
};

export default RenderPrice;
