import { Customer } from '@commercetools/platform-sdk';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
  isAuth: boolean;
  customer: Customer;
}
const initialState: IUser = {
  isAuth: false,
  customer: {} as Customer,
};

const userReducer = createSlice({
  name: 'user1',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Customer>) => {
      state.customer = action.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
});

export const { login, logout } = userReducer.actions;

export default userReducer.reducer;
