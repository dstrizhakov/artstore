import { Paper, TextField } from '@mui/material';
import { Box } from '@mui/system';
import useDebounce from '../../hooks/useDebounce';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSearchString } from '../../store/reducers/filters.slice';
import FilterSettings from './FilterSettings';

const Filters = () => {
  const searchString = useAppSelector((state) => state.filters.search);
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState(searchString);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const debounced = useDebounce(search, 500);

  useEffect(() => {
    dispatch(setSearchString(debounced));
  }, [debounced, dispatch]);

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
          <TextField label="Search" sx={{ width: '300px' }} type="text" onChange={handleChange} value={search} />

          <FilterSettings />
        </Paper>
      </Box>
    </>
  );
};

export default Filters;
