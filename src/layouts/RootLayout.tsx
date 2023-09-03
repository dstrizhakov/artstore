import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router';
import Container from '@mui/material/Container';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setError } from '../store/reducers/products.slice';

const RootLayout: FC = (): ReactNode => {
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.products.error);
  const handleCloseSnackbar = () => {
    dispatch(setError(null));
  };
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Container maxWidth="xl">
          <Outlet />
          <Snackbar open={Boolean(error)} autoHideDuration={6000} onClose={handleCloseSnackbar}>
            <MuiAlert elevation={6} variant="filled" severity="error" onClose={handleCloseSnackbar}>
              {error}
            </MuiAlert>
          </Snackbar>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
