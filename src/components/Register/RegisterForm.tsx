import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { DataRegister, Erroring } from '../../types/ConfigValidator';
import { Dirty } from '../../types/Dirty';
interface RegisterFormParams {
  errors: Erroring;
  dirty: Dirty;
  handleChange: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => void;
  blurHandler: (field: string) => void;
  data: DataRegister;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
  showPassword: boolean;
}
const RegisterForm = ({
  errors,
  dirty,
  handleChange,
  blurHandler,
  data,
  handleClickShowPassword,
  handleMouseDownPassword,
  showPassword,
}: RegisterFormParams) => {
  return (
    <>
      <TextField
        error={errors.email && dirty.email ? true : false}
        inputProps={{
          'data-type': 'register',
        }}
        onChange={(e) => handleChange(e, 'email')}
        id="register-email"
        label="email *"
        onBlur={() => blurHandler('email')}
        variant="outlined"
        name="email"
        value={data.email}
        autoComplete="username"
        helperText={errors.email && dirty.email ? errors.email : ''}
      />
      <TextField
        inputProps={{
          'data-type': 'register',
        }}
        error={errors.firstName && dirty.firstName ? true : false}
        onChange={(e) => handleChange(e, 'firstName')}
        onBlur={() => blurHandler('firstName')}
        id="outlined-basic-firsName"
        label="first name *"
        variant="outlined"
        name="firstName"
        value={data.firstName}
        autoComplete="username"
        helperText={errors.firstName && dirty.firstName ? errors.firstName : ''}
      />
      <TextField
        inputProps={{
          'data-type': 'register',
        }}
        error={errors.lastName && dirty.lastName ? true : false}
        onChange={(e) => handleChange(e, 'lastName')}
        onBlur={() => blurHandler('lastName')}
        id="outlined-basic-lastName"
        label="last name *"
        variant="outlined"
        name="lastName"
        value={data.lastName}
        autoComplete="username"
        helperText={errors.lastName && dirty.lastName ? errors.lastName : ''}
      />
      <TextField
        inputProps={{
          'data-type': 'register',
        }}
        error={errors.dateOfBirth && dirty.date ? true : false}
        onChange={(e) => handleChange(e, 'dateOfBirth')}
        onBlur={() => blurHandler('dateOfBirth')}
        type="date"
        id="outlined-basic-date"
        variant="outlined"
        name="dateOfBirth"
        value={data.dateOfBirth}
        autoComplete="username"
        helperText={errors.dateOfBirth && dirty.date ? errors.dateOfBirth : ''}
      />
      <FormControl>
        <InputLabel error={errors.password && dirty.password ? true : false} htmlFor="outlined-adornment-password">
          password *
        </InputLabel>
        <OutlinedInput
          inputProps={{
            'data-type': 'register',
          }}
          error={errors.password && dirty.password ? true : false}
          id="outlined-adornment-password"
          onChange={(e) => handleChange(e, 'password')}
          value={data.password}
          onBlur={() => blurHandler('password')}
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
        <FormHelperText error={errors.password && dirty.password ? true : false}>
          {errors.password && dirty.password ? errors.password : ''}
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default RegisterForm;
