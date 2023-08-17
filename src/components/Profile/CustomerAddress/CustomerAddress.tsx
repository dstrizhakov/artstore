import { Customer } from '@commercetools/platform-sdk';
import { Box, Button, FormControlLabel, Grid, Paper, Switch, TextField } from '@mui/material';
import { FC, useState } from 'react';

interface CustomerAddressProps {
  type: 'shipping' | 'billing';
  customer: Customer;
  setBillingSame?: (status: boolean) => void;
  billingSame?: boolean;
}

const CustomerAddress: FC<CustomerAddressProps> = ({ customer, type, billingSame, setBillingSame }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleSave = () => {
    //тут проверяем валидность данных и отправляем на сервер
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
              id="shipping_country"
              label="Country"
              defaultValue={customer.addresses[0].state}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id="shipping_state"
              label="State"
              defaultValue={customer.addresses[0].country}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id="shipping_city"
              label="City"
              defaultValue={customer.addresses[0].city}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id="shipping_street_name"
              label="Street name"
              defaultValue={customer.addresses[0].streetName}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id="shipping_street_number"
              label="Street number"
              defaultValue={customer.addresses[0].streetNumber}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id="shipping_building"
              label="Building"
              defaultValue={customer.addresses[0].building}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id="shipping_apart"
              label="Apartment"
              defaultValue={customer.addresses[0].apartment}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id="shipping_zip"
              label="Zip"
              defaultValue={customer.addresses[0].postalCode}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id="shipping_first_name"
              label="First name"
              defaultValue={customer.addresses[0].firstName}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id="shipping_last_name"
              label="Last name"
              defaultValue={customer.addresses[0].lastName}
            />
            <TextField
              variant="standard"
              disabled={!isEdit}
              id="shipping_phone"
              label="Phone number"
              defaultValue={customer.addresses[0].lastName}
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
