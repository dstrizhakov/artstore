// ProductCard.js

import React from 'react';
import { Card, CardActions, CardHeader, CardMedia } from '@mui/material';

import { Link } from 'react-router-dom';
import { ProductProjection } from '@commercetools/platform-sdk';
import { dateConverter } from '../../utils/dateConverter';
import styles from './ProductItem.module.scss';
import RenderPrice from '../../components/RenderPrice/RenderPrice';

interface ProductCardProps {
  product: ProductProjection;
}

const ProductItem: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link data-id={product.id} to={product.key || '/'} className={styles.productLink}>
      <Card key={product.key} variant="outlined" className={styles.productCard}>
        <CardMedia
          component="img"
          height="200"
          image={(product && product.masterVariant?.images?.[0]?.url) || ''}
          alt={product.name['en-US']}
        />
        <CardHeader title={product.name['en-US']} subheader={dateConverter(product.createdAt)}></CardHeader>

        <CardActions>
          <RenderPrice
            price={product.masterVariant?.prices?.[0]?.value?.centAmount ?? 0}
            discount={product.masterVariant?.prices?.[0]?.discounted?.value?.centAmount ?? 0}
          />
        </CardActions>

        {/* <CardActions> */}
        {/* <Stack direction="row" spacing={3}> */}
        {/* <Button size="small" variant="outlined" endIcon={<AddShoppingCartIcon />} onClick={addToCart}>
              Add to cart
            </Button> */}
        {/* {product.key && (
              <Button>
                <Link to={product.key}>Learn More</Link>
              </Button>
            )} */}
        {/* </Stack> */}
        {/* </CardActions> */}
      </Card>
    </Link>
  );
};

export default ProductItem;
