import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
} from '@mui/material';
import { useAppDispatch } from '../../hooks/redux';
import { FC, useState } from 'react';

import { AddressType } from 'types/types';
import { changeShipping, changeBilling, changeBillingSame } from '../../store/reducers/address.slice';
import { countries } from '../../constants/countries';

const RegisterAddress: FC = () => {
  const type = 'shipping';
  const dispatch = useAppDispatch();

  const [address, setAddress] = useState<AddressType>({
    country: '',
    state: '',
    city: '',
    street: '',
    building: '',
    apartment: '',
    firstName: '',
    lastName: '',
    zip: '',
  });
  const [addressBilling, setAddressBilling] = useState<AddressType>({
    country: '',
    state: '',
    city: '',
    street: '',
    building: '',
    apartment: '',
    firstName: '',
    lastName: '',
    zip: '',
  });
  const [billingSame, setBillingSame] = useState(true);

  const handleShippingChange = (field: keyof AddressType, value: string) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      [field]: value,
    }));
    dispatch(changeShipping(address));
  };

  const handleBillingChange = (field: keyof AddressType, value: string) => {
    setAddressBilling((prevAddress) => ({
      ...prevAddress,
      [field]: value,
    }));
    dispatch(changeBilling(addressBilling));
  };

  const handleCountryShippingChange = (event: SelectChangeEvent<string>) => {
    const { value } = event.target;
    setAddress((prevState) => ({
      ...prevState,
      country: value,
    }));
    dispatch(changeShipping(address));
  };

  const handleCountryBillingChange = (event: SelectChangeEvent<string>) => {
    const { value } = event.target;
    setAddressBilling((prevState) => ({
      ...prevState,
      country: value,
    }));
    dispatch(changeBilling(addressBilling));
  };
  const handleSetBillingSame = () => {
    setBillingSame(!billingSame);
    dispatch(changeBillingSame(billingSame));
  };

  return (
    <Grid item xs={12} md={12}>
      <Box sx={{ display: 'flex', p: 1, m: 1, borderRadius: 1, gap: 2 }}>
        <Box
          sx={{
            display: 'block',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <h3>Shipping address</h3>
          <div>
            <FormControl sx={{ m: 0, minWidth: 120 }} error={!address?.country}>
              <InputLabel id="demo-simple-select-error-label">Country</InputLabel>
              <Select
                variant="standard"
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={address?.country || ''}
                label="Country"
                renderValue={(value) => ` - ${value} -`}
                onChange={handleCountryShippingChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {countries.map((country) => (
                  <MenuItem key={country.value} value={country.value}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{'errors'}</FormHelperText>
            </FormControl>

            <TextField
              variant="standard"
              id={`${type}_state`}
              label="State"
              value={address?.state || ''}
              onChange={(e) => handleShippingChange('state', e.target.value)}
            />
            <TextField
              variant="standard"
              id={`${type}_city`}
              label="City"
              value={address?.city || ''}
              onChange={(e) => handleShippingChange('city', e.target.value)}
            />
            <TextField
              variant="standard"
              id={`${type}_street_name`}
              label="Street name"
              value={address?.street || ''}
              onChange={(e) => handleShippingChange('street', e.target.value)}
            />
            <TextField
              variant="standard"
              id={`${type}_street_number`}
              label="Street number"
              value={address?.building || ''}
              onChange={(e) => handleShippingChange('building', e.target.value)}
            />
            <TextField
              variant="standard"
              id={`${type}_apart`}
              label="Apartment"
              value={address?.apartment || ''}
              onChange={(e) => handleShippingChange('apartment', e.target.value)}
            />
            <TextField
              variant="standard"
              id={`${type}_zip`}
              label="Zip"
              value={address?.zip || ''}
              onChange={(e) => handleShippingChange('zip', e.target.value)}
            />
            <TextField
              variant="standard"
              id={`${type}_first_name`}
              label="First name"
              value={address?.firstName || ''}
              onChange={(e) => handleShippingChange('firstName', e.target.value)}
            />
            <TextField
              variant="standard"
              id={`${type}_last_name`}
              label="Last name"
              value={address?.lastName || ''}
              onChange={(e) => handleShippingChange('lastName', e.target.value)}
            />
          </div>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}
          >
            <FormControlLabel
              control={<Switch color="primary" checked={billingSame} onChange={handleSetBillingSame} />}
              label="The billing address is the same"
              labelPlacement="start"
            />
          </Box>
        </Box>
        {!billingSame && (
          <Box
            sx={{
              display: 'block',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}
          >
            <h3>Billing address</h3>
            <div>
              <FormControl sx={{ m: 0, minWidth: 120 }} error={!addressBilling?.country}>
                <InputLabel id="demo-simple-select-error-label">Country</InputLabel>
                <Select
                  variant="standard"
                  labelId="demo-simple-select-error-label"
                  id="demo-simple-select-error"
                  value={addressBilling?.country || ''}
                  label="Country"
                  renderValue={(value) => ` - ${value} -`}
                  onChange={handleCountryBillingChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {countries.map((country) => (
                    <MenuItem key={country.value} value={country.value}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{'errors'}</FormHelperText>
              </FormControl>

              <TextField
                variant="standard"
                id={`${type}_state`}
                label="State"
                value={addressBilling?.state || ''}
                onChange={(e) => handleBillingChange('state', e.target.value)}
              />
              <TextField
                variant="standard"
                id={`${type}_city`}
                label="City"
                value={addressBilling?.city || ''}
                onChange={(e) => handleBillingChange('city', e.target.value)}
              />
              <TextField
                variant="standard"
                id={`${type}_street_name`}
                label="Street name"
                value={addressBilling?.street || ''}
                onChange={(e) => handleBillingChange('street', e.target.value)}
              />
              <TextField
                variant="standard"
                id={`${type}_street_number`}
                label="Street number"
                value={addressBilling?.building || ''}
                onChange={(e) => handleBillingChange('building', e.target.value)}
              />
              <TextField
                variant="standard"
                id={`${type}_apart`}
                label="Apartment"
                value={addressBilling?.apartment || ''}
                onChange={(e) => handleBillingChange('apartment', e.target.value)}
              />
              <TextField
                variant="standard"
                id={`${type}_zip`}
                label="Zip"
                value={addressBilling?.zip || ''}
                onChange={(e) => handleBillingChange('zip', e.target.value)}
              />
              <TextField
                variant="standard"
                id={`${type}_first_name`}
                label="First name"
                value={addressBilling?.firstName || ''}
                onChange={(e) => handleBillingChange('firstName', e.target.value)}
              />
              <TextField
                variant="standard"
                id={`${type}_last_name`}
                label="Last name"
                value={addressBilling?.lastName || ''}
                onChange={(e) => handleBillingChange('lastName', e.target.value)}
              />
            </div>
          </Box>
        )}
      </Box>
    </Grid>
  );
};

export default RegisterAddress;
