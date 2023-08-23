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
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { FC } from 'react';

import { changeBillingSame, setField } from '../../store/reducers/address.slice';
import { countries } from '../../constants/countries';

const RegisterAddress: FC = () => {
  const dispatch = useAppDispatch();
  const addreses = useAppSelector((state) => state.addresses);

  const handleSetBillingSame = () => {
    dispatch(changeBillingSame(!addreses.isBillingSame));
  };

  return (
    <Grid item xs={12} md={12}>
      <Box sx={{ display: 'flex', p: 1, m: 1, borderRadius: 1, gap: 2, justifyContent: 'center' }}>
        <Box
          sx={{
            display: 'block',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', width: 300 }}>
            <h3>Shipping address</h3>
            <FormControl sx={{ m: 0, minWidth: 120 }} error={!addreses.shipping.country}>
              <InputLabel id="shipping-country">Country</InputLabel>
              <Select
                variant="standard"
                id="shipping-country"
                value={addreses.shipping.country}
                label="Country"
                renderValue={(value) => ` - ${value} -`}
                onChange={(event: SelectChangeEvent<string>) =>
                  dispatch(setField({ addressType: 'shipping', fieldName: 'country', fieldValue: event?.target.value }))
                }
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
              {!addreses.shipping.country && <FormHelperText>{'Country is required'}</FormHelperText>}
            </FormControl>

            <TextField
              variant="standard"
              id="shipping-state"
              label="State"
              value={addreses.shipping.state}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(setField({ addressType: 'shipping', fieldName: 'state', fieldValue: event?.target.value }))
              }
            />
            <TextField
              variant="standard"
              id="shipping-city"
              label="City"
              value={addreses.shipping.city}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(setField({ addressType: 'shipping', fieldName: 'city', fieldValue: event?.target.value }))
              }
            />
            <TextField
              variant="standard"
              id="shipping-street_name"
              label="Street name"
              value={addreses.shipping.street}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(setField({ addressType: 'shipping', fieldName: 'street', fieldValue: event?.target.value }))
              }
            />
            <TextField
              variant="standard"
              id="shipping-street_number"
              label="Street number"
              value={addreses.shipping.building}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(setField({ addressType: 'shipping', fieldName: 'building', fieldValue: event?.target.value }))
              }
            />
            <TextField
              variant="standard"
              id="shipping-apart"
              label="Apartment"
              value={addreses.shipping.apartment}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(setField({ addressType: 'shipping', fieldName: 'apartment', fieldValue: event?.target.value }))
              }
            />
            <TextField
              variant="standard"
              id="shipping-zip"
              label="Zip"
              value={addreses.shipping.zip}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(setField({ addressType: 'shipping', fieldName: 'zip', fieldValue: event?.target.value }))
              }
            />
            <TextField
              variant="standard"
              id="shipping-first_name"
              label="First name"
              value={addreses.shipping.firstName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(setField({ addressType: 'shipping', fieldName: 'firstName', fieldValue: event?.target.value }))
              }
            />
            <TextField
              variant="standard"
              id="shipping-last_name"
              label="Last name"
              value={addreses.shipping.lastName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(setField({ addressType: 'shipping', fieldName: 'lastName', fieldValue: event?.target.value }))
              }
            />
          </Box>
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
              control={<Switch color="primary" checked={addreses.isBillingSame} onChange={handleSetBillingSame} />}
              label="The billing address is the same"
              labelPlacement="start"
            />
          </Box>
        </Box>
        {!addreses.isBillingSame && (
          <Box
            sx={{
              display: 'block',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', width: 300 }}>
              <h3>Billing address</h3>
              <FormControl sx={{ m: 0, minWidth: 120 }} error={!addreses.billing.country}>
                <InputLabel id="billing-country">Country</InputLabel>
                <Select
                  variant="standard"
                  id="billing-country"
                  value={addreses.billing.country}
                  label="Country"
                  renderValue={(value) => ` - ${value} -`}
                  onChange={(event: SelectChangeEvent<string>) =>
                    dispatch(
                      setField({ addressType: 'billing', fieldName: 'country', fieldValue: event?.target.value })
                    )
                  }
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
                {!addreses.billing.country && <FormHelperText>{'Billing country is required'}</FormHelperText>}
              </FormControl>
              <TextField
                variant="standard"
                id="billing-state"
                label="State"
                value={addreses.billing.state}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setField({ addressType: 'billing', fieldName: 'state', fieldValue: event?.target.value }))
                }
              />
              <TextField
                variant="standard"
                id="billing-city"
                label="City"
                value={addreses.billing.city}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setField({ addressType: 'billing', fieldName: 'city', fieldValue: event?.target.value }))
                }
              />
              <TextField
                variant="standard"
                id="billing-street_name"
                label="Street name"
                value={addreses.billing.street}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setField({ addressType: 'billing', fieldName: 'street', fieldValue: event?.target.value }))
                }
              />
              <TextField
                variant="standard"
                id="billing-street_number"
                label="Street number"
                value={addreses.billing.building}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setField({ addressType: 'billing', fieldName: 'building', fieldValue: event?.target.value }))
                }
              />
              <TextField
                variant="standard"
                id="billing-apart"
                label="Apartment"
                value={addreses.billing.apartment}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(
                    setField({ addressType: 'billing', fieldName: 'apartment', fieldValue: event?.target.value })
                  )
                }
              />
              <TextField
                variant="standard"
                id="billing-zip"
                label="Zip"
                value={addreses.billing.zip}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setField({ addressType: 'billing', fieldName: 'zip', fieldValue: event?.target.value }))
                }
              />
              <TextField
                variant="standard"
                id="billing-first_name"
                label="First name"
                value={addreses.billing.firstName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(
                    setField({ addressType: 'billing', fieldName: 'firstName', fieldValue: event?.target.value })
                  )
                }
              />
              <TextField
                variant="standard"
                id="billing-last_name"
                label="Last name"
                value={addreses.billing.lastName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setField({ addressType: 'billing', fieldName: 'lastName', fieldValue: event?.target.value }))
                }
              />
            </Box>
          </Box>
        )}
      </Box>
    </Grid>
  );
};

export default RegisterAddress;
