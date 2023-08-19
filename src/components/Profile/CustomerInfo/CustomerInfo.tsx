import { Customer } from '@commercetools/platform-sdk';
import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import { updateCustomer } from '../../../api/requests';
import { useAppDispatch } from '../../../hooks/redux';
import { FC, useCallback, useEffect, useState } from 'react';
import { login } from '../../../store/reducers/user.slice';
import { validator } from '../../../utils/validator';
import validatorConfig from '../../../utils/validatorConfig';
import { Erroring } from '../../../pages/Register';

interface CustomerInfoProps {
  customer: Customer;
}
export interface DataCustomerInfo {
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
}
const CustomerInfo: FC<CustomerInfoProps> = ({ customer }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState({
    firstName: customer.firstName || '',
    lastName: customer.lastName || '',
    middleName: customer.middleName || '',
    email: customer.email || '',
  });
  const [emailDirty, setEmailDirty] = useState(false);
  const [firstNameDirty, setFirstNameDirty] = useState(false);
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [errors, setErrors] = useState({} as Erroring);

  const dispatch = useAppDispatch();

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleUpdate = async () => {
    const customerUpdate = await updateCustomer(
      customer.id,
      customer.version,
      data.firstName!,
      data.lastName!,
      data.email!,
      data.middleName!
    );
    dispatch(login(customerUpdate));
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const eventTarget = e.target as HTMLInputElement;
    switch (eventTarget.name) {
      case 'firstName':
        setData((prevState) => ({
          ...prevState,
          [eventTarget!.name]: eventTarget!.value,
        }));
        break;
      case 'lastName':
        setData((prevState) => ({
          ...prevState,
          [eventTarget!.name]: eventTarget!.value,
        }));
        break;
      case 'email':
        setData((prevState) => ({
          ...prevState,
          [eventTarget!.name]: eventTarget!.value,
        }));
        break;
      case 'middleName':
        setData((prevState) => ({
          ...prevState,
          [eventTarget!.name]: eventTarget!.value,
        }));
        break;

      default:
        break;
    }
  };

  const validate = useCallback(async () => {
    try {
      const error: Erroring = validator(data, validatorConfig);
      setErrors(error);
      return Object.keys(error).length === 0;
    } catch (validationError) {
      console.error('Validation Error:', validationError);
      return false;
    }
  }, [data]);

  const isValid = Object.keys(errors).length === 0;

  const handleSave = () => {
    const isValid = validate();
    if (!isValid) return;
    handleUpdate();
    setIsEdit(false);
  };

  const blurHandler = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const eventTarget = e.target as HTMLInputElement;
    switch (eventTarget.name) {
      case 'email': {
        setEmailDirty(true);
        break;
      }
      case 'firstName': {
        setFirstNameDirty(true);
        break;
      }
      case 'lastName': {
        setLastNameDirty(true);
        break;
      }

      default:
        break;
    }
  };

  useEffect(() => {
    validate();
  }, [data, validate]);

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
            error={errors.firstName && firstNameDirty ? true : false}
            variant="standard"
            disabled={!isEdit}
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={(e) => blurHandler(e)}
            id="first_name"
            label="First name"
            name="firstName"
            defaultValue={customer.firstName}
            helperText={errors.firstName && firstNameDirty ? errors.firstName : ''}
          />
          <TextField
            variant="standard"
            disabled={!isEdit}
            onChange={(e) => {
              handleChange(e);
            }}
            id="middle_name"
            label="Middle name"
            name="middleName"
            defaultValue={customer.middleName}
          />
          <TextField
            error={errors.lastName && lastNameDirty ? true : false}
            variant="standard"
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={(e) => blurHandler(e)}
            disabled={!isEdit}
            id="last_name"
            label="Last name"
            name="lastName"
            defaultValue={customer.lastName}
            helperText={errors.lastName && lastNameDirty ? errors.lastName : ''}
          />
          <TextField
            error={errors.email && emailDirty ? true : false}
            variant="standard"
            disabled={!isEdit}
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={(e) => blurHandler(e)}
            id="customer_email"
            label="Email"
            name="email"
            defaultValue={customer.email}
            helperText={errors.email && emailDirty ? errors.email : ''}
          />

          <div>
            <Button
              disabled={!isValid}
              onClick={() => {
                isEdit ? handleSave() : handleEdit();
              }}
            >
              {isEdit ? 'Save' : 'Edit'}
            </Button>
          </div>
        </Box>
      </Paper>
    </Grid>
  );
};

export default CustomerInfo;
