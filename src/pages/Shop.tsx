import { FC, useEffect, useCallback } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setProducts, setLoading, setError } from '../store/reducers/products.slice';
import { searchProducts } from '../api/requests';
import ShopPagination from '../components/ShopPagination/ShopPagination';
import ProductItem from '../components/ProductItem/ProductItem';
import { Grid, Stack, Typography } from '@mui/material';
import Filter from '../components/Filters/Filter';
import { setPagination } from '../store/reducers/filters.slice';

export interface IArtwork {}
export interface IResponce {}

const Shop: FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items);
  const loading = useAppSelector((state) => state.products.loading);

  const limit = useAppSelector((state) => state.filters.pagination.limit);
  const offset = useAppSelector((state) => state.filters.pagination.offset);
  const searchString = useAppSelector((state) => state.filters.search);
  const isFuzzy = useAppSelector((state) => state.filters.isFuzzy);
  const categoryId = useAppSelector((state) => state.filters.categoryId);
  const typeId = useAppSelector((state) => state.filters.typeId);
  const sort = useAppSelector((state) => state.filters.sort);
  const priceRange = useAppSelector((state) => state.filters.priceRange);

  const fetchData = useCallback(async (): Promise<void> => {
    dispatch(setLoading(true));
    try {
      const responce = await searchProducts(searchString, isFuzzy, limit, offset, categoryId, typeId, sort, priceRange);
      dispatch(setProducts(responce.results));
      dispatch(setPagination(responce));
    } catch (e) {
      dispatch(setError('Произошла ошибка при получении данных'));
    }
  }, [dispatch, limit, offset, searchString, isFuzzy, categoryId, typeId, sort, priceRange]);

  useEffect(() => {
    fetchData();
  }, [fetchData, limit, offset, searchString, isFuzzy, categoryId, typeId, sort, priceRange]);

  return (
    <div>
      <h2>Shop Page</h2>
      <Filter />
      <ShopPagination />

      {loading ? (
        <div style={{ textAlign: 'center' }}>
          <CircularProgress size={100} />
        </div>
      ) : (
        <Grid container spacing={2}>
          {!products.length && (
            <Typography variant="h6" sx={{ margin: '0 auto', padding: 2 }}>
              Nothing found by your request...
            </Typography>
          )}
          {products.map((product, index) => (
            <Grid key={index} item xs={12} sm={6} md={6} lg={4}>
              <Stack alignItems="stretch" justifyContent="space-between" height="100%">
                <ProductItem product={product} />
              </Stack>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Shop;
