import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Snackbar,
} from '@mui/material';
import { changePassword } from '../../../api/requests';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { FC, useState } from 'react';
import { login } from '../../../store/reducers/user.slice';

interface CustomerPasswordProps {
  password?: string;
}

const CustomerPassword: FC<CustomerPasswordProps> = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState({ field: [''], message: '' });

  const [passwordValue, setPasswordValue] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [newPasswordConf, setNewPasswordConf] = useState<string>('');

  const id = useAppSelector((store) => store.user.customer.id);
  const version = useAppSelector((store) => store.user.customer.version);
  const dispatch = useAppDispatch();

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setPasswordError({
      message: '',
      field: [],
    });
  };
  const validate = () => {
    if (!passwordValue.length) {
      setPasswordError({
        field: ['password'],
        message: 'Enter current password.',
      });
      return false;
    }
    if (newPassword !== newPasswordConf) {
      setPasswordError({
        field: ['new-password', 'new-password-confirm'],
        message: 'New passwords dont match.',
      });
      return false;
    }
    if (newPassword.length < 6) {
      setPasswordError({
        field: ['new-password', 'new-password-confirm'],
        message: 'New password must be at least 6 characters long.',
      });
      return false;
    }
    return true;
  };

  const handleSave = async () => {
    if (!validate()) return;

    setShowPassword(false);
    setShowNewPassword(false);
    setShowPasswordConfirm(false);
    try {
      const customer = await changePassword({ id, version, currentPassword: passwordValue, newPassword });
      dispatch(login(customer));
    } catch (error: unknown) {
      if (error instanceof Error && error.message) {
        setPasswordError({ field: ['password'], message: error.message });
      } else {
        throw error;
      }
    }
  };
  return (
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          display: 'block',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <h3>Change password</h3>
        <div>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor="password">Old password</InputLabel>
            <Input
              error={passwordError.field.includes('password')}
              id="password"
              value={passwordValue}
              type={showPassword ? 'text' : 'password'}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPasswordValue(event.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password confirm visibility"
                    onClick={() => setShowPassword((show) => !show)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor="new-password-confirm">New password</InputLabel>
            <Input
              error={passwordError.field.includes('new-password')}
              id="new-password"
              value={newPassword}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewPassword(event.target.value)}
              type={showNewPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password confirm visibility"
                    onClick={() => setShowNewPassword((show) => !show)}
                    edge="end"
                  >
                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor="new-password-confirm">New password confirm</InputLabel>
            <Input
              error={passwordError.field.includes('new-password-confirm')}
              id="new-password-confirm"
              value={newPasswordConf}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewPasswordConf(event.target.value)}
              type={showPasswordConfirm ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password confirm visibility"
                    onClick={() => setShowPasswordConfirm((show) => !show)}
                    edge="end"
                  >
                    {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div>
          <Button onClick={() => handleSave()}>Save</Button>
        </div>
      </Box>
      <Snackbar
        open={!!passwordError.field.length}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          {passwordError.message}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default CustomerPassword;
