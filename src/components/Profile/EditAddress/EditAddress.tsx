import { Customer } from '@commercetools/platform-sdk';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  // FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { AddCustomerAddress, changeCustomerAddress } from '../../../api/requests';
// import { AddCustomerAddress } from '../../../api/requests';
import { FC, useState } from 'react';
import { login } from '../../../store/reducers/user.slice';
import { useAppDispatch } from '../../../hooks/redux';
import { countries } from '../../../constants/countries';
import { AddressType } from '../../../types/types';

interface CustomerAddressProps {
  customer: Customer;
  setIsOpen: (isOpen: boolean) => void;
  addressId: string;
}

const EditAddress: FC<CustomerAddressProps> = ({ customer, setIsOpen, addressId }) => {
  const currentAddress = customer.addresses.find((item) => item.id === addressId);
  const currentIsShipping = customer.shippingAddressIds?.includes(addressId);
  const currentIsBilling = customer.billingAddressIds?.includes(addressId);
  const [address, setAddress] = useState<AddressType>(currentAddress!);
  const [isShipping, setIsShipping] = useState(currentIsShipping);
  const [isBilling, setIsBilling] = useState(currentIsBilling);

  const handleAddressChange = (field: string, value: string) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      [field]: value,
    }));
  };

  const dispatch = useAppDispatch();

  // const validateAddress = () => {
  //   return true;
  // };

  const handleSave = async () => {
    // const validateState = validateAddress();
    // if (!validateState) {
    //   return;
    // }
    let newCustomer = await changeCustomerAddress(customer.id, customer.version, {
      action: 'changeAddress',
      addressId,
      address,
    });
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
              Edit Address
            </Typography>
            {/* <Grid item xs={10} lg={4}>
              <Stack direction="row" spacing={2}></Stack>
            </Grid> */}
            <Grid item xs={10} lg={4}>
              <Stack direction="row" spacing={2}>
                <TextField
                  variant="standard"
                  id="title"
                  label="Title"
                  value={address?.title}
                  onChange={(e) => handleAddressChange('title', e.target.value)}
                />
                <FormControl sx={{ m: 0, minWidth: 180 }}>
                  <InputLabel sx={{ marginBottom: 0 }} id="country">
                    Country
                  </InputLabel>
                  <Select
                    sx={{ marginBottom: 0 }}
                    variant="standard"
                    id="country"
                    value={address?.country || ''}
                    label="Country"
                    renderValue={(value) => ` - ${value} -`}
                    onChange={(e) => handleAddressChange('country', e.target.value)}
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
                  {/* {!address?.country && <FormHelperText>{'Country is required'}</FormHelperText>} */}
                </FormControl>
                <TextField
                  variant="standard"
                  id="state"
                  label="State"
                  value={address?.state}
                  onChange={(e) => handleAddressChange('state', e.target.value)}
                />
              </Stack>
            </Grid>
            <Grid item xs={10} lg={4}>
              <Stack direction="row" spacing={2}>
                {' '}
                <TextField
                  variant="standard"
                  id="city"
                  label="City"
                  value={address?.city}
                  onChange={(e) => handleAddressChange('city', e.target.value)}
                />
                <TextField
                  variant="standard"
                  id="street_name"
                  label="Street name"
                  value={address?.streetName}
                  onChange={(e) => handleAddressChange('streetName', e.target.value)}
                />
                <TextField
                  variant="standard"
                  id="street_number"
                  label="Street number"
                  value={address?.streetNumber}
                  onChange={(e) => handleAddressChange('streetNumber', e.target.value)}
                />
              </Stack>
            </Grid>
            <Grid item xs={10} lg={4}>
              <Stack direction="row" spacing={2}>
                <TextField
                  variant="standard"
                  id="building"
                  label="Building"
                  value={address?.building}
                  onChange={(e) => handleAddressChange('building', e.target.value)}
                />
                <TextField
                  variant="standard"
                  id="apart"
                  label="Apartment"
                  value={address?.apartment}
                  onChange={(e) => handleAddressChange('apartment', e.target.value)}
                />
                <TextField
                  variant="standard"
                  id="zip"
                  label="Zip"
                  value={address?.postalCode}
                  onChange={(e) => handleAddressChange('postalCode', e.target.value)}
                />
              </Stack>
            </Grid>
            <Grid item xs={10} lg={4}>
              {' '}
              <Stack direction="row" spacing={2}>
                {' '}
                <TextField
                  variant="standard"
                  id="first_name"
                  label="First name"
                  value={address?.firstName}
                  onChange={(e) => handleAddressChange('firstName', e.target.value)}
                />
                <TextField
                  variant="standard"
                  id="last_name"
                  label="Last name"
                  value={address?.lastName}
                  onChange={(e) => handleAddressChange('lastName', e.target.value)}
                />
                <TextField
                  variant="standard"
                  id="phone"
                  label="Phone number"
                  value={address?.mobile}
                  onChange={(e) => handleAddressChange('mobile', e.target.value)}
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
            {/* <Grid item xs={10} lg={4}></Grid> */}
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
          <Button onClick={() => handleSave()} variant="outlined">
            Save
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EditAddress;
