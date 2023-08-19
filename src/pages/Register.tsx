import Button from '@mui/material/Button';
import { FC, useState, useEffect } from 'react';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../api/requests';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { validator } from '../components/Validate/validator';
import validatorConfig from '../components/Validate/validatorConfig';
import { Visibility, VisibilityOff } from '@mui/icons-material';
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
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [firstNameDirty, setFirstNameDirty] = useState(false);
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

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
    const response = await signUp(email, firsName, lastName, password);
    if (response.statusCode === 201) {
      navigate('/');
    }
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
          helperText={errors.firstName && firstNameDirty ? errors.email : ''}
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
          <InputLabel
            error={errors.password && passwordDirty ? true : false}
            htmlFor="outlined-adornment-password"
          >
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
