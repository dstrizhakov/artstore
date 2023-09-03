import { Customer } from '@commercetools/platform-sdk';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { AddCustomerAddress } from '../../../api/requests';
import { FC, useCallback, useEffect, useState } from 'react';
import { login } from '../../../store/reducers/user.slice';
import { useAppDispatch } from '../../../hooks/redux';
import { countries } from '../../../constants/countries';
import { Erroring } from '../../../types/ConfigValidator';
import { validator } from '../../../utils/validator';
import validatorConfig from '../../../utils/validatorConfig';

interface CustomerAddressProps {
  customer: Customer;
  setIsOpen: (isOpen: boolean) => void;
}

const AddAddress: FC<CustomerAddressProps> = ({ customer, setIsOpen }) => {
  const [address, setAddress] = useState({
    title: '',
    country: '',
    state: '',
    city: '',
    streetName: '',
    streetNumber: '',
    building: '',
    apartment: '',
    postalCode: '',
    firstNameShipping: '',
    lastNameShipping: '',
    mobile: '',
  });
  const [dirty, setDirty] = useState({
    title: false,
    country: false,
    state: false,
    city: false,
    streetName: false,
    streetNumber: false,
    building: false,
    apartment: false,
    postalCode: false,
    firstNameShipping: false,
    lastNameShipping: false,
    mobile: false,
  });

  const [errors, setErrors] = useState<Erroring>({});
  const [isShipping, setIsShipping] = useState(false);
  const [isBilling, setIsBilling] = useState(false);

  const handleAddressChange = (field: string, value: string) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      [field]: value,
    }));
  };

  const dispatch = useAppDispatch();

  const validateAddress = () => {
    return true;
  };
  const blurHandler = (field: string) => {
    setDirty((prevState) => ({
      ...prevState,
      [field]: true,
    }));
  };

  const handleSave = async () => {
    const validateState = validateAddress();
    if (!validateState) {
      return;
    }

    let newCustomer = await AddCustomerAddress(customer.id, customer.version, [
      {
        action: 'addAddress',
        address: {
          firstName: address.firstNameShipping,
          state: address.state,
          streetNumber: address.streetNumber,
          title: address.title,
          mobile: address.mobile,
          lastName: address.lastNameShipping,
          streetName: address.streetName,
          postalCode: address.postalCode,
          city: address.city,
          country: address.country,
          building: address.building,
          apartment: address.apartment,
        },
      },
    ]);

    const newAddressId = newCustomer.body.addresses.find((item) => item.title === address.title)!.id;
    if (isShipping) {
      newCustomer = await AddCustomerAddress(newCustomer.body.id, newCustomer.body.version, [
        {
          action: 'addShippingAddressId',
          addressId: newAddressId,
        },
      ]);
    }
    if (isBilling) {
      newCustomer = await AddCustomerAddress(newCustomer.body.id, newCustomer.body.version, [
        {
          action: 'addBillingAddressId',
          addressId: newAddressId,
        },
      ]);
    }

    dispatch(login(newCustomer.body));
    setIsOpen(false);
  };
  const validate = useCallback(async () => {
    try {
      const error: Erroring = validator(
        {
          ...address,
        },
        validatorConfig,
        customer.addresses
      );

      setErrors(error);
      return Object.keys(error).length === 0;
    } catch (validationError) {
      console.error('Validation Error:', validationError);
      return false;
    }
  }, [address, customer.addresses]);
  useEffect(() => {
    validate();
  }, [validate]);

  const isValid = Object.keys(errors).length === 0;

  return (
    <>
      <Box
        sx={{
          display: 'block',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <div>
          <Grid container direction="column" spacing={2}>
            <Typography variant="h4" sx={{ margin: ' 0 auto', paddingBottom: '40px' }}>
              Add Address
            </Typography>
            <Grid item xs={10} lg={4}>
              <Stack direction="row" spacing={2}>
                <TextField
                  onBlur={() => blurHandler('title')}
                  error={errors.title && dirty.title ? true : false}
                  variant="standard"
                  id="title"
                  label="Title *"
                  name="title"
                  value={address?.title || ''}
                  onChange={(e) => handleAddressChange('title', e.target.value)}
                  helperText={errors.title && dirty.title ? errors.title : ''}
                />
                <FormControl error={errors.country && dirty.country ? true : false} sx={{ m: 0, minWidth: 180 }}>
                  <InputLabel
                    error={errors.country && dirty.country ? true : false}
                    sx={{ marginBottom: 0 }}
                    id="country"
                  >
                    Country *
                  </InputLabel>
                  <Select
                    error={errors.country && dirty.country ? true : false}
                    onBlur={() => blurHandler('country')}
                    sx={{ marginBottom: 0 }}
                    variant="standard"
                    id="country"
                    value={address?.country || ''}
                    label="Country"
                    renderValue={(value) => ` - ${value} -`}
                    onChange={(e) => handleAddressChange('country', e.target.value)}
                    inputProps={{
                      name: 'country',
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
                    <FormHelperText sx={{ marginBottom: 0 }} error={errors.country && dirty.country ? true : false}>
                      {errors.country && dirty.country ? errors.country : ''}
                    </FormHelperText>
                  }
                </FormControl>
                <TextField
                  error={errors.state && dirty.state ? true : false}
                  onBlur={() => blurHandler('state')}
                  variant="standard"
                  id="state"
                  label="State"
                  name="state"
                  value={address?.state || ''}
                  onChange={(e) => handleAddressChange('state', e.target.value)}
                  helperText={errors.state && dirty.state ? errors.state : ''}
                />
              </Stack>
            </Grid>
            <Grid item xs={10} lg={4}>
              <Stack direction="row" spacing={2}>
                {' '}
                <TextField
                  error={errors.city && dirty.city ? true : false}
                  onBlur={() => blurHandler('city')}
                  variant="standard"
                  id="city"
                  name="city"
                  label="City *"
                  value={address?.city || ''}
                  onChange={(e) => handleAddressChange('city', e.target.value)}
                  helperText={errors.city && dirty.city ? errors.city : ''}
                />
                <TextField
                  error={errors.streetName && dirty.streetName ? true : false}
                  onBlur={() => blurHandler('streetName')}
                  variant="standard"
                  id="street_name"
                  label="Street name *"
                  value={address?.streetName || ''}
                  onChange={(e) => handleAddressChange('streetName', e.target.value)}
                  name="streetName"
                  helperText={errors.streetName && dirty.streetName ? errors.streetName : ''}
                />
                <TextField
                  error={errors.streetNumber && dirty.streetNumber ? true : false}
                  onBlur={() => blurHandler('streetNumber')}
                  variant="standard"
                  id="street_number"
                  label="Street number *"
                  name="streetNumber"
                  value={address?.streetNumber || ''}
                  onChange={(e) => handleAddressChange('streetNumber', e.target.value)}
                  helperText={errors.streetNumber && dirty.streetNumber ? errors.streetNumber : ''}
                />
              </Stack>
            </Grid>
            <Grid item xs={10} lg={4}>
              <Stack direction="row" spacing={2}>
                <TextField
                  error={errors.building && dirty.building ? true : false}
                  onBlur={() => blurHandler('building')}
                  variant="standard"
                  id="building"
                  label="Building"
                  name="building"
                  value={address?.building || ''}
                  onChange={(e) => handleAddressChange('building', e.target.value)}
                  helperText={errors.building && dirty.building ? errors.building : ''}
                />
                <TextField
                  error={errors.apartment && dirty.apartment ? true : false}
                  onBlur={() => blurHandler('apartment')}
                  variant="standard"
                  id="apart"
                  label="Apartment *"
                  name="apartment"
                  value={address?.apartment || ''}
                  onChange={(e) => handleAddressChange('apartment', e.target.value)}
                  helperText={errors.apartment && dirty.apartment ? errors.apartment : ''}
                />
                <TextField
                  error={errors.postalCode && dirty.postalCode ? true : false}
                  onBlur={() => blurHandler('postalCode')}
                  variant="standard"
                  id="zip"
                  label="Zip *"
                  value={address?.postalCode || ''}
                  onChange={(e) => handleAddressChange('postalCode', e.target.value)}
                  name="postalCode"
                  helperText={errors.postalCode && dirty.postalCode ? errors.postalCode : ''}
                />
              </Stack>
            </Grid>
            <Grid item xs={10} lg={4}>
              {' '}
              <Stack direction="row" spacing={2}>
                {' '}
                <TextField
                  error={errors.firstNameShipping && dirty.firstNameShipping ? true : false}
                  onBlur={() => blurHandler('firstNameShipping')}
                  variant="standard"
                  id="first_name"
                  label="First name *"
                  name="firstNameShipping"
                  value={address?.firstNameShipping || ''}
                  onChange={(e) => handleAddressChange('firstNameShipping', e.target.value)}
                  helperText={errors.firstNameShipping && dirty.firstNameShipping ? errors.firstNameShipping : ''}
                />
                <TextField
                  error={errors.lastNameShipping && dirty.lastNameShipping ? true : false}
                  onBlur={() => blurHandler('lastNameShipping')}
                  variant="standard"
                  id="last_name"
                  label="Last name *"
                  name="lastNameShipping"
                  value={address?.lastNameShipping || ''}
                  onChange={(e) => handleAddressChange('lastNameShipping', e.target.value)}
                  helperText={errors.lastNameShipping && dirty.lastNameShipping ? errors.lastNameShipping : ''}
                />
                <TextField
                  error={errors.mobile && dirty.mobile ? true : false}
                  onBlur={() => blurHandler('mobile')}
                  variant="standard"
                  id="phone"
                  label="Phone number *"
                  name="mobile"
                  value={address?.mobile || ''}
                  onChange={(e) => handleAddressChange('mobile', e.target.value)}
                  helperText={errors.mobile && dirty.mobile ? errors.mobile : ''}
                />
              </Stack>
            </Grid>
            <Grid item xs={10} lg={4}>
              <Stack direction="row" my={2} spacing={2}>
                <FormControlLabel
                  control={
                    <Switch
                      color="primary"
                      checked={isShipping}
                      onChange={() => {
                        setIsShipping(!isShipping);
                      }}
                    />
                  }
                  label="Shipping"
                  labelPlacement="start"
                />
                <FormControlLabel
                  control={
                    <Switch
                      color="primary"
                      checked={isBilling}
                      onChange={() => {
                        setIsBilling(!isBilling);
                      }}
                    />
                  }
                  label="Billing"
                  labelPlacement="start"
                />
              </Stack>
            </Grid>
          </Grid>
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
          <Button disabled={!isValid} onClick={() => handleSave()} variant="outlined">
            Save
          </Button>
          <FormHelperText error={!isValid}>{!isValid && 'Fill in the required fields marked as "*"'}</FormHelperText>
        </Box>
      </Box>
    </>
  );
};

export default AddAddress;
