import { FormControlLabel, Switch } from '@mui/material';
import { useState } from 'react';

const FilterSettings = () => {
  const [isFuzzy, setIsFuzzy] = useState(true);

  const handleToggleFuzzy = () => {
    setIsFuzzy((prev) => !prev);
    console.log(isFuzzy);
  };

  return (
    <>
      <FormControlLabel
        value={isFuzzy}
        onChange={handleToggleFuzzy}
        control={<Switch color="primary" />}
        label="Fuzzy search"
        labelPlacement="bottom"
      />
    </>
  );
};

export default FilterSettings;
