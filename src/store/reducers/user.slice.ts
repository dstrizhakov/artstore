import { Product } from '@commercetools/platform-sdk';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
  name: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}
export interface IItem {
  item: Product;
  quantity: number;
}

export interface ICart {
  items: IItem[];
  total: number;
  price: number;
}
export interface ProductsState {
  user: IUser;
  cart: ICart;
}

const initialState: ProductsState = {
  user: {
    name: '',
    email: '',
    accessToken: '',
    refreshToken: '',
  },
  cart: {
    items: [],
    total: 0,
    price: 0,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = initialState.user;
      state.cart = initialState.cart;
      console.log(state);
    },
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const cart = state.cart as ICart;
      const itemIndex = cart.items.findIndex((item) => item.item.id === action.payload.id);

      if (itemIndex >= 0) {
        cart.items[itemIndex].quantity += 1;
      } else {
        cart.items.push({ item: action.payload, quantity: 1 });
      }

      userSlice.caseReducers.countTotalAndPrice(state);
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      const cart = state.cart as ICart;
      const itemIndex = cart.items.findIndex((item) => item.item.id === action.payload);

      if (itemIndex >= 0) {
        const itemToRemove = cart.items[itemIndex];
        if (itemToRemove.quantity > 1) {
          itemToRemove.quantity -= 1;
        } else {
          cart.items.splice(itemIndex, 1);
        }
      }
      userSlice.caseReducers.countTotalAndPrice(state);
    },
    countTotalAndPrice: (state) => {
      const cart = state.cart as ICart;

      const totalQuantity = cart.items.reduce((total, item) => total + item.quantity, 0);
      const totalPrice = cart.items.reduce((total, item) => {
        const price = item.item.masterData?.staged?.masterVariant?.prices?.[0]?.value?.centAmount ?? 0;
        return total + (price / 100) * item.quantity;
      }, 0);

      cart.total = totalQuantity;
      cart.price = totalPrice;
    },
  },
});

export const { login, logout, addProductToCart, removeProductFromCart } = userSlice.actions;

export default userSlice.reducer;
