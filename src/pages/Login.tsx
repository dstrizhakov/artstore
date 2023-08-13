import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { FC, useState } from 'react';
import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../api/requests';
import { useAppDispatch } from '../hooks/redux';
import { login } from '../store/reducers/user.slice';

const Login: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('mardonberdiyev10@gmail.com');
  const [password, setPassword] = useState('1234');

  const dispatch = useAppDispatch();

  const handleLogin = async (email: string, password: string) => {
    const response = await signIn(email, password);

    if (response.statusCode === 200) {
      const customer = response.body.customer;
      console.log(response.body);
      dispatch(
        login({
          id: customer.id,
          name: customer.firstName || '',
          email: customer.email,
          accessToken: '',
          refreshToken: '',
        })
      );
      navigate('/');
    }
  };

  return (
    <div>

      <h2>Login Page</h2>
      <form className={styles.wrapper}>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="outlined-basic-email"
          label="email"
          variant="outlined"
          autoComplete="username"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="outlined-basic-password"
          label="password"
          variant="outlined"
          autoComplete="current-password"
        />
        <p>
          Dont have account <Link to="/register">Register</Link>
        </p>

        <Button onClick={() => handleLogin(email, password)} variant="contained">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
