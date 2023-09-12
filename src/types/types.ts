import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';

export type AddressType = {
  firstName?: string;
  lastName?: string;
  id?: string;
  mobile?: string;
  title?: string;
  state?: string;
  streetName?: string;
  postalCode?: string;
  city?: string;
  country: string;
  firstNameShipping?: string;
  lastNameShipping?: string;
  building?: string;
  apartment?: string;
  streetNumber?: string;
  billingCountry?: string;
  billingStreetName?: string;
  billingCity?: string;
  billingPostalCode?: string;
  billingTitle?: string;
  billingState?: string;
  billingStreetNumber?: string;
  billingBuilding?: string;
  billingApartment?: string;
  firstNameBilling?: string;
  lastNameBilling?: string;
  billingMobile?: string;
};

export type ILink = {
  name: string;
  url: string;
  icon: OverridableComponent<SvgIconTypeMap<'svg'>> & {
    muiName: string;
  };
};
export interface DeveloperItemType {
  name: string;
  description: string;
  img: string;
  skills: string[];
  links: ILink[];
}
