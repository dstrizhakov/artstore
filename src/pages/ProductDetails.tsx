import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { FC, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { getProductByKey } from '../api/getProductByKey';
import { setProduct, setLoading, setError } from '../store/reducers/products.slice';
import { Breadcrumbs, Button, Divider, Grid, IconButton, Link, Paper, Typography } from '@mui/material';
import { AddShoppingCart, CalendarToday, Favorite, Share } from '@mui/icons-material';
import { addProductToCart } from '../store/reducers/user.slice';
import { Product } from '@commercetools/platform-sdk';
import styles from './ProductDetails.module.scss';
import { dateConverter } from '../utils';

const ProductDetails: FC = () => {
  const { id } = useParams();

  const key = id || 'undefined';

  const dispatch = useAppDispatch();
  const product = useAppSelector((store) => store.products.item);
  const loading = useAppSelector((store) => store.products.loading);
  const error = useAppSelector((store) => store.products.error);

  const handleCloseSnackbar = () => {
    dispatch(setError(null));
  };

  const fetchData = useCallback(async (): Promise<void> => {
    dispatch(setLoading(true));

    try {
      const productItem = await getProductByKey(key);

      dispatch(setProduct(productItem));
    } catch (e) {
      dispatch(setError('Произошла ошибка при получении данных'));
    }
  }, [dispatch]);

  useEffect(() => {
    if (!product.key) {
      fetchData();
    }
  }, [product, fetchData]);

  const addToCart = (product: Product) => {
    dispatch(addProductToCart(product));
  };

  // const description = product.masterData.current.description && product.masterData.current.description['en-US']

  return (
    <div>
      <Grid container padding={2}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/shop">
            Shop
          </Link>
          <Typography color="text.primary">{product.key}</Typography>
        </Breadcrumbs>
      </Grid>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </div>
      ) : (
        <Paper className={styles.root}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} padding={2}>
              <img
                src={product.masterData.staged.masterVariant?.images?.[0]?.url || ''}
                alt={product.masterData.current.name['en-US']}
                className={styles.productImage}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} spacing={2} padding={2} className={styles.productInfo}>
              <Typography variant="h4" gutterBottom>
                {product.masterData.current.name['en-US']}
              </Typography>
              <Typography variant="body2" color="textSecondary" className={styles.data}>
                {<CalendarToday />} {dateConverter(product.createdAt)}
              </Typography>

              {product.masterData.current.description &&
                product.masterData.current.description['en-US']
                  .split('\n')
                  .filter((elem) => elem !== '')
                  .map((item, index) => (
                    <Typography key={index} variant="body1" gutterBottom>
                      {item}
                    </Typography>
                  ))}

              <Typography variant="h5" gutterBottom>
                ${(product.masterData?.staged?.masterVariant?.prices?.[0]?.value?.centAmount ?? 0) / 100}
              </Typography>
              <div className={styles.buttons}>
                <Button
                  size="small"
                  variant="outlined"
                  endIcon={<AddShoppingCart />}
                  onClick={() => addToCart(product)}
                >
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
      )}
      <Snackbar open={Boolean(error)} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert elevation={6} variant="filled" severity="error" onClose={handleCloseSnackbar}>
          {error}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default ProductDetails;
