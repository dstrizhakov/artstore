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
import { AddressType } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { FC } from 'react';

import { changeBillingSame, setField } from '../../store/reducers/address.slice';
import { countries } from '../../constants/countries';
interface RegisterAddressProps {
  address: AddressType;
  handleChange: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  billingSame: boolean;
  addressBilling: AddressType;
  setBillingSame: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  handleCountryShippingChange: (event: SelectChangeEvent<string>) => void;
}


const RegisterAddress: FC<RegisterAddressProps> = ({
  address,
  handleChange,
  billingSame,
  addressBilling,
  setBillingSame,
  handleCountryShippingChange,
}) => {
  const type = 'shipping';

  return (
    <Grid item xs={12} md={12}>
      <Box sx={{ display: 'flex', p: 1, m: 1, borderRadius: 1, gap: 2, justifyContent: 'center' }}>
        <Box
          sx={{
            display: 'block',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', width: 300 }}>
            <h3>Shipping address</h3>
            <FormControl sx={{ m: 0, minWidth: 120 }} error={!addreses.shipping.country}>
              <InputLabel id="shipping-country">Country</InputLabel>
              <Select
                variant="standard"
                id="shipping-country"
                value={addreses.shipping.country}
                label="Country"
                renderValue={(value) => ` - ${value} -`}
                onChange={handleCountryShippingChange}
                name="country"
              >
                <MenuItem disabled>
                  <em>None</em>
                </MenuItem>
                {countries.map((country) => (
                  <MenuItem key={country.value} value={country.value}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
              {!addreses.shipping.country && <FormHelperText>{'Country is required'}</FormHelperText>}
            </FormControl>

            <TextField
              variant="standard"
              id="shipping-state"
              label="State"
              value={address?.state || ''}
              onChange={handleChange}
              name="state"
            />
            <TextField
              variant="standard"
              id="shipping-city"
              label="City"
              value={address?.city || ''}
              onChange={handleChange}
              name="city"
            />
            <TextField
              variant="standard"
              id="shipping-street_name"
              label="Street name"

              value={address?.streetName || ''}
              onChange={handleChange}
              name="streetName"
            />
            <TextField
              variant="standard"
              id="shipping-street_number"
              label="Street number"
              value={address?.streetNumber || ''}
              onChange={handleChange}
              name="streetNumber"

            />
            <TextField
              variant="standard"
              id="shipping-apart"
              label="Apartment"
              value={address?.apartment || ''}
              onChange={handleChange}
              name="apartment"
            />
            <TextField
              variant="standard"
              id="shipping-zip"
              label="Zip"
              value={address?.postalCode || ''}
              onChange={handleChange}
              name="postalCode"

            />
            <TextField
              variant="standard"
              id="shipping-first_name"
              label="First name"
              value={address?.firstName || ''}
              onChange={handleChange}
              name="firstName"
            />
            <TextField
              variant="standard"
              id="shipping-last_name"
              label="Last name"
              value={address?.lastName || ''}
              onChange={handleChange}
              name="lastName"
            />
          </Box>
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
              control={
                <Switch
                  color="primary"
                  checked={billingSame}
                  onChange={() => setBillingSame((prevstate: boolean) => !prevstate)}
                />
              }
              label="The billing address is the same"
              labelPlacement="start"
            />
          </Box>
        </Box>
        {!addreses.isBillingSame && (
          <Box
            sx={{
              display: 'block',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', width: 300 }}>
              <h3>Billing address</h3>
              <FormControl sx={{ m: 0, minWidth: 120 }} error={!addreses.billing.country}>
                <InputLabel id="billing-country">Country</InputLabel>
                <Select
                  variant="standard"
                  id="billing-country"
                  value={addreses.billing.country}
                  label="Country"
                  renderValue={(value) => ` - ${value} -`}
                  onChange={handleCountryShippingChange}
                  name="country"
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
                {!addreses.billing.country && <FormHelperText>{'Billing country is required'}</FormHelperText>}
              </FormControl>
              <TextField
                variant="standard"
                id="billing-state"
                label="State"
                value={addressBilling?.state || ''}
                onChange={handleChange}
                name="state"
              />
              <TextField
                variant="standard"
                id="billing-city"
                label="City"

                value={addressBilling?.city || ''}
                onChange={handleChange}
                name="city"
              />
              <TextField
                variant="standard"
                id="billing-street_name"
                label="Street name"
                value={addressBilling?.streetName || ''}
                onChange={handleChange}
                name="streetName"
              />
              <TextField
                variant="standard"
                id="billing-street_number"
                label="Street number"
                value={addressBilling?.building || ''}
                onChange={handleChange}
                name="streetNumber"
              />
              <TextField
                variant="standard"
                id="billing-apart"
                label="Apartment"
                value={addressBilling?.apartment || ''}
                onChange={handleChange}
                name="apartment"
              />
              <TextField
                variant="standard"
                id="billing-zip"
                label="Zip"
                value={addressBilling?.postalCode || ''}
                onChange={handleChange}
                name="postalCode"
              />
              <TextField
                variant="standard"
                id="billing-first_name"
                label="First name"
                value={addressBilling?.firstName || ''}
                onChange={handleChange}
                name="firstName"

              />
              <TextField
                variant="standard"
                id="billing-last_name"
                label="Last name"
                value={addressBilling?.lastName || ''}
                onChange={handleChange}
                name="lastName"
              />
            </Box>
          </Box>
        )}
      </Box>
    </Grid>
  );
};

export default RegisterAddress;
