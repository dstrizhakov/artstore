import { Customer } from '@commercetools/platform-sdk';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, Paper } from '@mui/material';
import { FC, useState } from 'react';

interface CustomerPasswordProps {
  customer: Customer;
}

const CustomerPassword: FC<CustomerPasswordProps> = ({ customer }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handleClickShowPassword = () => {
    if (isEdit) {
      setShowPassword((show) => !show);
    }
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleClickShowPasswordConfirm = () => {
    if (isEdit) {
      setShowPasswordConfirm((show) => !show);
    }
  };

  const handleMouseDownPasswordConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleSave = () => {
    //тут проверяем валидность данных и отправляем на сервер
    setIsEdit(false);
    setShowPassword(false);
    setShowPasswordConfirm(false);
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
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                disabled={!isEdit}
                defaultValue={customer.password}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password confirm visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
              <InputLabel htmlFor="password-confirm">Password</InputLabel>
              <Input
                id="password-confirm"
                disabled={!isEdit}
                defaultValue={customer.password}
                type={showPasswordConfirm ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password confirm visibility"
                      onClick={handleClickShowPasswordConfirm}
                      onMouseDown={handleMouseDownPasswordConfirm}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div>
            <Button onClick={() => (isEdit ? handleSave() : handleEdit())}>{isEdit ? 'Save' : 'Edit'}</Button>
          </div>
        </Box>
      </Paper>
    </Grid>
  );
};

export default CustomerPassword;
