import Button from '@mui/material/Button';
import { FC, useState, useEffect } from 'react';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../api/requests';
import { TextField } from '@mui/material';
import { validator } from '../components/Validate/validator';
import validatorConfig from '../components/Validate/validatorConfig';
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
  const [data, setData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const [errors, setErrors] = useState({} as Erroring);
  useEffect(() => {
    validate();
  }, [data]);

  const handleChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.currentTarget;
    setData((prevState) => ({
      ...prevState,
      [target!.name]: target!.value,
    }));
  };
  const handleRegister = async (
    email: string,
    password: string,
    firsName: string,
    lastName: string
  ) => {
    const response = await signUp(email, password, firsName, lastName);
    if (response.statusCode === 201) {
      navigate('/');
    }
  };
  const validate = () => {
    const error: Erroring = validator(data, validatorConfig);
    setErrors(error);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    handleRegister(data.email, data.password, data.firstName, data.lastName);
  };

  return (
    <div>
      <h2>Register Page</h2>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <TextField
          error={errors.email ? true : false}
          onChange={handleChange}
          id="outlined-basic-email"
          label="email"
          variant="outlined"
          name="email"
          value={data.email}
          autoComplete="username"
          helperText={errors.email}
        />
        <TextField
          error={errors.firstName ? true : false}
          onChange={handleChange}
          id="outlined-basic-firsName"
          label="first name"
          variant="outlined"
          name="firstName"
          value={data.firstName}
          autoComplete="username"
          helperText={errors.firstName}
        />
        <TextField
          error={errors.lastName ? true : false}
          onChange={handleChange}
          id="outlined-basic-lastName"
          label="last name"
          variant="outlined"
          name="lastName"
          value={data.lastName}
          autoComplete="username"
          helperText={errors.lastName}
        />
        <TextField
          error={errors.password ? true : false}
          onChange={handleChange}
          id="outlined-basic-password"
          label="password"
          variant="outlined"
          name="password"
          value={data.password}
          type="password"
          autoComplete="new-password"
          helperText={errors.password}
        />

        <p>
          Have an account <Link to="/login">Login</Link>
        </p>
        <Button type="submit" disabled={!isValid} variant="contained">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
