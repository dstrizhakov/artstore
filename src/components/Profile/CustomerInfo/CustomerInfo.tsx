import { Customer } from '@commercetools/platform-sdk';
import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import { FC, useState } from 'react';

interface CustomerInfoProps {
  customer: Customer;
}

const CustomerInfo: FC<CustomerInfoProps> = ({ customer }) => {
  const [isEdit, setIsEdit] = useState(true);

  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleSave = () => {
    //тут проверяем валидность данных и отправляем на сервер
    setIsEdit(false);
  };
  return (
    <Grid item xs={12} md={8}>
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
          <h3>Customer info</h3>

          <TextField
            variant="standard"
            disabled={!isEdit}
            id="first_name"
            label="First name"
            defaultValue={customer.firstName}
          />
          <TextField
            variant="standard"
            disabled={!isEdit}
            id="middle_name"
            label="Middle name"
            defaultValue={customer.middleName}
          />
          <TextField
            variant="standard"
            disabled={!isEdit}
            id="last_name"
            label="Last name"
            defaultValue={customer.lastName}
          />
          <TextField
            variant="standard"
            disabled={!isEdit}
            id="customer_email"
            label="Email"
            defaultValue={customer.email}
          />

          <div>
            <Button onClick={() => (isEdit ? handleSave() : handleEdit())}>{isEdit ? 'Save' : 'Edit'}</Button>
          </div>
        </Box>
      </Paper>
    </Grid>
  );
};

export default CustomerInfo;
