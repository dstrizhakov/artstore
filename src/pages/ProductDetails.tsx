import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { FC, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { getProductByKey } from '../api/getProductByKey';
import { setProduct, setLoading, setError } from '../store/reducers/products.slice';

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

  console.dir(product)
  return (
    <div>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </div>
      ) : (
        
        <div>{product.id}</div>
        
      
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
