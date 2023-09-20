import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@commercetools/platform-sdk';

export interface IChangeQuantityPayload {
  id: string;
  type: 'minus' | 'plus';
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

export const initialCartState: ICart = {
  items: [],
  total: 0,
  price: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.items[itemIndex].id = action.payload.id;
        state.items[itemIndex].count += 1;
      } else {
        state.items.push({ id: action.payload.id, product: action.payload, count: 1 });
      }
      cartSlice.caseReducers.countTotalAndPrice(state);
    },
    deleteProductFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      cartSlice.caseReducers.countTotalAndPrice(state);
    },
    changeProductCount: (state, action: PayloadAction<IChangeQuantityPayload>) => {
      const { id, type } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        if (item.count === 1 && type !== 'plus') return;
      }
      if (item) type === 'plus' ? item.count++ : item.count--;
      cartSlice.caseReducers.countTotalAndPrice(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.price = 0;
      state.total = 0;
    },
    countTotalAndPrice: (state) => {
      const totalQuantity = state.items.reduce((total, item) => total + item.count, 0);

      const totalPrice = state.items.reduce((total, item) => {
        const price =
          item.product.masterData?.staged?.masterVariant?.prices?.[0]?.discounted?.value?.centAmount ?? 0
            ? item.product.masterData?.staged?.masterVariant?.prices?.[0]?.discounted?.value?.centAmount ?? 0
            : item.product.masterData?.staged?.masterVariant?.prices?.[0]?.value?.centAmount ?? 0;

        return Number((total + (price / 100) * item.count).toFixed(2));
      }, 0);

      state.total = totalQuantity;
      state.price = totalPrice;
    },
  },
});

export const { addProductToCart, deleteProductFromCart, changeProductCount, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
