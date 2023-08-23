import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
} from '@mui/material';
import { AddressType } from '../../types/types';
// import { useAppDispatch } from '../../hooks/redux';
// import { FC } from 'react';

// import { AddressType } from 'types/types';
// import { changeShipping, changeBilling, changeBillingSame } from '../../store/reducers/address.slice';
import { countries } from '../../constants/countries';
interface RegisterAddressProps {
  address: AddressType;
  handleChange: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  billingSame: boolean;
  addressBilling: AddressType;
  setBillingSame: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  handleCountryShippingChange: (event: SelectChangeEvent<string>) => void;
}

const RegisterAddress = ({
  address,
  handleChange,
  billingSame,
  addressBilling,
  setBillingSame,
  handleCountryShippingChange,
}: RegisterAddressProps) => {
  const type = 'shipping';
  // const dispatch = useAppDispatch();

  // const [address, setAddress] = useState<AddressType>({
  //   country: '',
  //   state: '',
  //   city: '',
  //   streetName: '',
  //   building: '',
  //   apartment: '',
  //   firstName: '',
  //   lastName: '',
  //   postalCode: '',
  // });
  // const [addressBilling, setAddressBilling] = useState<AddressType>({
  //   country: '',
  //   state: '',
  //   city: '',
  //   streetName: '',
  //   building: '',
  //   apartment: '',
  //   firstName: '',
  //   lastName: '',
  //   postalCode: '',
  // });
  // const [billingSame, setBillingSame] = useState(true);

  // const handleShippingChange = (field: keyof AddressType, value: string) => {
  //   setAddress((prevAddress) => ({
  //     ...prevAddress,
  //     [field]: value,
  //   }));
  //   dispatch(changeShipping(address));
  // };

  // const handleBillingChange = (field: keyof AddressType, value: string) => {
  //   setAddressBilling((prevAddress) => ({
  //     ...prevAddress,
  //     [field]: value,
  //   }));
  //   dispatch(changeBilling(addressBilling));
  // };

  // const handleCountryShippingChange = (event: SelectChangeEvent<string>) => {
  //   const { value } = event.target;
  //   setAddress((prevState) => ({
  //     ...prevState,
  //     country: value,
  //   }));
  //   dispatch(changeShipping(address));
  // };

  // const handleCountryBillingChange = (event: SelectChangeEvent<string>) => {
  //   const { value } = event.target;
  //   setAddressBilling((prevState) => ({
  //     ...prevState,
  //     country: value,
  //   }));
  //   dispatch(changeBilling(addressBilling));
  // };
  // const handleSetBillingSame = () => {
  //   setBillingSame(!billingSame);
  //   dispatch(changeBillingSame(billingSame));
  // };

  return (
    <Grid item xs={12} md={12}>
      <Box sx={{ display: 'flex', p: 1, m: 1, borderRadius: 1, gap: 2 }}>
        <Box
          sx={{
            display: 'block',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <h3>Shipping address</h3>
          <div>
            <FormControl sx={{ m: 0, minWidth: 120 }} error={!address?.country}>
              <InputLabel id="demo-simple-select-error-label">Country</InputLabel>
              <Select
                variant="standard"
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={address?.country || ''}
                label="Country"
                renderValue={(value) => ` - ${value} -`}
                onChange={handleCountryShippingChange}
                name="country"
              >
                <MenuItem disabled>
                  <em>None</em>
                </MenuItem>
                {countries.map((country) => (
                  <MenuItem key={country.value} value={country.value}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{'errors'}</FormHelperText>
            </FormControl>

            <TextField
              variant="standard"
              id={`${type}_state`}
              label="State"
              value={address?.state || ''}
              onChange={handleChange}
              name="state"
            />
            <TextField
              variant="standard"
              id={`${type}_city`}
              label="City"
              value={address?.city || ''}
              onChange={handleChange}
              name="city"
            />
            <TextField
              variant="standard"
              id={`${type}_street_name`}
              label="Street name"
              value={address?.streetName || ''}
              onChange={handleChange}
              name="streetName"
            />
            <TextField
              variant="standard"
              id={`${type}_street_number`}
              label="Street number"
              value={address?.streetNumber || ''}
              onChange={handleChange}
              name="streetNumber"
            />
            <TextField
              variant="standard"
              id={`${type}_apart`}
              label="Apartment"
              value={address?.apartment || ''}
              onChange={handleChange}
              name="apartment"
            />
            <TextField
              variant="standard"
              id={`${type}_zip`}
              label="Zip"
              value={address?.postalCode || ''}
              onChange={handleChange}
              name="postalCode"
            />
            <TextField
              variant="standard"
              id={`${type}_first_name`}
              label="First name"
              value={address?.firstName || ''}
              onChange={handleChange}
              name="firstName"
            />
            <TextField
              variant="standard"
              id={`${type}_last_name`}
              label="Last name"
              value={address?.lastName || ''}
              onChange={handleChange}
              name="lastName"
            />
          </div>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  checked={billingSame}
                  onChange={() => setBillingSame((prevstate: boolean) => !prevstate)}
                />
              }
              label="The billing address is the same"
              labelPlacement="start"
            />
          </Box>
        </Box>
        {!billingSame && (
          <Box
            sx={{
              display: 'block',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}
          >
            <h3>Billing address</h3>
            <div>
              <FormControl sx={{ m: 0, minWidth: 120 }} error={!addressBilling?.country}>
                <InputLabel id="demo-simple-select-error-label">Country</InputLabel>
                <Select
                  variant="standard"
                  labelId="demo-simple-select-error-label"
                  id="demo-simple-select-error"
                  value={addressBilling?.country || ''}
                  label="Country"
                  renderValue={(value) => ` - ${value} -`}
                  onChange={handleCountryShippingChange}
                  name="country"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {countries.map((country) => (
                    <MenuItem key={country.value} value={country.value}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{'errors'}</FormHelperText>
              </FormControl>

              <TextField
                variant="standard"
                id={`${type}_state`}
                label="State"
                value={addressBilling?.state || ''}
                onChange={handleChange}
                name="state"
              />
              <TextField
                variant="standard"
                id={`${type}_city`}
                label="City"
                value={addressBilling?.city || ''}
                onChange={handleChange}
                name="city"
              />
              <TextField
                variant="standard"
                id={`${type}_street_name`}
                label="Street name"
                value={addressBilling?.streetName || ''}
                onChange={handleChange}
                name="streetName"
              />
              <TextField
                variant="standard"
                id={`${type}_street_number`}
                label="Street number"
                value={addressBilling?.building || ''}
                onChange={handleChange}
                name="streetNumber"
              />
              <TextField
                variant="standard"
                id={`${type}_apart`}
                label="Apartment"
                value={addressBilling?.apartment || ''}
                onChange={handleChange}
                name="apartment"
              />
              <TextField
                variant="standard"
                id={`${type}_zip`}
                label="Zip"
                value={addressBilling?.postalCode || ''}
                onChange={handleChange}
                name="postalCode"
              />
              <TextField
                variant="standard"
                id={`${type}_first_name`}
                label="First name"
                value={addressBilling?.firstName || ''}
                onChange={handleChange}
                name="firstName"
              />
              <TextField
                variant="standard"
                id={`${type}_last_name`}
                label="Last name"
                value={addressBilling?.lastName || ''}
                onChange={handleChange}
                name="lastName"
              />
            </div>
          </Box>
        )}
      </Box>
    </Grid>
  );
};

export default RegisterAddress;
