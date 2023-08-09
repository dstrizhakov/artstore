import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { FC } from 'react';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';

const Register: FC = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <div className={styles.wrapper}>
        <TextField id="outlined-basic" label="email" variant="outlined" />
        <TextField id="outlined-basic" label="password" variant="outlined" type="password" />
        <TextField id="outlined-basic" label="password" variant="outlined" type="password" />
        <p>
          Have an account <Link to="/login">Login</Link>
        </p>
        <Button variant="contained">Login</Button>
      </div>
    </div>
  );
};

export default Register;
