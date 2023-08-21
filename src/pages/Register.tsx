import Button from '@mui/material/Button';
import { FC, useState, useEffect, useCallback } from 'react';
import styles from './Login.module.scss';
import {
  Alert,
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Snackbar,
  TextField,
} from '@mui/material';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AddCustomerAddress, signUp } from '../api/requests';
import { validator } from '../utils/validator';
import validatorConfig from '../utils/validatorConfig';
import { login } from '../store/reducers/user.slice';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import RegisterAddress from '../components/Register/RegisterAddresses';

export interface Erroring {
  [key: string]: string;
}
export interface DataRegister {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
export interface Required {
  message: string;
  value?: number;
}
export interface ConfigValidator {
  email: {
    isRequired: Required;
    isEmail: {
      message: string;
    };
  };
  password: {
    isRequired: Required;
    isCapitalSymbol: {
      message: string;
    };
    isContainDigit: {
      message: string;
    };
    min: {
      message: string;
      value: number;
    };
  };
  firstName: {
    isRequired: Required;
  };
  lastName: {
    isRequired: Required;
  };
}

const Register: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [data, setData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const [errors, setErrors] = useState({} as Erroring);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [firstNameDirty, setFirstNameDirty] = useState(false);
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const [registerError, setRegisterError] = useState({ status: false, message: '' });

  const isAuth = useAppSelector((state) => state.user.isAuth);
  const addreses = useAppSelector((state) => state.addresses);

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  const blurHandler = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const eventTarget = e.target as HTMLInputElement;
    switch (eventTarget.name) {
      case 'email': {
        setEmailDirty(true);
        break;
      }

      case 'password': {
        setPasswordDirty(true);
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
  const handleChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.currentTarget;
    setData((prevState) => ({
      ...prevState,
      [target!.name]: target!.value,
    }));
  };

  const handleRegister = async (email: string, password: string, firsName: string, lastName: string) => {
    try {
      if (
        (addreses.isBillingSame && addreses.shipping.country === '') ||
        addreses.shipping.country === '' ||
        addreses.billing.country === ''
      ) {
        throw Error('Country is requered');
      }
      const response = await signUp(email, password, firsName, lastName);

      const customer = response.customer;
      const customerAddress = await AddCustomerAddress(customer.id, customer.version, {
        action: 'addAddress',

        address: {
          firstName: addreses.shipping.firstName,
          lastName: addreses.shipping.lastName,
          streetName: addreses.shipping.street,
          postalCode: addreses.shipping.zip,
          city: addreses.shipping.city,
          country: addreses.shipping.country,
          building: addreses.shipping.building,
          apartment: addreses.shipping.apartment,
        },
      });

      dispatch(login(customerAddress));
      if (customer) {
        navigate('/');
      }
    } catch (error: unknown) {
      if (error instanceof Error && error.message) {
        setRegisterError({ status: true, message: error.message });
      } else {
        throw error;
      }
    }
  };

  const validate = useCallback(async () => {
    try {
      const error: Erroring = await validator(data, validatorConfig);
      setErrors(error);
      return Object.keys(error).length === 0;
    } catch (validationError) {
      console.error('Validation Error:', validationError);
      return false;
    }
  }, [data]);

  const isValid = Object.keys(errors).length === 0;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    handleRegister(data.email, data.password, data.firstName, data.lastName);
  };

  useEffect(() => {
    validate();
  }, [data, validate]);

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setRegisterError((prevRegisterError) => ({
      ...prevRegisterError,
      status: false,
    }));
  };

  return (
    <Box>
      <Paper>
        <h2>Register Page</h2>
        <form className={styles.wrapper} onSubmit={handleSubmit}>
          <TextField
            error={errors.email && emailDirty ? true : false}
            onChange={handleChange}
            id="outlined-basic-email"
            label="email"
            onBlur={(e) => blurHandler(e)}
            variant="outlined"
            name="email"
            value={data.email}
            autoComplete="username"
            helperText={errors.email && emailDirty ? errors.email : ''}
          />
          <TextField
            error={errors.firstName && firstNameDirty ? true : false}
            onChange={handleChange}
            onBlur={(e) => blurHandler(e)}
            id="outlined-basic-firsName"
            label="first name"
            variant="outlined"
            name="firstName"
            value={data.firstName}
            autoComplete="username"
            helperText={errors.firstName && firstNameDirty ? errors.firstName : ''}
          />
          <TextField
            error={errors.password && lastNameDirty ? true : false}
            onChange={handleChange}
            onBlur={(e) => blurHandler(e)}
            id="outlined-basic-lastName"
            label="last name"
            variant="outlined"
            name="lastName"
            value={data.lastName}
            autoComplete="username"
            helperText={errors.lastName && lastNameDirty ? errors.lastName : ''}
          />
          <FormControl>
            <InputLabel error={errors.password && passwordDirty ? true : false} htmlFor="outlined-adornment-password">
              password
            </InputLabel>
            <OutlinedInput
              error={errors.password && passwordDirty ? true : false}
              id="outlined-adornment-password"
              onChange={handleChange}
              value={data.password}
              onBlur={(e) => blurHandler(e)}
              label="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText error={errors.password && passwordDirty ? true : false}>
              {errors.password && passwordDirty ? errors.password : ''}
            </FormHelperText>
          </FormControl>
          <RegisterAddress />
          <p>
            Have an account <Link to="/login">Login</Link>
          </p>
          <Button type="submit" disabled={!isValid} variant="contained">
            Register
          </Button>
        </form>
      </Paper>
      <Snackbar
        open={registerError.status}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          {registerError.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Register;
