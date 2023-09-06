import { Customer } from '@commercetools/platform-sdk';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { clear } from './address.slice';

export interface IUser {
  isAuth: boolean;
  customer: Customer;
}
const initialState: IUser = {
  isAuth: false,
  customer: {} as Customer,
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Customer>) => {
      state.customer = action.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      state.customer = {} as Customer;
      state.isAuth = false;
      clear();
    },
  },
});

export const { login, logout } = userReducer.actions;

export default userReducer.reducer;
