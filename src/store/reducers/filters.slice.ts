import { ProductProjectionPagedSearchResponse } from '@commercetools/platform-sdk';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFilters {
  search: string;
  isFuzzy: boolean;
  type: string;
  category: string;
  pagination: IPagination;
}
interface IPagination {
  total?: number;
  count: number;
  offset: number;
  limit: number;
}

const initialState: IFilters = {
  search: '',
  isFuzzy: true,
  type: '',
  category: '',
  pagination: {
    total: 0,
    count: 0,
    offset: 0,
    limit: 10,
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<ProductProjectionPagedSearchResponse>) => {
      state.pagination.limit = action.payload.limit;
      state.pagination.total = action.payload.total;
      state.pagination.count = action.payload.count;
      state.pagination.offset = action.payload.offset;
    },
    setSearchString: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      state.pagination.offset = 0;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.pagination.limit = action.payload;
    },
    setOffset: (state, action: PayloadAction<number>) => {
      state.pagination.offset = action.payload;
    },
    setIsFuzzy: (state, action: PayloadAction<boolean>) => {
      state.isFuzzy = action.payload;
    },
    setFilterType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setFilterCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const { setSearchString, setPagination, setLimit, setOffset, setIsFuzzy, setFilterType, setFilterCategory } =
  filtersSlice.actions;

export default filtersSlice.reducer;
