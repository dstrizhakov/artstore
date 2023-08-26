import { TextField } from '@mui/material';
import { Box } from '@mui/system';
// import useDebounce from '../../hooks/useDebounce';
import { useState } from 'react';
// import { searchProducts } from '../../api/requests';
// import { useAppDispatch } from '../../hooks/redux';
// import { setProducts } from '../../store/reducers/products.slice';

const Filters = () => {
  const [search, setSearch] = useState('');
  // const [products, setSearchProducts] = useState([]);
  // const dispatch = useAppDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  // const debounced = useDebounce(search, 1000);
  // const handleSearch = useCallback(async () => {
  //   const item = await searchProducts(debounced);
  //   // dispatch(setProducts(item.results));
  // }, [debounced, dispatch]);
  // useEffect(() => {
  //   dispatch(setProducts(handleSearch()));
  //   handleSearch();
  //   console.log(products);
  // }, [debounced, handleSearch]);

  return (
    <>
      <Box>
        <TextField type="text" onChange={handleChange} value={search} />
      </Box>
    </>
  );
};

export default Filters;
