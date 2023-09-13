// ProductCard.js

import React, { useCallback } from 'react';
import { Button, Card, CardActions, CardHeader, CardMedia, Stack } from '@mui/material';
import { addProductToCart } from '../../store/reducers/cart.slice';
import { Link } from 'react-router-dom';
import { ProductProjection } from '@commercetools/platform-sdk';
import { dateConverter } from '../../utils/dateConverter';
import styles from './ProductItem.module.scss';
import RenderPrice from '../../components/RenderPrice/RenderPrice';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { getProductByKey } from '../../api/requests';
import { useAppDispatch } from '../../hooks/redux';

interface ProductCardProps {
  product: ProductProjection;
}

const ProductItem: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const getCurrentProduct = useCallback(async (key: string) => {
    if (!key) return;
    const responce = await getProductByKey(key);
    return responce;
  }, []);

  const addToCart = async (product: ProductProjection) => {
    if (!product.key) return;
    const productItem = await getCurrentProduct(product.key);
    if (productItem) {
      dispatch(addProductToCart(productItem));
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
            <Button variant="outlined" endIcon={<AddShoppingCartIcon />} onClick={() => addToCart(product)}>
              Add to cart
            </Button>
            <Button>
              <Link data-id={product.id} to={product.key || '/'}>
                Info
              </Link>
            </Button>
          </Stack>
        </Stack>
      </Card>
    </div>
  );
};

export default ProductItem;
