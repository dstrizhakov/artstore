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
  Paper,
  Select,
  Switch,
  TextField,
} from '@mui/material';
import { AddCustomerAddress, changeCustomerAddress } from '../../../api/requests';
import { FC, useState } from 'react';
import { login } from '../../../store/reducers/user.slice';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { changeBillingSame } from '../../../store/reducers/address.slice';
import { countries } from '../../../constants/countries';

interface CustomerAddressProps {
  type: 'shipping' | 'billing';
  customer: Customer;
}

const CustomerAddress: FC<CustomerAddressProps> = ({ customer, type }) => {
  const index = type === 'shipping' ? 0 : 1;

  const [isEdit, setIsEdit] = useState(false);

  const [address, setAddress] = useState(customer.addresses[index]);

  const isBillingSame = useAppSelector((state) => state.addresses.isBillingSame);

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
  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleSave = async () => {
    const validateState = validateAddress();
    if (!validateState) {
      return;
    }
    //если уже есть адрес выставления счета
    if (customer.addresses.length === 2) {
      const addressId = customer.addresses[index].id;
      const addressKey = customer.addresses[index].key;
      const response = await changeCustomerAddress(customer.id, customer.version, {
        action: 'changeAddress',
        addressId,
        addressKey,
        address,
      });
      dispatch(login(response.body));
      setIsEdit(false);
    } else {
      const newCustomer = await AddCustomerAddress(customer.id, customer.version, {
        action: 'addAddress',
        address: {
          firstName: address.firstName,
          lastName: address.lastName,
          streetName: address.streetName,
          postalCode: address.postalCode,
          city: address.city,
          country: address.country,
          building: address.building,
          apartment: address.apartment,
        },
      });

      dispatch(login(newCustomer));
      setIsEdit(false);
    }
  };

  return (
    <Grid item xs={12} md={12}>
      <Paper>
        <Box
          sx={{
            display: 'block',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <h3>{type === 'shipping' ? 'Shipping' : 'Billing'} address</h3>
          <div>
            <FormControl sx={{ m: 0, minWidth: 120 }} error={!address?.country}>
              <InputLabel id={`${type}_country`}>Country</InputLabel>
              <Select
                disabled={!isEdit}
                variant="outlined"
                id={`${type}_country`}
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
              {!address?.country && <FormHelperText>{'Country is required'}</FormHelperText>}
            </FormControl>
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_state`}
              label="State"
              value={address?.state}
              onChange={(e) => handleAddressChange('state', e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_city`}
              label="City"
              value={address?.city}
              onChange={(e) => handleAddressChange('city', e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_street_name`}
              label="Street name"
              value={address?.streetName}
              onChange={(e) => handleAddressChange('streetName', e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_street_number`}
              label="Street number"
              value={address?.streetNumber}
              onChange={(e) => handleAddressChange('streetNumber', e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_building`}
              label="Building"
              value={address?.building}
              onChange={(e) => handleAddressChange('building', e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_apart`}
              label="Apartment"
              value={address?.apartment}
              onChange={(e) => handleAddressChange('apartment', e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_zip`}
              label="Zip"
              value={address?.postalCode}
              onChange={(e) => handleAddressChange('postalCode', e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_first_name`}
              label="First name"
              value={address?.firstName}
              onChange={(e) => handleAddressChange('firstName', e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_last_name`}
              label="Last name"
              value={address?.lastName}
              onChange={(e) => handleAddressChange('lastName', e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_phone`}
              label="Phone number"
              value={address?.mobile}
              onChange={(e) => handleAddressChange('mobile', e.target.value)}
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
            <Button onClick={() => (isEdit ? handleSave() : handleEdit())}>{isEdit ? 'Save' : 'Edit'}</Button>
            {type === 'shipping' ? (
              <>
                <FormControlLabel
                  control={
                    <Switch
                      color="primary"
                      checked={isBillingSame}
                      onChange={() => {
                        dispatch(changeBillingSame(!isBillingSame));
                      }}
                    />
                  }
                  label="The billing address is the same"
                  labelPlacement="start"
                />
              </>
            ) : (
              <></>
            )}
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default CustomerAddress;
