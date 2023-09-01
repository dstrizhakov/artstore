import { Paper, Grid, TextField, Stack } from '@mui/material';
import { Box } from '@mui/system';
import useDebounce from '../../hooks/useDebounce';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSearchString } from '../../store/reducers/filters.slice';
import SearchSettings from './SearchSettings';
import FilterTypeCategory from './FilterTypeCategory';
import FilterSort from './FilterSort';

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
            padding: '1rem',
            width: '100%',
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} xl={6}>
              <Stack direction="row" spacing={2}>
                <TextField
                  label="Search"
                  fullWidth
                  sx={{ width: '100%' }}
                  type="text"
                  onChange={handleChange}
                  value={search}
                />
                <SearchSettings />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} xl>
              <FilterSort />
            </Grid>
            <Grid item xs={12} md={6} xl>
              <FilterTypeCategory />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default Filters;
