import Button from '@mui/material/Button';
import { FC, useState, useEffect, useCallback } from 'react';
import styles from './Register.module.scss';
import { Alert, Box, SelectChangeEvent, Snackbar } from '@mui/material';
import RegisterForm from '../components/Register/RegisterForm';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { addShippingBillingAddress, signUp } from '../api/requests';
import { validator } from '../utils/validator';
import validatorConfig from '../utils/validatorConfig';
import { login } from '../store/reducers/user.slice';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import RegisterAddress from '../components/Register/RegisterAddresses';
import { AddressType } from '../types/types';
import { Erroring } from '../types/ConfigValidator';

const Register: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [data, setData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
  });

  const [errors, setErrors] = useState({} as Erroring);
  const [dirty, setDirty] = useState({
    email: false,
    password: false,
    firstName: false,
    lastName: false,
    shipping: false,
    shippingCity: false,
    shippingStreet: false,
    shippingZip: false,
    billingCity: false,
    billingStreet: false,
    billingZip: false,
    billing: false,
    date: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [address, setAddress] = useState<AddressType>({
    country: '',
    state: '',
    city: '',
    streetName: '',
    building: '',
    apartment: '',
    firstName: '',
    lastName: '',
    postalCode: '',
    streetNumber: '',
  });
  const [addressBilling, setAddressBilling] = useState<AddressType>({
    country: '',
    state: '',
    city: '',
    streetName: '',
    building: '',
    apartment: '',
    firstName: '',
    lastName: '',
    postalCode: '',
    streetNumber: '',
  });
  const [billingSame, setBillingSame] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const [registerError, setRegisterError] = useState({ status: false, message: '' });

  const isAuth = useAppSelector((state) => state.user.isAuth);

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  const blurHandler = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const eventTarget = e.currentTarget;
    switch (eventTarget.id) {
      case 'shipping-country': {
        setDirty((prevState) => ({
          ...prevState,
          shipping: true,
        }));

        break;
      }
      case 'billing-country': {
        setDirty((prevState) => ({
          ...prevState,
          billing: true,
        }));
        break;
      }

      default:
        break;
    }
    switch (eventTarget.id) {
      case 'shippingStreet': {
        setDirty((prevState) => ({
          ...prevState,
          [eventTarget!.id]: true,
        }));
        break;
      }
      case 'shippingCity': {
        setDirty((prevState) => ({
          ...prevState,
          [eventTarget!.id]: true,
        }));
        break;
      }
      case 'shippingZip': {
        setDirty((prevState) => ({
          ...prevState,
          [eventTarget!.id]: true,
        }));
        break;
      }
      case 'billingStreet': {
        setDirty((prevState) => ({
          ...prevState,
          [eventTarget!.id]: true,
        }));
        break;
      }
      case 'billingCity': {
        setDirty((prevState) => ({
          ...prevState,
          [eventTarget!.id]: true,
        }));
        break;
      }
      case 'billingZip': {
        setDirty((prevState) => ({
          ...prevState,
          [eventTarget!.id]: true,
        }));
        break;
      }

      default:
        break;
    }

    switch (eventTarget.name) {
      case 'email': {
        setDirty((prevState) => ({
          ...prevState,
          [eventTarget!.name]: true,
        }));
        break;
      }

      case 'password': {
        setDirty((prevState) => ({
          ...prevState,
          [eventTarget!.name]: true,
        }));
        break;
      }
      case 'firstName': {
        setDirty((prevState) => ({
          ...prevState,
          [eventTarget!.name]: true,
        }));
        break;
      }
      case 'lastName': {
        setDirty((prevState) => ({
          ...prevState,
          [eventTarget!.name]: true,
        }));
        break;
      }
      case 'dateOfBirth': {
        setDirty((prevState) => ({
          ...prevState,
          date: true,
        }));
        break;
      }

      default:
        break;
    }
  };
  const handleChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    blurHandler(event);
    const target = event.currentTarget;

    const dataType = target.dataset.type;
    switch (dataType) {
      case 'register':
        setData((prevState) => ({
          ...prevState,
          [target!.name]: target!.value,
        }));
        break;
      case 'shipping':
        setAddress((prevState) => ({
          ...prevState,
          [target!.name]: target!.value,
        }));
        break;
      case 'billing':
        setAddressBilling((prevState) => ({
          ...prevState,
          [target!.name]: target!.value,
        }));
        break;

      default:
        break;
    }
  };
  const handleCountryShippingChange = (event: SelectChangeEvent<string>) => {
    const { value, name } = event.target;

    switch (name) {
      case 'shipping-country':
        setAddress((prevState) => ({
          ...prevState,
          country: value,
        }));

        break;
      case 'billing-country':
        setAddressBilling((prevState) => ({
          ...prevState,
          country: value,
        }));
        break;

      default:
        break;
    }
  };

  const handleRegister = async (
    email: string,
    password: string,
    firsName: string,
    lastName: string,
    dateOfBirth: string
  ) => {
    try {
      const response = await signUp(email, password, firsName, lastName, dateOfBirth, address, addressBilling);

      const customer = response.customer;
      const res = await addShippingBillingAddress(
        customer.id,
        customer.version,
        customer.addresses[0].id!,
        customer.addresses[1].id!
      );

      dispatch(login(res.body));

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
      const error: Erroring = validator(
        {
          ...data,
          country: address.country,
          city: address.city,
          streetName: address.streetName,
          postalCode: address.postalCode,
          billingCountry: addressBilling.country,
          billingStreetName: addressBilling.country,
          billingCity: addressBilling.city,
          billingPostalCode: addressBilling.postalCode,
        },
        validatorConfig
      );

      setErrors(error);
      return Object.keys(error).length === 0;
    } catch (validationError) {
      console.error('Validation Error:', validationError);
      return false;
    }
  }, [data, address, addressBilling]);

  const isValid = Object.keys(errors).length === 0;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    handleRegister(data.email, data.password, data.firstName, data.lastName, data.dateOfBirth);
  };

  useEffect(() => {
    validate();
  }, [data, address, addressBilling, validate]);
  useEffect(() => {
    if (billingSame) setAddressBilling(address);
  }, [billingSame, address]);

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
    <Box
      sx={{
        p: 6,
        m: 1,
        bgcolor: 'background.paper',
        borderRadius: 1,
      }}
    >
      <h2>Register Page</h2>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <RegisterForm
          errors={errors}
          data={data}
          dirty={dirty}
          handleChange={handleChange}
          showPassword={showPassword}
          blurHandler={blurHandler}
          handleClickShowPassword={handleClickShowPassword}
          handleMouseDownPassword={handleMouseDownPassword}
        />
        <p>
          Have an account{' '}
          <Link className={styles.link} to="/login">
            Login
          </Link>
        </p>
        <Button type="submit" disabled={!isValid} variant="contained">
          Register
        </Button>
      </form>

      <RegisterAddress
        address={address}
        handleChange={handleChange}
        billingSame={billingSame}
        addressBilling={addressBilling}
        setBillingSame={setBillingSame}
        handleCountryShippingChange={handleCountryShippingChange}
        errors={errors}
        dirty={dirty}
        blurHandler={blurHandler}
      />
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
