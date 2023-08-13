import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { FC, useState } from 'react';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { getApiRoot } from '../api/createClient';
import { useNavigate } from 'react-router-dom';

const Register: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [copyPassword, setCopyPassword] = useState('');
  const [firstName, setFirsName] = useState('');
  const [lastName, setLastName] = useState('');
  async function signUp(email: string, password: string) {
    const response = await getApiRoot()
      .withProjectKey({
        projectKey: import.meta.env.VITE_CTP_PROJECT_KEY,
      })
      .me()
      .signup()
      .post({
        body: {
          email: email,
          firstName: firstName,
          lastName: lastName || '',
          password: password,
        },
      })
      .execute();
    if (response.statusCode === 201) {
      navigate('/');
    }
  }

  return (
    <div>

      <h2>Register Page</h2>
      <form className={styles.wrapper}>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          id="outlined-basic-email"
          label="email"
          variant="outlined"
          autoComplete="username"
        />
        <TextField
          onChange={(e) => setFirsName(e.target.value)}
          id="outlined-basic-firsName"
          label="first name"
          variant="outlined"
          autoComplete="username"
        />
        <TextField
          onChange={(e) => setLastName(e.target.value)}
          id="outlined-basic-lastName"
          label="last name"
          variant="outlined"
          autoComplete="username"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          id="outlined-basic-password"
          label="password"
          variant="outlined"
          type="password"
          autoComplete="new-password"
        />
        <TextField
          // onChange={(e) => setCopyPassword(e.target.value)}
          id="outlined-basic-password-copy"
          label="password"
          variant="outlined"
          type="password"
          autoComplete="new-password"
        />

        {/* <div className={styles.wrapper}>
        <TextField id="email" label="email" variant="outlined" />
        <TextField id="password" label="password" variant="outlined" type="password" />
        <TextField id="password-repeat" label="password" variant="outlined" type="password" />  */}

        <p>
          Have an account <Link to="/login">Login</Link>
        </p>
        <Button onClick={async () => await signUp(email, password)} variant="contained">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
