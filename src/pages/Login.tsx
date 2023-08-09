import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { FC } from 'react';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';

const Login: FC = () => {
  const handleLogin = () => {};

  return (
    <div>
      <h1>Login Page</h1>
      <div className={styles.wrapper}>
        <TextField id="outlined-basic" label="email" variant="outlined" />
        <TextField id="outlined-basic" label="password" variant="outlined" type="password" />
        <p>
          Dont have account <Link to="/register">Register</Link>
        </p>
        <Button onClick={handleLogin} variant="contained">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
