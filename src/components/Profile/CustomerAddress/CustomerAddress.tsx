import { Customer } from '@commercetools/platform-sdk';
import { Box, Button, FormControlLabel, Grid, Paper, Switch, TextField } from '@mui/material';
import { changeCustomerAddress } from '../../../api/requests';
import { FC, useState } from 'react';
import { login } from '../../../store/reducers/user.slice';
import { useAppDispatch } from '../../../hooks/redux';

interface CustomerAddressProps {
  type: 'shipping' | 'billing';
  customer: Customer;
  setBillingSame?: (status: boolean) => void;
  billingSame?: boolean;
}

const CustomerAddress: FC<CustomerAddressProps> = ({ customer, type, billingSame, setBillingSame }) => {
  const index = type === 'shipping' ? 0 : 1;

  const [isEdit, setIsEdit] = useState(false);

  const [address, setAddress] = useState(customer.addresses[index]);

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
    const addressId = customer.addresses[index].id;
    const addressKey = customer.addresses[index].key;
    const version = customer.version;
    const response = await changeCustomerAddress(customer.id, version, {
      action: 'changeAddress',
      addressId,
      addressKey,
      address,
    });
    dispatch(login(response.body));
    setIsEdit(false);
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
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_country`}
              label="Country"
              value={address.country}
              onChange={(e) => handleAddressChange('country', e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_state`}
              label="State"
              value={address.state}
              onChange={(e) => handleAddressChange('state', e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_city`}
              label="City"
              value={address.city}
              onChange={(e) => handleAddressChange('city', e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_street_name`}
              label="Street name"
              value={address.streetName}
              onChange={(e) => handleAddressChange('streetName', e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_street_number`}
              label="Street number"
              value={address.streetNumber}
              onChange={(e) => handleAddressChange('streetNumber', e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_building`}
              label="Building"
              value={address.building}
              onChange={(e) => handleAddressChange('building', e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_apart`}
              label="Apartment"
              value={address.apartment}
              onChange={(e) => handleAddressChange('apartment', e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_zip`}
              label="Zip"
              value={address.postalCode}
              onChange={(e) => handleAddressChange('postalCode', e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_first_name`}
              label="First name"
              value={address.firstName}
              onChange={(e) => handleAddressChange('firstName', e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_last_name`}
              label="Last name"
              value={address.lastName}
              onChange={(e) => handleAddressChange('lastName', e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_phone`}
              label="Phone number"
              value={address.mobile}
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
            {type === 'shipping' && setBillingSame ? (
              <>
                <FormControlLabel
                  control={
                    <Switch color="primary" checked={billingSame} onChange={() => setBillingSame(!billingSame)} />
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
