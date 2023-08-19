import Button from '@mui/material/Button';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { FC, useCallback, useEffect, useState } from 'react';
import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../api/requests';
import { useAppDispatch } from '../hooks/redux';
import { login } from '../store/reducers/user.slice';
import { Erroring } from './Register';
import { validator } from '../utils/validator';
import validatorConfig from '../utils/validatorConfig';
import { Visibility, VisibilityOff } from '@mui/icons-material';
export interface DataLogin {
  email: string;
  password: string;
}
const Login: FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: 'admin@mail.ru', password: 'Fox347767!' });
  const [errors, setErrors] = useState({} as Erroring);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
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

      default:
        break;
    }
  };

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
          error={errors.email && emailDirty ? true : false}
          onChange={handleChange}
          value={data.email}
          id="outlined-basic-email"
          name="email"
          label="email"
          onBlur={(e) => blurHandler(e)}
          variant="outlined"
          autoComplete="username"
          helperText={errors.email && emailDirty ? errors.email : ''}
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
