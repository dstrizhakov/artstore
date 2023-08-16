import { ReactNode, FC } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';
import RootLayout from './layouts/RootLayout';
import ShopLayout from './layouts/ShopLayout';
import Profile from './pages/Profile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="shop" element={<ShopLayout />}>
        <Route index element={<Shop />} />
        <Route path=":id" element={<ProductDetails />} errorElement={<NotFound />} />
      </Route>

      <Route path="cart" element={<Cart />} />
      <Route path="profile" element={<Profile />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
const App: FC = (): ReactNode => {
  return <RouterProvider router={router} />;
};

export default App;
