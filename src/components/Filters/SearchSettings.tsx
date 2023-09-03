import { FormControlLabel, Switch } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setIsFuzzy } from '../../store/reducers/filters.slice';
import { SyntheticEvent, useState } from 'react';

const SearchSettings = () => {
  const dispatch = useAppDispatch();
  const isFuzzy = useAppSelector((state) => state.filters.isFuzzy);

  const [fuzzy, setFuzzy] = useState<boolean>(isFuzzy);

  const handleToggleFuzzy = (event: SyntheticEvent<Element, Event>, checked: boolean) => {
    setFuzzy((prev) => !prev);
    dispatch(setIsFuzzy(checked));
  };
  return (
    <FormControlLabel
      control={<Switch checked={fuzzy} onChange={handleToggleFuzzy} color="primary" />}
      label="Fuzzy"
      labelPlacement="bottom"
    />
  );
};

export default SearchSettings;
