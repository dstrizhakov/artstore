import { Product } from '@commercetools/platform-sdk';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
  type: 'minus' | 'plus';
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}

export interface ICartItem {
  id: string;
  product: Product;
  count: number;
}

export interface ICart {
  items: ICartItem[];
  total: number;
  price: number;
}
export interface IUserState {
  user: IUser;
  cart: ICart;
}

const initialState: IUserState = {
  user: {
    id: '',
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
      console.log(state.user);
    },
    logout: (state) => {
      state.user = initialState.user;
      state.cart = initialState.cart;
      console.log(state);
    },
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const cart = state.cart as ICart;
      const itemIndex = cart.items.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        cart.items[itemIndex].id = action.payload.id;
        cart.items[itemIndex].count += 1;
      } else {
        cart.items.push({ id: action.payload.id, product: action.payload, count: 1 });
      }
      userSlice.caseReducers.countTotalAndPrice(state);
    },
    // addProductToCart: (state, action: PayloadAction<Product>) => {
    //   const itemIndex = state.cart.items.findIndex((item) => item.id === action.payload.id);
    //   itemIndex >= 0
    //     ? (state.cart.items[itemIndex].count += action.payload.count)
    //     : state.cart.items.push({ id: action.payload.id, product: action.payload, count: 1 });
    //   userSlice.caseReducers.countTotalAndPrice(state);
    // },
    deleteProductFromCart: (state, action: PayloadAction<string>) => {
      state.cart.items = state.cart.items.filter((item) => item.id !== action.payload);
      userSlice.caseReducers.countTotalAndPrice(state);
    },
    changeProductCount: (state, action: PayloadAction<IChangeQuantityPayload>) => {
      const { id, type } = action.payload;
      const item = state.cart.items.find((item) => item.id === id);
      if (item) {
        if (item.count === 1 && type !== 'plus') return;
      }
      if (item) type === 'plus' ? item.count++ : item.count--;
      userSlice.caseReducers.countTotalAndPrice(state);
    },
    clearCart: (state) => {
      state.cart.items = [];
      state.cart.price = 0;
      state.cart.total = 0;
    },
    // removeProductFromCart: (state, action: PayloadAction<string>) => {
    //   const cart = state.cart as ICart;
    //   const itemIndex = cart.items.findIndex((item) => item.id === action.payload);

    //   if (itemIndex >= 0) {
    //     const itemToRemove = cart.items[itemIndex];
    //     if (itemToRemove.count > 1) {
    //       itemToRemove.count -= 1;
    //     } else {
    //       cart.items.splice(itemIndex, 1);
    //     }
    //   }
    //   userSlice.caseReducers.countTotalAndPrice(state);
    // },
    countTotalAndPrice: (state) => {
      const cart = state.cart as ICart;

      const totalQuantity = cart.items.reduce((total, item) => total + item.count, 0);
      const totalPrice = cart.items.reduce((total, item) => {
        const price = item.product.masterData?.staged?.masterVariant?.prices?.[0]?.value?.centAmount ?? 0;
        return total + (price / 100) * item.count;
      }, 0);

      cart.total = totalQuantity;
      cart.price = totalPrice;
    },
  },
});

export const { login, logout, addProductToCart, deleteProductFromCart, changeProductCount, clearCart } =
  userSlice.actions;

export default userSlice.reducer;
