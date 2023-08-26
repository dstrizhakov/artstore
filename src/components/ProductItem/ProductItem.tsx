// ProductCard.js

import React from 'react';
import { Card, CardHeader, CardMedia } from '@mui/material';

import { Link } from 'react-router-dom';
import { ProductProjection } from '@commercetools/platform-sdk';
import { dateConverter } from '../../utils/dateConverter';
import styles from './ProductItem.module.scss';

interface ProductCardProps {
  product: ProductProjection;
}

const ProductItem: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={product.key || '/'} className={styles.productLink}>
      <Card key={product.key} variant="outlined" className={styles.productCard}>
        <CardMedia
          component="img"
          height="200"
          image={(product && product.masterVariant?.images?.[0]?.url) || ''}
          alt={product.name['en-US']}
        />
        <CardHeader title={product.name['en-US']} subheader={dateConverter(product.createdAt)}></CardHeader>

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
