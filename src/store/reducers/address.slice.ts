import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddressType } from 'types/types';

type AddressesType = {
  shipping: AddressType;
  billing: AddressType;
  isBillingSame: boolean;
};

const initialAddressState: AddressesType = {
  shipping: { country: 'US' },
  billing: { country: 'US' },
  isBillingSame: false,
};

const addessSlice = createSlice({
  name: 'address',
  initialState: initialAddressState,
  reducers: {
    changeShipping: (state, action: PayloadAction<AddressType>) => {
      state.shipping = action.payload;
    },
    changeBilling: (state, action: PayloadAction<AddressType>) => {
      state.billing = action.payload;
    },
    changeBillingSame: (state, action: PayloadAction<boolean>) => {
      state.isBillingSame = action.payload;
    },
  },
});

export const { changeShipping, changeBilling, changeBillingSame } = addessSlice.actions;

export default addessSlice.reducer;
