import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { FC, useState } from 'react';
import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { getApiRoot } from '../api/createClient';

const Login: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function signIn(email: string, password: string) {
    const response = await getApiRoot()
      .withProjectKey({
        projectKey: import.meta.env.VITE_CTP_PROJECT_KEY,
      })
      .login()
      .post({
        body: {
          email: email,
          password: password,
        },
      })
      .execute();
    if (response.statusCode === 200) {
      navigate('/');
    }
  }
  const handleLogin = async (email: string, password: string) => {
    await signIn(email, password);
  };

  return (
    <div>
      <h1>Login Page</h1>
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
          type="password"
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
