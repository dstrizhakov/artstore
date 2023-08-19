import { Customer } from '@commercetools/platform-sdk';
import { Box, Button, FormControlLabel, Grid, Paper, Switch, TextField } from '@mui/material';
// import { changeAddress } from '../../../api/requests';
import { FC, useState } from 'react';

interface CustomerAddressProps {
  type: 'shipping' | 'billing';
  customer: Customer;
  setBillingSame?: (status: boolean) => void;
  billingSame?: boolean;
}

const CustomerAddress: FC<CustomerAddressProps> = ({ customer, type, billingSame, setBillingSame }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [country, setCountry] = useState(customer.addresses[0].country);
  const [state, setState] = useState(customer.addresses[0].state);
  const [city, setCity] = useState(customer.addresses[0].city);
  const [streetName, setStreetName] = useState(customer.addresses[0].streetName);
  const [streetNumber, setStreetNumber] = useState(customer.addresses[0].streetNumber);
  const [building, setBuilding] = useState(customer.addresses[0].building);
  const [apartment, setApartment] = useState(customer.addresses[0].apartment);
  const [postalCode, setPostalCode] = useState(customer.addresses[0].postalCode);
  const [firstName, setFirstName] = useState(customer.addresses[0].firstName);
  const [lastName, setLastName] = useState(customer.addresses[0].lastName);
  const [phoneNumber, setPhoneNumber] = useState(customer.addresses[0].mobile);

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
    // const response = changeAddress({
    //   action: 'changeAddress',
    //   addressId: customer.addresses[0].id,
    //   address: {
    //     key: 'Shipping Address',
    //     title: 'Mr.',
    //     country,
    //     state,
    //     city,
    //     streetName,
    //     streetNumber,
    //     building,
    //     apartment,
    //     postalCode,
    //     firstName,
    //     lastName,
    //     mobile: phoneNumber,
    //   },
    // });
    // console.log('CHANGE ADDRESS RESPONSE', response);
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
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_state`}
              label="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_city`}
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_street_name`}
              label="Street name"
              value={streetName}
              onChange={(e) => setStreetName(e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_street_number`}
              label="Street number"
              value={streetNumber}
              onChange={(e) => setStreetNumber(e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_building`}
              label="Building"
              value={building}
              onChange={(e) => setBuilding(e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_apart`}
              label="Apartment"
              value={apartment}
              onChange={(e) => setApartment(e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_zip`}
              label="Zip"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_first_name`}
              label="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_last_name`}
              label="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id={`${type}_phone`}
              label="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
