import { Box, Button, Chip, Grid, Paper, Stack, Typography } from '@mui/material';
import Modal from '../../../components/Modal/Modal';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { FC, useState } from 'react';
import { AddressType } from '../../../types/types';
import { AddCustomerAddress, DeleteCustomerAddress } from '../../../api/requests';
import { setError } from '../../../store/reducers/products.slice';
import { login } from '../../../store/reducers/user.slice';
import EditAddress from '../EditAddress/EditAddress';
type AddresCardProps = {
  address: AddressType;
};
const AddressCard: FC<AddresCardProps> = ({ address }) => {
  const customer = useAppSelector((state) => state.user.customer);
  const dispatch = useAppDispatch();
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(true);
  };
  const handleDelete = async (id: string) => {
    try {
      const response = await DeleteCustomerAddress(customer.id, customer.version, id);
      dispatch(login(response));
    } catch (error) {
      dispatch(setError('Ошибка удаления адреса'));
    }
  };
  const handleDeleteChip = async (action: 'removeBillingAddressId' | 'removeShippingAddressId') => {
    try {
      const response = await AddCustomerAddress(customer.id, customer.version, [
        {
          action,
          addressId: address.id,
        },
      ]);
      dispatch(login(response.body));
    } catch (error) {}
  };
  const isShipping = customer.shippingAddressIds?.includes(address.id!);
  const isBilling = customer.billingAddressIds?.includes(address.id!);
  return (
    <Grid item sx={{ minHeight: '250px' }} sm={6} md={4} xs={12} lg={3} xl={2}>
      <Modal isOpen={edit} setIsOpen={setEdit}>
        <EditAddress setIsOpen={setEdit} customer={customer} addressId={address.id!} />
      </Modal>
      <Paper elevation={3} sx={{ padding: '10px', height: '100%', border: '1px dotted black' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', minHeight: '60px' }}>
            <Typography variant="h5" sx={{ paddingBottom: '10px' }}>
              {address.title}
            </Typography>
            <Stack direction="column" spacing={1}>
              {isShipping && (
                <Chip
                  label="Shipping"
                  color="primary"
                  size="small"
                  variant="outlined"
                  onDelete={() => handleDeleteChip('removeShippingAddressId')}
                />
              )}{' '}
              {isBilling && (
                <Chip
                  label="Billing"
                  size="small"
                  color="success"
                  variant="outlined"
                  onDelete={() => handleDeleteChip('removeBillingAddressId')}
                />
              )}
            </Stack>
          </Box>

          <Box sx={{ flex: '1 1 auto' }}>
            <Stack direction="column" spacing={1}>
              <Typography>
                {address.firstName} {address.lastName}
              </Typography>
              <Typography>
                {address.country}, {address.state}, {address.city}, {address.streetName}, {address.streetNumber}
              </Typography>
              <Typography>
                Building {address.building}, Apt. {address.apartment}
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Stack direction="row" spacing={1}>
              <Button variant="outlined" onClick={handleEdit}>
                Edit
              </Button>
              <Button variant="outlined" onClick={() => handleDelete(address.id!)}>
                Delete
              </Button>
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default AddressCard;
