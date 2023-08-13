import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router';

const ShopLayout: FC = (): ReactNode => {
  return <Outlet />;
};

export default ShopLayout;
