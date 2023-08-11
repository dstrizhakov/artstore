import { ReactNode, FC } from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails';
import RootLayout from './layouts/RootLayout';
import ShopLayout from './layouts/ShopLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="shop" element={<ShopLayout />}>
        <Route index element={<Shop />} />
        <Route path=":id" element={<ProductDetails />} />
      </Route>

      <Route path="cart" element={<Cart />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
);
const App: FC = (): ReactNode => {
  return <RouterProvider router={router} />;
};

export default App;
