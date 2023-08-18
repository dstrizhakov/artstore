import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { FC, useCallback, useEffect, useState } from 'react';
import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../api/requests';
import { useAppDispatch } from '../hooks/redux';
import { login } from '../store/reducers/user.slice';
import { Erroring } from './Register';
import { validator } from '../utils/validator';
import validatorConfig from '../utils/validatorConfig';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
export interface DataLogin {
  email: string;
  password: string;
}
const Login: FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: 'admin@mail.ru', password: 'Fox347767!' });
  const [errors, setErrors] = useState({} as Erroring);

  const dispatch = useAppDispatch();
  const handleChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.currentTarget;
    setData((prevState) => ({
      ...prevState,
      [target!.name]: target!.value,
    }));
  };

  const handleLogin = async (email: string, password: string) => {
    const responce = await signIn(email, password);
    const customer = responce.customer;
    // const cart = responce.cart;
    dispatch(login(customer));
    navigate('/');
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
    handleLogin(data.email, data.password);
  };

  useEffect(() => {
    validate();
  }, [data, validate]);

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit} className={styles.wrapper}>
        <TextField
          error={errors.email ? true : false}
          onChange={handleChange}
          value={data.email}
          id="outlined-basic-email"
          name="email"
          label="email"
          variant="outlined"
          autoComplete="username"
          helperText={errors.email}
        />

        <TextField
          error={errors.password ? true : false}
          onChange={handleChange}
          value={data.password}
          name="password"
          id="outlined-basic-password"
          label="password"
          // type="password"
          variant="outlined"
          autoComplete="current-password"
          helperText={errors.password}
        />

        <p>
          Dont have account <Link to="/register">Register</Link>
        </p>

        <Button type="submit" disabled={!isValid} variant="contained">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
