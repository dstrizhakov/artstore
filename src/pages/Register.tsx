import Button from '@mui/material/Button';
import { FC, useState, useEffect, useCallback } from 'react';
import styles from './Register.module.scss';
import { Alert, Box, FormHelperText, SelectChangeEvent, Snackbar } from '@mui/material';
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
    date: false,
    title: false,
    country: false,
    city: false,
    state: false,
    streetName: false,
    building: false,
    apartment: false,
    firstNameShipping: false,
    lastNameShipping: false,
    streetNumber: false,
    mobile: false,
    zip: false,
    billingCity: false,
    billingTitle: false,
    billingStreetName: false,
    billingZip: false,
    billingCountry: false,
    billingState: false,
    billingStreetNumber: false,
    billingBuilding: false,
    billingApartment: false,
    billingMobile: false,
    lastNameBilling: false,
    firstNameBilling: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [address, setAddress] = useState<AddressType>({
    country: '',
    title: '',
    state: '',
    city: '',
    streetName: '',
    building: '',
    apartment: '',
    firstName: '',
    lastName: '',
    postalCode: '',
    streetNumber: '',
    mobile: '',
  });
  const [addressBilling, setAddressBilling] = useState<AddressType>({
    title: '',
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
    mobile: '',
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

  const blurHandler = (field: string) => {
    setDirty((prevState) => ({
      ...prevState,
      [field]: true,
    }));
  };
  const handleChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    blurHandler(event.currentTarget.name);
    const target = event.currentTarget;

    const dataType = target.dataset.type;
    switch (dataType) {
      case 'register':
        setData((prevState) => ({
          ...prevState,
          [field]: target!.value,
        }));
        break;
      case 'shipping':
        setAddress((prevState) => ({
          ...prevState,
          [field]: target!.value,
        }));
        break;
      case 'billing':
        setAddressBilling((prevState) => ({
          ...prevState,
          [field]: target!.value,
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
          title: address.title,
          country: address.country,
          city: address.city,
          state: address.state,
          streetNumber: address.streetNumber,
          building: address.building,
          apartment: address.apartment,
          firstNameShipping: address.firstName,
          lastNameShipping: address.lastName,
          mobile: address.mobile,
          streetName: address.streetName,
          postalCode: address.postalCode,
          billingTitle: addressBilling.title,
          billingCountry: addressBilling.country,
          billingStreetName: addressBilling.country,
          billingCity: addressBilling.city,
          billingState: addressBilling.state,
          billingStreetNumber: addressBilling.streetNumber,
          billingBuilding: addressBilling.building,
          billingApartment: addressBilling.apartment,
          billingMobile: addressBilling.mobile,
          lastNameBilling: addressBilling.lastName,
          firstNameBilling: addressBilling.firstName,
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
        <FormHelperText error={!isValid}>{!isValid && 'Fill in the required fields marked as "*"'}</FormHelperText>
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
