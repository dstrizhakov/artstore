import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, Paper } from '@mui/material';
import { changePassword } from '../../../api/requests';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { FC, useState } from 'react';
import { login } from '../../../store/reducers/user.slice';

interface CustomerPasswordProps {
  password?: string;
}

const CustomerPassword: FC<CustomerPasswordProps> = ({ password }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState<boolean>(false);

  const [passwordValue, setPasswordValue] = useState<string>(password || '');
  const [newPassword, setNewPassword] = useState<string>('');
  const [newPasswordConf, setNewPasswordConf] = useState<string>('');

  const id = useAppSelector((store) => store.user.customer.id);
  const version = useAppSelector((store) => store.user.customer.version);
  const dispatch = useAppDispatch();

  const handleClickShowPassword = () => {
    if (isEdit) {
      setShowPassword((show) => !show);
    }
  };

  const handleClickShowNewPassword = () => {
    if (isEdit) {
      setShowNewPassword((show) => !show);
    }
  };

  const handleClickShowPasswordConfirm = () => {
    if (isEdit) {
      setShowPasswordConfirm((show) => !show);
    }
  };

  const handleSave = async () => {
    //тут проверяем валидность данных и отправляем на сервер
    setIsEdit(false);
    setShowPassword(false);
    setShowNewPassword(false);
    setShowPasswordConfirm(false);
    const customer = await changePassword({ id, version, currentPassword: passwordValue, newPassword });
    dispatch(login(customer));
  };
  return (
    <Grid item xs={12} md={4}>
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
          <h3>Password</h3>
          <div>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
              <InputLabel htmlFor="password">Old password</InputLabel>
              <Input
                id="password"
                disabled={!isEdit}
                value={passwordValue}
                type={showPassword ? 'text' : 'password'}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPasswordValue(event.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password confirm visibility"
                      onClick={handleClickShowPassword}
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
                id="new-password"
                disabled={!isEdit}
                value={newPassword}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewPassword(event.target.value)}
                type={showNewPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password confirm visibility"
                      onClick={handleClickShowNewPassword}
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
                id="new-password-confirm"
                disabled={!isEdit}
                value={newPasswordConf}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewPasswordConf(event.target.value)}
                type={showPasswordConfirm ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password confirm visibility"
                      onClick={handleClickShowPasswordConfirm}
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
            <Button onClick={() => (isEdit ? handleSave() : setIsEdit(true))}>
              {isEdit ? 'Save' : 'Change password'}
            </Button>
          </div>
        </Box>
      </Paper>
    </Grid>
  );
};

export default CustomerPassword;
