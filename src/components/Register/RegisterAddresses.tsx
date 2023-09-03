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
import { Erroring } from '../../types/ConfigValidator';
import { Dirty } from '../../types/Dirty';
interface RegisterAddressProps {
  address: AddressType;
  handleChange: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => void;
  billingSame: boolean;
  addressBilling: AddressType;
  setBillingSame: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  handleCountryShippingChange: (event: SelectChangeEvent<string>) => void;
  errors: Erroring;
  dirty: Dirty;
  blurHandler: (field: string) => void;
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
            <TextField
              error={errors.title && dirty.title ? true : false}
              onBlur={() => blurHandler('title')}
              inputProps={{
                'data-type': 'shipping',
              }}
              variant="standard"
              id="title"
              label="Title *"
              value={address?.title || ''}
              onChange={(e) => handleChange(e, 'title')}
              name="title"
              helperText={errors.title && dirty.title ? errors.title : ''}
            />
            <FormControl error={errors.country && dirty.country ? true : false} sx={{ m: 0, minWidth: 120 }}>
              <InputLabel error={errors.country && dirty.country ? true : false} id="shipping-country">
                Country *
              </InputLabel>
              <Select
                error={errors.country && dirty.country ? true : false}
                onBlur={() => blurHandler('country')}
                variant="standard"
                id="country"
                value={address.country}
                label="Country"
                renderValue={(value) => ` - ${value} -`}
                onChange={handleCountryShippingChange}
                inputProps={{
                  name: 'shipping-country',
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
                <FormHelperText error={errors.country && dirty.country ? true : false}>
                  {errors.country && dirty.country ? errors.country : ''}
                </FormHelperText>
              }
            </FormControl>

            <TextField
              error={errors.state && dirty.state ? true : false}
              onBlur={() => blurHandler('state')}
              onChange={(e) => handleChange(e, 'state')}
              inputProps={{
                'data-type': 'shipping',
              }}
              variant="standard"
              id="state"
              label="State"
              value={address?.state || ''}
              name="state"
              helperText={errors.state && dirty.state ? errors.state : ''}
            />
            <TextField
              inputProps={{
                'data-type': 'shipping',
              }}
              error={errors.city && dirty.city ? true : false}
              onChange={(e) => handleChange(e, 'city')}
              onBlur={() => blurHandler('city')}
              variant="standard"
              id="city"
              label="City *"
              value={address.city}
              autoComplete="username"
              name="city"
              helperText={errors.city && dirty.city ? errors.city : ''}
            />
            <TextField
              inputProps={{
                'data-type': 'shipping',
              }}
              error={errors.streetName && dirty.streetName ? true : false}
              onBlur={() => blurHandler('streetName')}
              variant="standard"
              id="streetName"
              label="Street name *"
              value={address?.streetName || ''}
              onChange={(e) => handleChange(e, 'streetName')}
              name="streetName"
              helperText={errors.streetName && dirty.streetName ? errors.streetName : ''}
            />
            <TextField
              error={errors.streetNumber && dirty.streetNumber ? true : false}
              inputProps={{
                'data-type': 'shipping',
              }}
              onBlur={() => blurHandler('streetNumber')}
              variant="standard"
              id="streetNumber"
              label="Street number *"
              value={address?.streetNumber || ''}
              onChange={(e) => handleChange(e, 'streetNumber')}
              name="streetNumber"
              helperText={errors.streetNumber && dirty.streetNumber ? errors.streetNumber : ''}
            />
            <TextField
              error={errors.building && dirty.building ? true : false}
              inputProps={{
                'data-type': 'shipping',
              }}
              onBlur={() => blurHandler('building')}
              variant="standard"
              id="building"
              label="Building"
              value={address?.building || ''}
              onChange={(e) => handleChange(e, 'building')}
              name="apartment"
              helperText={errors.building && dirty.building ? errors.building : ''}
            />
            <TextField
              error={errors.apartment && dirty.apartment ? true : false}
              inputProps={{
                'data-type': 'shipping',
              }}
              onBlur={() => blurHandler('apartment')}
              variant="standard"
              id="apartment"
              label="Apartment *"
              value={address?.apartment || ''}
              onChange={(e) => handleChange(e, 'apartment')}
              name="apartment"
              helperText={errors.apartment && dirty.apartment ? errors.apartment : ''}
            />
            <TextField
              inputProps={{
                'data-type': 'shipping',
              }}
              error={errors.postalCode && dirty.zip ? true : false}
              onBlur={() => blurHandler('zip')}
              variant="standard"
              id="zip"
              label="Zip *"
              value={address?.postalCode || ''}
              onChange={(e) => handleChange(e, 'postalCode')}
              name="postalCode"
              helperText={errors.postalCode && dirty.zip ? errors.postalCode : ''}
            />
            <TextField
              error={errors.firstNameShipping && dirty.firstNameShipping ? true : false}
              inputProps={{
                'data-type': 'shipping',
              }}
              onBlur={() => blurHandler('firstNameShipping')}
              variant="standard"
              id="firstName"
              label="First name *"
              value={address?.firstName || ''}
              onChange={(e) => handleChange(e, 'firstName')}
              name="firstName"
              helperText={errors.firstNameShipping && dirty.firstNameShipping ? errors.firstNameShipping : ''}
            />
            <TextField
              error={errors.lastNameShipping && dirty.lastNameShipping ? true : false}
              inputProps={{
                'data-type': 'shipping',
              }}
              onBlur={() => blurHandler('lastNameShipping')}
              variant="standard"
              id="lastName"
              label="Last name *"
              value={address?.lastName || ''}
              onChange={(e) => handleChange(e, 'lastName')}
              name="lastName"
              helperText={errors.lastNameShipping && dirty.lastNameShipping ? errors.lastNameShipping : ''}
            />
            <TextField
              error={errors.mobile && dirty.mobile ? true : false}
              inputProps={{
                'data-type': 'shipping',
              }}
              onBlur={() => blurHandler('mobile')}
              variant="standard"
              id="mobile"
              label="Phone Number *"
              value={address?.mobile || ''}
              onChange={(e) => handleChange(e, 'mobile')}
              name="mobile"
              helperText={errors.mobile && dirty.mobile ? errors.mobile : ''}
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
              <TextField
                error={errors.billingTitle && dirty.billingTitle ? true : false}
                onBlur={() => blurHandler('title')}
                inputProps={{
                  'data-type': 'billing',
                }}
                variant="standard"
                id="billingTitle"
                label="Title *"
                value={addressBilling?.title || ''}
                onChange={(e) => handleChange(e, 'title')}
                name="billingTitle"
                helperText={errors.billingTitle && dirty.billingTitle ? errors.billingTitle : ''}
              />
              <FormControl sx={{ m: 0, minWidth: 120 }} error={!!errors.billingCountry && dirty.billingCountry}>
                <InputLabel error={!!errors.billingCountry && dirty.billingCountry} id="billing-country">
                  Country *
                </InputLabel>
                <Select
                  onBlur={() => blurHandler('billingCountry')}
                  variant="standard"
                  id="billingCountry"
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
                  <FormHelperText error={errors.billingCountry && dirty.billingCountry ? true : false}>
                    {errors.billingCountry && dirty.billingCountry ? errors.billingCountry : ''}
                  </FormHelperText>
                }
              </FormControl>
              <TextField
                error={errors.billingState && dirty.billingState ? true : false}
                onBlur={() => blurHandler('billingState')}
                inputProps={{
                  'data-type': 'billing',
                }}
                variant="standard"
                id="billingState"
                label="State"
                value={addressBilling?.state || ''}
                onChange={(e) => handleChange(e, 'state')}
                name="billingState"
                helperText={errors.billingState && dirty.billingState ? errors.billingState : ''}
              />
              <TextField
                error={errors.billingCity && dirty.billingCity ? true : false}
                inputProps={{
                  'data-type': 'billing',
                }}
                onBlur={() => blurHandler('billingCity')}
                variant="standard"
                id="billingCity"
                label="City *"
                value={addressBilling?.city || ''}
                onChange={(e) => handleChange(e, 'city')}
                name="city"
                helperText={errors.billingCity && dirty.billingCity ? errors.billingCity : ''}
              />
              <TextField
                error={errors.billingStreetName && dirty.billingStreetName ? true : false}
                inputProps={{
                  'data-type': 'billing',
                }}
                onBlur={() => blurHandler('billingStreetName')}
                variant="standard"
                id="billingStreetName"
                label="Street name *"
                value={addressBilling?.streetName || ''}
                onChange={(e) => handleChange(e, 'streetName')}
                name="streetName"
                helperText={errors.billingStreetName && dirty.billingStreetName ? errors.billingStreetName : ''}
              />
              <TextField
                error={errors.billingStreetNumber && dirty.billingStreetNumber ? true : false}
                onBlur={() => blurHandler('billingStreetNumber')}
                inputProps={{
                  'data-type': 'billing',
                }}
                variant="standard"
                id="billingStreetNumber"
                label="Street number *"
                value={addressBilling?.building || ''}
                onChange={(e) => handleChange(e, 'streetNumber')}
                name="billingStreetNumber"
                helperText={errors.billingStreetNumber && dirty.billingStreetNumber ? errors.billingStreetNumber : ''}
              />
              <TextField
                error={errors.billingBuilding && dirty.billingBuilding ? true : false}
                inputProps={{
                  'data-type': 'billing',
                }}
                onBlur={() => blurHandler('billingBuilding')}
                variant="standard"
                id="billingBuilding"
                label="Building"
                value={addressBilling?.building || ''}
                onChange={(e) => handleChange(e, 'building')}
                name="apartment"
                helperText={errors.billingBuilding && dirty.billingBuilding ? errors.billingBuilding : ''}
              />
              <TextField
                error={errors.billingApartment && dirty.billingApartment ? true : false}
                onBlur={() => blurHandler('billingApartment')}
                inputProps={{
                  'data-type': 'billing',
                }}
                variant="standard"
                id="billingApartment"
                label="Apartment *"
                value={addressBilling?.apartment || ''}
                onChange={(e) => handleChange(e, 'apartment')}
                name="billingApartment"
                helperText={errors.billingApartment && dirty.billingApartment ? errors.billingApartment : ''}
              />
              <TextField
                error={errors.billingPostalCode && dirty.billingZip ? true : false}
                inputProps={{
                  'data-type': 'billing',
                }}
                onBlur={() => blurHandler('billingZip')}
                variant="standard"
                id="billingZip"
                label="Zip *"
                value={addressBilling?.postalCode || ''}
                onChange={(e) => handleChange(e, 'postalCode')}
                name="postalCode"
                helperText={errors.billingPostalCode && dirty.billingZip ? errors.billingPostalCode : ''}
              />
              <TextField
                error={errors.firstNameBilling && dirty.firstNameBilling ? true : false}
                onBlur={() => blurHandler('firstNameBilling')}
                inputProps={{
                  'data-type': 'billing',
                }}
                variant="standard"
                id="firstNameBilling"
                label="First name *"
                value={addressBilling?.firstName || ''}
                onChange={(e) => handleChange(e, 'firstName')}
                name="billingFirstName"
                helperText={errors.firstNameBilling && dirty.firstNameBilling ? errors.firstNameBilling : ''}
              />
              <TextField
                error={errors.lastNameBilling && dirty.lastNameBilling ? true : false}
                onBlur={() => blurHandler('lastNameBilling')}
                inputProps={{
                  'data-type': 'billing',
                }}
                variant="standard"
                id="lastNameBilling"
                label="Last name *"
                value={addressBilling?.lastName || ''}
                onChange={(e) => handleChange(e, 'lastName')}
                name="billingLastName"
                helperText={errors.lastNameBilling && dirty.lastNameBilling ? errors.lastNameBilling : ''}
              />
              <TextField
                error={errors.billingMobile && dirty.billingMobile ? true : false}
                inputProps={{
                  'data-type': 'billing',
                }}
                onBlur={() => blurHandler('billingMobile')}
                variant="standard"
                id="billingMobile"
                label="Phone Number *"
                value={addressBilling?.mobile || ''}
                onChange={(e) => handleChange(e, 'mobile')}
                name="billingMobile"
                helperText={errors.billingMobile && dirty.billingMobile ? errors.billingMobile : ''}
              />
            </Box>
          </Box>
        )}
      </Box>
    </Grid>
  );
};

export default RegisterAddress;
