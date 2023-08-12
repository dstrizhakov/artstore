import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@commercetools/platform-sdk';

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  loading: true,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setProducts, setLoading, setError } = productsSlice.actions;

export default productsSlice.reducer;
