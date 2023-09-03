import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Stack } from '@mui/material';
import { ISortBy, ISortDir, setFilterSort } from '../../store/reducers/filters.slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const sortSettings = [
  { id: 1, name: 'Price', value: 'price' },
  { id: 2, name: 'Name', value: 'name.en-US' },
  { id: 3, name: 'Created', value: 'createdAt' },
  { id: 4, name: 'Id', value: 'id' },
];

const FilterSort = () => {
  const dispatch = useAppDispatch();
  const initialSort = useAppSelector((state) => state.filters.sort);

  const [sortBy, setSortBy] = useState<ISortBy>(initialSort[0]);
  const [sortDirection, setSortDirection] = useState<ISortDir>(initialSort[1]);

  const handleSetSortBy = (event: SelectChangeEvent<ISortBy>) => {
    const newSortBy = event.target.value as ISortBy;
    setSortBy(newSortBy);
    dispatch(setFilterSort([newSortBy, sortDirection]));
  };

  const handleSetSortDirection = (event: SelectChangeEvent<ISortDir>) => {
    const newSortDirection = event.target.value as ISortDir;
    setSortDirection(newSortDirection);
    if (sortBy) {
      dispatch(setFilterSort([sortBy, newSortDirection]));
    }
  };

  return (
    <Paper variant="outlined" sx={{ padding: 2, height: '90px' }}>
      <Stack direction="row" spacing={2}>
        <FormControl sx={{ m: 1, width: '70%' }}>
          <InputLabel id="sort">Sort</InputLabel>
          <Select labelId="sort" label="Sort" name="Sort" value={sortBy} onChange={handleSetSortBy}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {sortSettings.map((item) => (
              <MenuItem key={item.id} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: '30%' }}>
          <InputLabel id="direction">Direction</InputLabel>
          <Select
            disabled={!sortBy}
            labelId="direction"
            label="direction"
            name="Direction"
            value={sortDirection}
            onChange={handleSetSortDirection}
          >
            <MenuItem value="asc">Asc</MenuItem>
            <MenuItem value="desc">Desc</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Paper>
  );
};

export default FilterSort;
