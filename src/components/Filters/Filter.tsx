import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import FilterTypeCategory from './FilterTypeCategory';
import FilterSort from './FilterSort';
import FilterPriceRange from './FilterPriceRange';
import FilterSearch from './FilterSearch';

const Filters = () => {
  return (
    <Box
      sx={{
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        marginY: '1rem',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} xl={3}>
          <FilterSearch />
        </Grid>
        <Grid item xs={12} md={4} xl={3}>
          <FilterSort />
        </Grid>
        <Grid item xs={12} md={4} xl={3}>
          <FilterPriceRange />
        </Grid>
        <Grid item xs={12} md={4} xl={3}>
          <FilterTypeCategory />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Filters;
