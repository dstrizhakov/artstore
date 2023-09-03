import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setLimit, setOffset } from '../../store/reducers/filters.slice';

const ShopPagination = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1');

  const { total, count, limit } = useAppSelector((state) => state.filters.pagination);

  const pages = Math.ceil((total || count) / limit);
  // const currentPage = Math.floor(offset / limit) + 1;

  const dispatch = useAppDispatch();

  const handleChangeOffset = async (event: React.ChangeEvent<unknown>, num: number) => {
    const newOffset = (num - 1) * limit;
    dispatch(setOffset(newOffset));
  };

  const handleChangeLimit = async (event: SelectChangeEvent<string>) => {
    const newLimit = parseInt(event.target.value);
    dispatch(setLimit(newLimit));
    navigate('/shop');
    dispatch(setOffset(0));
  };

  return (
    <Box
      sx={{
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginY: '1rem',
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
          width: '100%',
        }}
      >
        <FormControl sx={{ minWidth: '100px' }}>
          <InputLabel id="per-page">Perpage</InputLabel>
          <Select
            placeholder="Perpage"
            labelId="per-page"
            id="per-page"
            value={limit.toString()}
            label="Perpage"
            onChange={handleChangeLimit}
          >
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </FormControl>
        <Pagination
          size="large"
          variant="outlined"
          color="primary"
          page={page}
          count={pages}
          onChange={handleChangeOffset}
          renderItem={(item) => (
            <PaginationItem component={Link} to={`/shop${item.page === 1 ? '' : `?page=${item.page}`}`} {...item} />
          )}
        />
      </Paper>
    </Box>
  );
};

export default React.memo(ShopPagination);
