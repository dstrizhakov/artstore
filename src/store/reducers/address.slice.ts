import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddressType } from 'types/types';

type AddressesType = {
  shipping: AddressType;
  billing: AddressType;
  isBillingSame: boolean;
};

const initialAddressState: AddressesType = {
  shipping: { country: '' },
  billing: { country: '' },
  isBillingSame: false,
};

const addressSlice = createSlice({
  name: 'address',
  initialState: initialAddressState,
  reducers: {
    setField: (
      state,
      action: PayloadAction<{ addressType: 'shipping' | 'billing'; fieldName: keyof AddressType; fieldValue: string }>
    ) => {
      const { addressType, fieldName, fieldValue } = action.payload;

      if (addressType === 'shipping' || addressType === 'billing') {
        state[addressType][fieldName] = fieldValue;
      }
    },
    changeBillingSame: (state, action: PayloadAction<boolean>) => {
      state.isBillingSame = action.payload;
    },
    clear: (state) => {
      state.billing = { country: '' };
      state.shipping = { country: '' };
      state.isBillingSame = false;
    },
  },
});

export const { changeBillingSame, setField, clear } = addressSlice.actions;

export default addressSlice.reducer;
