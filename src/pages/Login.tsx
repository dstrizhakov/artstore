import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { FC, useState } from 'react';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { anonimusSession } from '../api/authApi';
import { useAppDispatch } from '../hooks/redux';
import { login } from '../store/reducers/user.slice';

const Login: FC = () => {
  const [username, setUsername] = useState('user@mail.ru');
  const [password, setPassword] = useState('1235678');
  const dispatch = useAppDispatch();

  // const handleLogin = async () => {
  //   const token = await getToken();
  //   console.log(token);
  // };
  const handleAuth = async () => {
    // const det = await getProjectDetails();
    // console.log(det);
    // const customerDraftData = {
    //   firstName: 'test',
    //   lastName: 'test',
    //   email: 'test@test.com',
    //   password: 'password',
    //   key: 'test123',
    //   countryCode: 'DE',
    // };
    // console.log(await getCustomers());
    // console.log(await customerSession(username, password));
    // console.log(await authCustomer(username, password));
    // console.log(await authCustomer(username, password));
    // console.log(await getToken());
    // console.log(await customerSession(username, password));
    const token = await anonimusSession(Date.now());
    if (token.access_token) {
      dispatch(
        login({
          name: 'Anonimus',
          email: 'Anonimus',
          accessToken: token.access_token,
          refreshToken: token.refresh_token,
        })
      );
    }
    console.log(token);
    // await handleLogin();
    // const response = await authCustomer(login, password);
    // console.log(response);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <div className={styles.wrapper}>
        <TextField
          id="email"
          label="email"
          variant="outlined"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          id="password"
          label="password"
          variant="outlined"
          // type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <p>
          Dont have account <Link to="/register">Register</Link>
        </p>
        <Button onClick={handleAuth} variant="contained">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
