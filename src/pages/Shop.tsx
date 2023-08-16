import { FC, useEffect, useCallback } from 'react';
import Button from '@mui/material/Button';
import { Card, CardActions, CardHeader, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Stack from '@mui/material/Stack';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setProducts, setLoading, setError } from '../store/reducers/products.slice';
import { getProducts } from '../api/requests';
import styles from './Shop.module.scss';
import { Product } from '@commercetools/platform-sdk';
import { addProductToCart } from '../store/reducers/cart.slice';
import { dateConverter } from '../utils';

export interface IArtwork {}
export interface IResponce {}

const Shop: FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.products.items);
  const loading = useAppSelector((store) => store.products.loading);
  const error = useAppSelector((store) => store.products.error);

  const handleCloseSnackbar = () => {
    dispatch(setError(null));
  };

  const fetchData = useCallback(async (): Promise<void> => {
    dispatch(setLoading(true));
    try {
      const items = await getProducts();
      dispatch(setProducts(items.results));
    } catch (e) {
      dispatch(setError('Произошла ошибка при получении данных'));
    }
  }, [dispatch]);

  useEffect(() => {
    if (products.length === 0) {
      fetchData();
    }
  }, [products, fetchData]);

  const addToCart = (product: Product) => {
    dispatch(addProductToCart(product));
  };

  return (
    <div>
      <h2>Shop Page</h2>
      {loading ? (
        <div className={styles.loadingOverlay}>
          <CircularProgress size={100} />
        </div>
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4}>
              <Card key={product.id} variant="outlined">
                <CardMedia
                  component="img"
                  height="200"
                  image={product.masterData.staged.masterVariant?.images?.[0]?.url || ''}
                  alt={product.masterData.current.name['en-US']}
                />
                <CardHeader
                  title={product.masterData.current.name['en-US']}
                  subheader={dateConverter(product.createdAt)}
                ></CardHeader>

                <CardActions>
                  <Stack direction="row" spacing={3}>
                    <Button
                      size="small"
                      variant="outlined"
                      endIcon={<AddShoppingCartIcon />}
                      onClick={() => addToCart(product)}
                    >
                      Add to cart
                    </Button>
                    <Button size="small" variant="text" href={'shop/' + product.key}>
                      Learn More
                    </Button>
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <Snackbar open={Boolean(error)} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert elevation={6} variant="filled" severity="error" onClose={handleCloseSnackbar}>
          {error}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default Shop;
