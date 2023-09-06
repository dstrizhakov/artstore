import { TextField, Stack, Paper, Divider } from '@mui/material';
import useDebounce from '../../hooks/useDebounce';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSearchString } from '../../store/reducers/filters.slice';
import SearchSettings from './SearchSettings';

const FilterSearch = () => {
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
    <Paper variant="outlined" sx={{ padding: 2, height: '90px' }}>
      <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
        <TextField label="Search" fullWidth sx={{ width: '100%' }} type="text" onChange={handleChange} value={search} />
        <SearchSettings />
      </Stack>
    </Paper>
  );
};

export default FilterSearch;
