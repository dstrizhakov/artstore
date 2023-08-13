import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router';
import Container from '@mui/material/Container';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const RootLayout: FC = (): ReactNode => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
