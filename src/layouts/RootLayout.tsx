import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';

const RootLayout: FC = (): ReactNode => {
  return (
    <div>
      <Header />

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
