import React, { useState } from 'react';
import { Button, Card, CardActions, CardHeader, CardMedia, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { ProductProjection } from '@commercetools/platform-sdk';
import { dateConverter } from '../../utils/dateConverter';
import styles from './ProductItem.module.scss';
import RenderPrice from '../../components/RenderPrice/RenderPrice';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { incrementLineItem } from '../../api/requests';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { createStoreCart } from '../../store/reducers/commerceCart.slice';
import { setError } from '../../store/reducers/products.slice';

interface ProductCardProps {
  product: ProductProjection;
}

const ProductItem: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((store) => store.storeCart.cart);

  const [isDisabled, setIsDisabled] = useState(false);

  const addToCart = async (product: ProductProjection) => {
    setIsDisabled(true);
    if (!product.key) return;
    try {
      const response = await incrementLineItem(cart.id, cart.version, product.id, 1);
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
    <div className={styles.productWrapper}>
      <Card key={product.key} variant="outlined" className={styles.productCard}>
        <CardMedia
          component="img"
          height="200"
          image={(product && product.masterVariant?.images?.[0]?.url) || ''}
          alt={product.name['en-US']}
        />
        <CardHeader
          title={product.name['en-US']}
          subheader={dateConverter(product.createdAt)}
          className={styles.details}
        ></CardHeader>
        <Stack direction="row" spacing={2} justifyContent="space-between" sx={{ p: 2, flexWrap: 'wrap' }}>
          <CardActions>
            <RenderPrice
              price={product.masterVariant?.prices?.[0]?.value?.centAmount ?? 0}
              discount={product.masterVariant?.prices?.[0]?.discounted?.value?.centAmount ?? 0}
            />
          </CardActions>
          <Stack spacing={2}>
            <Link data-id={product.id} to={product.key || '/'}>
              <Button variant="outlined">Info</Button>
            </Link>

            <Button
              disabled={isDisabled}
              variant="outlined"
              endIcon={<AddShoppingCartIcon />}
              onClick={() => addToCart(product)}
            >
              Add to cart
            </Button>
          </Stack>
        </Stack>
      </Card>
    </div>
  );
};

export default ProductItem;
