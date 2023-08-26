import { Paper, TextField } from '@mui/material';
import { Box } from '@mui/system';
import useDebounce from '../../hooks/useDebounce';
import { useCallback, useEffect, useState } from 'react';
import { searchProducts } from '../../api/requests';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setProducts } from '../../store/reducers/products.slice';
import { setSearchString } from '../../store/reducers/filters.slice';

const Filters = () => {
  const [search, setSearch] = useState('');
  const limit = useAppSelector((state) => state.filters.pagination.limit);
  const offset = useAppSelector((state) => state.filters.pagination.offset);
  const dispatch = useAppDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const debounced = useDebounce(search, 1000);
  const handleSearch = useCallback(async () => {
    const item = await searchProducts(debounced, limit, offset);

    dispatch(setProducts(item.results));
    dispatch(setSearchString(debounced));
  }, [debounced, dispatch, limit, offset]);
  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <>
      <Box
        sx={{
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginY: '2rem',
        }}
      >
        <Paper
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
            width: '100%',
          }}
        >
          <TextField fullWidth type="text" onChange={handleChange} value={search} />
        </Paper>
      </Box>
    </>
  );
};

export default Filters;
