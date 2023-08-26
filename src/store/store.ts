import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/products.slice';
import cartReducer from './reducers/cart.slice';
import userReducer from './reducers/user.slice';
import addressReducer from './reducers/address.slice';
import filtersReducer from './reducers/filters.slice';

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  cart: cartReducer,
  addresses: addressReducer,
  filters: filtersReducer,
});

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('store');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('store', serializedState);
  } catch (error) {
    console.error(error);
  }
};

export const setupStore = () => {
  const initialState = loadState();
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });

  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
