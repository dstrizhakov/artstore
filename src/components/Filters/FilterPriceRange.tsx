import { useEffect, useState } from 'react';
import { Box, Paper, Slider, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setFilterPriceRange } from '../../store/reducers/filters.slice';
import { getProducts } from '../../api/requests';
import { setError } from '../../store/reducers/products.slice';

function valueText(value: number) {
  return `${value} USD`;
}

export default function FilterPriceRange() {
  const range = useAppSelector((state) => state.filters.priceRange).map((item) => item / 100);
  const [minmax, setMinMax] = useState<number[]>(range);

  const getProductsPrices = async () => {
    try {
      const products = (await getProducts()).results;
      const prices = products.map((product) => {
        if (product.masterData.current.masterVariant && product.masterData.current.masterVariant.prices) {
          return product.masterData.current.masterVariant.prices[0]?.value.centAmount / 100;
        } else {
          return 0;
        }
      });
      setMinMax([Math.min(...prices), Math.max(...prices)]);
    } catch (error) {
      dispatch(setError('Не удалось загрузить продукты'));
    }
  };

  useEffect(() => {
    getProductsPrices();
  }, []);

  const dispatch = useAppDispatch();

  const [minmin, maxmax] = minmax;
  const [priceRangeValue, setPriceRangeValue] = useState([minmin, maxmax]);

  const handlePriceRangeChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setPriceRangeValue(newValue);
    }
  };

  const handleCommitRange = () => {
    const centAmmountRange = priceRangeValue.map((price) => price * 100);
    dispatch(setFilterPriceRange(centAmmountRange));
  };

  return (
    <Paper variant="outlined" sx={{ padding: 2, height: '90px' }}>
      <Box
        sx={{
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '100%',
          marginX: 2,
        }}
      >
        <Typography variant="h6">Price Range</Typography>
        <Slider
          getAriaLabel={() => 'Price range'}
          value={priceRangeValue}
          onChange={handlePriceRangeChange}
          onChangeCommitted={handleCommitRange}
          valueLabelDisplay="auto"
          getAriaValueText={valueText}
          min={minmin}
          max={maxmax}
        />
      </Box>
    </Paper>
  );
}
