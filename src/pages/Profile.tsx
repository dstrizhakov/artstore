import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import styles from './Profile.module.scss';
import { useAppSelector } from '../hooks/redux';
import { useEffect, useState } from 'react';
import CustomerInfo from '../components/Profile/CustomerInfo/CustomerInfo';
import CustomerPassword from '../components/Profile/CustomerPassword/CustomerPassword';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal/Modal';
import AddressCard from '../components/Profile/AddressCard/AddressCard';
import AddAddress from '../components/Profile/AddAddress/AddAddress';

const Profile = () => {
  const [modalPassword, setModalPassword] = useState(false);
  const [addAddress, setAddAddress] = useState(false);

  const customer = useAppSelector((state) => state.user.customer);
  const isAuth = useAppSelector((state) => state.user.isAuth);

  const navigate = useNavigate();

  const handleAddAddress = () => {
    setAddAddress(true);
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  if (!isAuth) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <Modal isOpen={addAddress} setIsOpen={setAddAddress}>
        <AddAddress setIsOpen={setAddAddress} customer={customer} />
      </Modal>
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
                <Stack direction="column" spacing={2}>
                  <Button variant="outlined" onClick={() => setModalPassword(true)}>
                    Change Password
                  </Button>
                  <Button variant="outlined" onClick={handleAddAddress}>
                    Add Address
                  </Button>
                </Stack>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Paper sx={{ padding: '20px' }}>
          <Typography variant="h4">Address List</Typography>
          <Grid container mt={3} spacing={2}>
            {customer.addresses.map((item) => (
              <AddressCard key={item.id} address={item} />
            ))}
          </Grid>
        </Paper>
      </Box>
    </div>
  );
};

export default Profile;
