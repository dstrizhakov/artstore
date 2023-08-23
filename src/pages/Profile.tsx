import { Box, Button, Grid, Paper } from '@mui/material';
import styles from './Profile.module.scss';
import { useAppSelector } from '../hooks/redux';
import { useEffect, useState } from 'react';
import CustomerInfo from '../components/Profile/CustomerInfo/CustomerInfo';
import CustomerPassword from '../components/Profile/CustomerPassword/CustomerPassword';
import CustomerAddress from '../components/Profile/CustomerAddress/CustomerAddress';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal/Modal';

const Profile = () => {
  const [modalPassword, setModalPassword] = useState(false);
  const customer = useAppSelector((state) => state.user.customer);
  const isBillingSame = useAppSelector((state) => state.addresses.isBillingSame);
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  return (
    <div className={styles.wrapper}>
      <Modal isOpen={modalPassword} setIsOpen={setModalPassword}>
        <CustomerPassword />
      </Modal>
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
          <Grid item xs={12} md={2}>
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
                <Button onClick={() => setModalPassword(true)}>Change Password</Button>
              </Box>
            </Paper>
          </Grid>
          <CustomerAddress customer={customer} type="shipping" />
          {!isBillingSame && <CustomerAddress customer={customer} type="billing" />}
        </Grid>
      </Box>
    </div>
  );
};

export default Profile;
