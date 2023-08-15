import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
  id: string;
  name: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}

const initialState: IUser = {
  id: '',
  name: '',
  email: '',
  accessToken: '',
  refreshToken: '',
};

const userOwnReducer = createSlice({
  name: 'user1',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logout: (state) => {
      state.id = initialState.id;
      state.name = initialState.name;
      state.email = initialState.email;
      state.accessToken = initialState.accessToken;
      state.refreshToken = initialState.refreshToken;
    },
  },
});

export const { login, logout } = userOwnReducer.actions;

export default userOwnReducer.reducer;