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
import { FC } from 'react';

import { countries } from '../../constants/countries';
import { Erroring } from 'pages/Register';
interface RegisterAddressProps {
  address: AddressType;
  handleChange: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  billingSame: boolean;
  addressBilling: AddressType;
  setBillingSame: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  handleCountryShippingChange: (event: SelectChangeEvent<string>) => void;
  errors: Erroring;
  dirty: {
    shippingDirty: boolean;
    billingDirty: boolean;
  };
  blurHandler: (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const RegisterAddress: FC<RegisterAddressProps> = ({
  address,
  handleChange,
  billingSame,
  addressBilling,
  setBillingSame,
  handleCountryShippingChange,
  errors,
  dirty,
  blurHandler,
}) => {
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
            <FormControl error={errors.country && dirty.shippingDirty ? true : false} sx={{ m: 0, minWidth: 120 }}>
              <InputLabel error={errors.country && dirty.shippingDirty ? true : false} id="shipping-country">
                Country
              </InputLabel>
              <Select
                error={errors.country && dirty.shippingDirty ? true : false}
                onBlur={(e) => blurHandler(e)}
                // onFocus={(e) => blurHandler(e)}
                variant="standard"
                id="shipping-country"
                value={address.country}
                label="Country"
                renderValue={(value) => ` - ${value} -`}
                onChange={handleCountryShippingChange}
                inputProps={{
                  name: 'shipping-country',
                }}
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
              {
                <FormHelperText error={errors.country && dirty.shippingDirty ? true : false}>
                  {errors.country && dirty.shippingDirty ? errors.country : ''}
                </FormHelperText>
              }
            </FormControl>

            <TextField
              inputProps={{
                'data-type': 'shipping',
              }}
              variant="standard"
              id="shipping-state"
              label="State"
              value={address?.state || ''}
              onChange={handleChange}
              name="state"
            />
            <TextField
              inputProps={{
                'data-type': 'shipping',
              }}
              variant="standard"
              id="shipping-city"
              label="City"
              value={address?.city || ''}
              onChange={handleChange}
              name="city"
            />
            <TextField
              inputProps={{
                'data-type': 'shipping',
              }}
              variant="standard"
              id="shipping-street_name"
              label="Street name"
              value={address?.streetName || ''}
              onChange={handleChange}
              name="streetName"
            />
            <TextField
              inputProps={{
                'data-type': 'shipping',
              }}
              variant="standard"
              id="shipping-street_number"
              label="Street number"
              value={address?.streetNumber || ''}
              onChange={handleChange}
              name="streetNumber"
            />
            <TextField
              inputProps={{
                'data-type': 'shipping',
              }}
              variant="standard"
              id="shipping-apart"
              label="Apartment"
              value={address?.apartment || ''}
              onChange={handleChange}
              name="apartment"
            />
            <TextField
              inputProps={{
                'data-type': 'shipping',
              }}
              variant="standard"
              id="shipping-zip"
              label="Zip"
              value={address?.postalCode || ''}
              onChange={handleChange}
              name="postalCode"
            />
            <TextField
              inputProps={{
                'data-type': 'shipping',
              }}
              variant="standard"
              id="shipping-first_name"
              label="First name"
              value={address?.firstName || ''}
              onChange={handleChange}
              name="firstName"
            />
            <TextField
              inputProps={{
                'data-type': 'shipping',
              }}
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
            <Box sx={{ display: 'flex', flexDirection: 'column', width: 300 }}>
              <h3>Billing address</h3>
              <FormControl sx={{ m: 0, minWidth: 120 }} error={!!errors.billingCountry && dirty.billingDirty}>
                <InputLabel error={!!errors.billingCountry && dirty.billingDirty} id="billing-country">
                  Country
                </InputLabel>
                <Select
                  onBlur={blurHandler}
                  variant="standard"
                  id="billing-country"
                  value={addressBilling.country}
                  label="Country"
                  renderValue={(value) => ` - ${value} -`}
                  onChange={handleCountryShippingChange}
                  inputProps={{
                    name: 'billing-country',
                  }}
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
                {
                  <FormHelperText error={errors.billingCountry && dirty.billingDirty ? true : false}>
                    {errors.billingCountry && dirty.billingDirty ? errors.billingCountry : ''}
                  </FormHelperText>
                }
              </FormControl>
              <TextField
                inputProps={{
                  'data-type': 'billing',
                }}
                variant="standard"
                id="billing-state"
                label="State"
                value={addressBilling?.state || ''}
                onChange={handleChange}
                name="state"
              />
              <TextField
                inputProps={{
                  'data-type': 'billing',
                }}
                variant="standard"
                id="billing-city"
                label="City"
                value={addressBilling?.city || ''}
                onChange={handleChange}
                name="city"
              />
              <TextField
                inputProps={{
                  'data-type': 'billing',
                }}
                variant="standard"
                id="billing-street_name"
                label="Street name"
                value={addressBilling?.streetName || ''}
                onChange={handleChange}
                name="streetName"
              />
              <TextField
                inputProps={{
                  'data-type': 'billing',
                }}
                variant="standard"
                id="billing-street_number"
                label="Street number"
                value={addressBilling?.building || ''}
                onChange={handleChange}
                name="streetNumber"
              />
              <TextField
                inputProps={{
                  'data-type': 'billing',
                }}
                variant="standard"
                id="billing-apart"
                label="Apartment"
                value={addressBilling?.apartment || ''}
                onChange={handleChange}
                name="apartment"
              />
              <TextField
                inputProps={{
                  'data-type': 'billing',
                }}
                variant="standard"
                id="billing-zip"
                label="Zip"
                value={addressBilling?.postalCode || ''}
                onChange={handleChange}
                name="postalCode"
              />
              <TextField
                inputProps={{
                  'data-type': 'billing',
                }}
                variant="standard"
                id="billing-first_name"
                label="First name"
                value={addressBilling?.firstName || ''}
                onChange={handleChange}
                name="firstName"
              />
              <TextField
                inputProps={{
                  'data-type': 'billing',
                }}
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
