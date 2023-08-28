import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material';
import { useAppDispatch } from '../../hooks/redux';
import { setFilterCategory, setFilterType } from '../../store/reducers/filters.slice';
import { getProductCategories, getProductTypes } from '../../api/requests';

type CategoryTypeItem = {
  id: string;
  name: string;
};

const FilterTypeCategory = () => {
  const dispatch = useAppDispatch();
  //   const filterType = useAppSelector((state) => state.filters.type);
  //   const filterCategory = useAppSelector((state) => state.filters.category);

  const [type, setType] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [types, setTypes] = useState<CategoryTypeItem[]>([]);
  const [categories, setCategories] = useState<CategoryTypeItem[]>([]);

  const handleSetType = (event: SelectChangeEvent<string>) => {
    const newType = event.target.value;
    setType(newType);
    dispatch(setFilterType(newType));
  };

  const handleSetCategory = (event: SelectChangeEvent<string>) => {
    const newCategory = event.target.value;
    console.log(event);

    setCategory(newCategory);
    dispatch(setFilterCategory(newCategory));
  };

  const fetchCategoriesAndTypes = async () => {
    const categoryResponse = await getProductCategories();
    const typeResponse = await getProductTypes();

    setCategories(
      categoryResponse.results.map((item) => ({
        id: item.id,
        name: item.name['en-US'],
      }))
    );
    setTypes(
      typeResponse.results.map((item) => ({
        id: item.id,
        name: item.name,
      }))
    );
  };

  useEffect(() => {
    fetchCategoriesAndTypes();
  }, []);

  return (
    <Stack direction="row" spacing={2}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="type">Type</InputLabel>
        <Select labelId="type" label="Type" value={type} onChange={handleSetType}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {types.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="category">Category</InputLabel>
        <Select labelId="category" label="Category" value={category} onChange={handleSetCategory}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {categories.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default FilterTypeCategory;
