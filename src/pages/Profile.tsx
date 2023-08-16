import { Grid, Paper, Typography } from '@mui/material';
import styles from './Profile.module.scss';
import { useAppSelector } from '../hooks/redux';

const Profile = () => {
  const customer = useAppSelector((state) => state.userOwn.customer);
  console.log(customer);
  return (
    <div className={styles.wrapper}>
      <h2>Profile Page</h2>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Paper>
            <Typography>
              {customer.firstName} {customer.middleName} {customer.lastName}
            </Typography>
            <Typography>{customer.email}</Typography>
            <Typography>{customer.isEmailVerified}</Typography>
            <Typography>{customer.email}</Typography>
            {customer.addresses.map((address) => (
              <Typography key={address.id}>{address.streetName}</Typography>
            ))}
          </Paper>
          <Paper></Paper>
        </Grid>
        <Grid item xs={6} md={4}>
          <Paper>xs=6 md=4</Paper>
        </Grid>
        <Grid item xs={6} md={4}>
          <Paper>xs=6 md=4</Paper>
        </Grid>
        <Grid item xs={6} md={8}>
          <Paper>xs=6 md=8</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
