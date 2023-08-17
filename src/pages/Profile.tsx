import { Box, Grid } from '@mui/material';
import styles from './Profile.module.scss';
import { useAppSelector } from '../hooks/redux';
import { useState } from 'react';
import CustomerInfo from '../components/Profile/CustomerInfo/CustomerInfo';
import CustomerPassword from '../components/Profile/CusromerPassword/CustomerPassword';
import CustomerAddress from '../components/Profile/CustomerAddress/CustomerAddress';

const Profile = () => {
  const [isBillingSame, setIsBillingSame] = useState(false);
  const customer = useAppSelector((state) => state.userOwn.customer);
  console.log(customer);
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
          <CustomerPassword customer={customer} />
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
