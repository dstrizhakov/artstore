import { Box, Grid } from '@mui/material';
import styles from './Profile.module.scss';
import { useAppSelector } from '../hooks/redux';
import { useEffect, useState } from 'react';
import CustomerInfo from '../components/Profile/CustomerInfo/CustomerInfo';
import CustomerPassword from '../components/Profile/CustomerPassword/CustomerPassword';
import CustomerAddress from '../components/Profile/CustomerAddress/CustomerAddress';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [isBillingSame, setIsBillingSame] = useState(false);
  const customer = useAppSelector((state) => state.user.customer);
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  return (
    <div className={styles.wrapper}>
      <h2>Profile Page</h2>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2}>
          <CustomerInfo customer={customer} />
          <CustomerPassword password={customer.password} />
          <CustomerAddress
            customer={customer}
            type="shipping"
            billingSame={isBillingSame}
            setBillingSame={setIsBillingSame}
          />
          {!isBillingSame && <CustomerAddress customer={customer} type="billing" />}
        </Grid>
      </Box>
    </div>
  );
};

export default Profile;
