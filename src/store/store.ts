import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/products.slice';
import userReducer from './reducers/user.slice';
import cartReducer from './reducers/cart.slice';
import userOwnReducer from './reducers/userOwn.slice';

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  userOwn: userOwnReducer,
  cart: cartReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
