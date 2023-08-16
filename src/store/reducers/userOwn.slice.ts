import { Customer } from '@commercetools/platform-sdk';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// export interface IUser {
//   id: string;
//   name: string;
//   email: string;
//   accessToken: string;
//   refreshToken: string;
// }

export interface IUser {
  isAuth: boolean;
  customer: Customer;
}
// const initialState: IUser = {
//   id: '',
//   name: '',
//   email: '',
//   accessToken: '',
//   refreshToken: '',
// };
const initialState: IUser = {
  isAuth: false,
  customer: {} as Customer,
};

const userOwnReducer = createSlice({
  name: 'user1',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Customer>) => {
      state.customer = action.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
      // state.id = initialState.id;
      // state.name = initialState.name;
      // state.email = initialState.email;
      // state.accessToken = initialState.accessToken;
      // state.refreshToken = initialState.refreshToken;
    },
  },
});

export const { login, logout } = userOwnReducer.actions;

export default userOwnReducer.reducer;
