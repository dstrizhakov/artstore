import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart } from '@commercetools/platform-sdk';

export interface ICart {
  cart: Cart;
}

export const initialCartState: ICart = {
  cart: {} as Cart,
};

const commerceCart = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    createStoreCart: (state, action: PayloadAction<Cart>) => {
      state.cart = action.payload;
    },
  },
});

export const { createStoreCart } = commerceCart.actions;

export default commerceCart.reducer;
