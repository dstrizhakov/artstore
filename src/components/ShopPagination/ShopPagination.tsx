import React, { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { searchProducts } from '../../api/requests';
import { setProducts, setLoading } from '../../store/reducers/products.slice';
import { setPagination } from '../../store/reducers/filters.slice';

const ShopPagination = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1');

  const { total, count, limit } = useAppSelector((state) => state.filters.pagination);
  const searchString = useAppSelector((state) => state.filters.search);
  const pages = Math.ceil((total || count) / limit);

  const dispatch = useAppDispatch();

  const handleChange = async (event: React.ChangeEvent<unknown>, num: number) => {
    handlePaginationChange(num);
  };

  const handleChangePerPage = async (event: SelectChangeEvent<string>) => {
    const newPerPage = +event.target.value;
    setCurrentPerPage(newPerPage);
    handlePaginationChange(1, newPerPage);
  };

  const handlePaginationChange = async (newPage: number, newLimit?: number) => {
    dispatch(setLoading(true));
    const response = await searchProducts(searchString, newLimit || limit, (newPage - 1) * (newLimit || limit));
    dispatch(setPagination(response));
    dispatch(setProducts(response.results));
  };

  const [currentPerPage, setCurrentPerPage] = useState(limit);

  return (
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
        <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel id="per-page">Perpage</InputLabel>
          <Select
            placeholder="Perpage"
            labelId="per-page"
            id="per-page"
            value={currentPerPage.toString()}
            label="Perpage"
            onChange={handleChangePerPage}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
        <Pagination
          variant="outlined"
          color="primary"
          page={page}
          count={pages}
          onChange={handleChange}
          renderItem={(item) => (
            <PaginationItem component={Link} to={`/shop${item.page === 1 ? '' : `?page=${item.page}`}`} {...item} />
          )}
        />
      </Paper>
    </Box>
  );
};

export default ShopPagination;
