import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { FC } from 'react';
import { useParams } from 'react-router';
import { Breadcrumbs, Button, Divider, Grid, IconButton, Paper, Typography } from '@mui/material';
import { AddShoppingCart, CalendarToday, Favorite, Share } from '@mui/icons-material';
import { addProductToCart } from '../store/reducers/cart.slice';
import { ProductProjection } from '@commercetools/platform-sdk';
import styles from './ProductDetails.module.scss';
import { dateConverter } from '../utils/dateConverter';
import { Link } from 'react-router-dom';

const ProductDetails: FC = () => {
  const { id: key } = useParams();

  const product = useAppSelector((store) => store.products.items.find((item) => item.key === key)) as ProductProjection;
  const dispatch = useAppDispatch();

  const addToCart = (product: ProductProjection) => {
    dispatch(addProductToCart(product));
  };

  const description = product.description && product.description['en-US'].split('\n').filter((elem) => elem !== '');

  return (
    <div>
      <Grid container padding={2}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Typography color="text.primary">{product.name['en-US'].slice(0, 22).concat('...')}</Typography>
        </Breadcrumbs>
      </Grid>
      <Paper className={styles.root}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} padding={2}>
            <img
              src={product.masterVariant?.images?.[0]?.url || ''}
              alt={product.name['en-US']}
              className={styles.productImage}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} padding={2} className={styles.productInfo}>
            <Typography variant="h4" gutterBottom>
              {product.name['en-US']}
            </Typography>
            <Typography variant="body2" color="textSecondary" className={styles.data}>
              {<CalendarToday />} {dateConverter(product.createdAt)}
            </Typography>

            {description &&
              description.map((item, index) => (
                <Typography key={index} variant="body1" gutterBottom>
                  {item}
                </Typography>
              ))}

            <Typography variant="h5" gutterBottom>
              ${(product.masterVariant?.prices?.[0]?.value?.centAmount ?? 0) / 100}
            </Typography>
            <div className={styles.buttons}>
              <Button size="small" variant="outlined" endIcon={<AddShoppingCart />} onClick={() => addToCart(product)}>
                Add to cart
              </Button>
              <IconButton aria-label="Add to Favorites">
                <Favorite />
              </IconButton>
              <IconButton aria-label="Share">
                <Share />
              </IconButton>
            </div>
            <Divider />
            <Typography variant="body2" color="textSecondary" className={styles.productInfo}>
              Additional information about the product can be displayed here.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ProductDetails;
