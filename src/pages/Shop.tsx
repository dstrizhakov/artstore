import React, { FC, useEffect, useCallback } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setProducts, setLoading, setError } from '../store/reducers/products.slice';
import { getProducts, searchProducts } from '../api/requests';
import ShopPagination from '../components/ShopPagination/ShopPagination';
import { setPagination } from '../store/reducers/filters.slice';
import ProductItem from '../components/ProductItem/ProductItem';
import { Grid, Stack } from '@mui/material';
import Filter from '../components/Filters/Filter';

export interface IArtwork {}
export interface IResponce {}

const Shop: FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items);
  const loading = useAppSelector((state) => state.products.loading);
  const error = useAppSelector((state) => state.products.error);

  const limit = useAppSelector((state) => state.filters.pagination.limit);
  const offset = useAppSelector((state) => state.filters.pagination.offset);

  const handleCloseSnackbar = () => {
    dispatch(setError(null));
  };

  const fetchData = useCallback(async (): Promise<void> => {
    dispatch(setLoading(true));
    try {
      console.log('getProducts', await getProducts(limit, offset));
      const responce = await searchProducts('', limit, offset);
      dispatch(setProducts(responce.results));
      dispatch(setPagination(responce));
    } catch (e) {
      dispatch(setError('Произошла ошибка при получении данных'));
    }
  }, [dispatch, limit, offset]);

  useEffect(() => {
    if (products.length === 0) {
      fetchData();
    }
  }, [products, fetchData, limit, offset]);

  return (
    <div>
      <h2>Shop Page</h2>
      <ShopPagination />
      <Filter />
      {loading ? (
        <div style={{ textAlign: 'center' }}>
          <CircularProgress size={100} />
        </div>
      ) : (
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Stack alignItems="stretch" justifyContent="space-between" height="100%">
                <ProductItem product={product} />
              </Stack>
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
