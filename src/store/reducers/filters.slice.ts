import { ProductPagedQueryResponse } from '@commercetools/platform-sdk';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFilters {
  search: string;
  pagination: IPagination;
}
interface IPagination {
  total?: number;
  count: number;
  offset: number;
  limit: number;
  perPage: number;
}

const initialState: IFilters = {
  search: '',
  pagination: {
    total: 0,
    count: 0,
    offset: 0,
    limit: 0,
    perPage: 5,
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      state.pagination.offset = 0;
    },
    setPagination: (state, action: PayloadAction<ProductPagedQueryResponse>) => {
      state.pagination.limit = action.payload.limit;
      state.pagination.total = action.payload.total;
      state.pagination.count = action.payload.count;
      state.pagination.offset = action.payload.offset;
    },
    setPerPage: (state, action: PayloadAction<number>) => {
      state.pagination.limit = action.payload;
    },
  },
});

export const { setSearch, setPagination, setPerPage } = filtersSlice.actions;

export default filtersSlice.reducer;
