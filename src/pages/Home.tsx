import { FC, useEffect, useCallback } from 'react';
import { searchProducts } from '../api/requests';
import MainSlider from '../components/MainSlider/MainSlider';
import MainInfo from '../components/MainInfo/MainInfo';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import styles from './Home.module.scss';
import { Image, ProductProjection } from '@commercetools/platform-sdk';
import { setProducts, setLoading, setError } from '../store/reducers/products.slice';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setPagination } from '../store/reducers/filters.slice';

interface ISlide {
  id: string;
  img: string;
  images: Image[];
  title: string;
}

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.products.items);
  const loading = useAppSelector((store) => store.products.loading);
  const error = useAppSelector((store) => store.products.error);

  const getSlides = (products: ProductProjection[]): ISlide[] => {
    return products.map((item) => {
      const firstImage = item.masterVariant.images?.[0];
      return {
        id: item.id,
        img: firstImage?.url || '',
        images: item.masterVariant.images || [],
        title: item.name['en-US'],
      };
    });
  };

  const fetchData = useCallback(async (): Promise<void> => {
    dispatch(setLoading(true));
    try {
      const responce = await searchProducts('', true, 10, 0);
      dispatch(setProducts(responce.results));
      dispatch(setPagination(responce));
    } catch (e) {
      dispatch(setError('Произошла ошибка при получении данных'));
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleCloseSnackbar = () => {
    dispatch(setError(null));
  };

  return (
    <div className={styles.wrapper}>
      <h2>Home Page</h2>
      {loading && products ? (
        <div className={styles.loadingOverlay}>
          <CircularProgress size={100} />
        </div>
      ) : error ? (
        <Snackbar open={Boolean(error)} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <MuiAlert elevation={6} variant="filled" severity="error" onClose={handleCloseSnackbar}>
            {error}
          </MuiAlert>
        </Snackbar>
      ) : (
        <>
          <MainSlider slides={getSlides(products)} />
          <MainInfo />
        </>
      )}
    </div>
  );
};

export default Home;
