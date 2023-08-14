import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { FC, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { getProductByKey } from '../api/getProductByKey';
import { setProduct, setLoading, setError } from '../store/reducers/products.slice';
import { Button, Divider, Grid, IconButton, Paper, Typography } from '@mui/material';
import { AddShoppingCart, Favorite, Share } from '@mui/icons-material';
import styles from './ProductDetails.module.scss';

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

  console.dir(product);
  return (
    <div>
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
                {product.createdAt}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {product.masterData.current.description['en-US']}
              </Typography>
              <Typography variant="h5" gutterBottom>
                ${product.masterData?.staged?.masterVariant?.prices?.[0]?.value?.centAmount ?? 0}
              </Typography>
              <div className={styles.buttons}>
                <Button size="small" variant="outlined" endIcon={<AddShoppingCart />}>
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
