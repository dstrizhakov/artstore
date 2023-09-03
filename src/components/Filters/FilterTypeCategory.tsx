import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setFilterCategory, setFilterType } from '../../store/reducers/filters.slice';
import { getProductCategories, getProductTypes } from '../../api/requests';

type CategoryTypeItem = {
  id: string;
  name: string;
};

const FilterTypeCategory = () => {
  const dispatch = useAppDispatch();
  const filterTypeId = useAppSelector((state) => state.filters.typeId);
  const filterCategoryId = useAppSelector((state) => state.filters.categoryId);

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
    setCategory(filterCategoryId);

    setTypes(
      typeResponse.results.map((item) => ({
        id: item.id,
        name: item.name,
      }))
    );
    setType(filterTypeId);
  };

  useEffect(() => {
    fetchCategoriesAndTypes();
  }, []);

  return (
    <Stack direction="row" spacing={2}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="type">Type</InputLabel>
        <Select labelId="type" label="Type" name="Type" value={type} onChange={handleSetType}>
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
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="category">Category</InputLabel>
        <Select labelId="category" label="Category" name="Category" value={category} onChange={handleSetCategory}>
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
