import { ConfigValidator } from '../types/ConfigValidator';

const validatorConfig: ConfigValidator = {
  email: {
    isRequired: {
      message: 'Email required to fill',
    },
    isEmail: {
      message: 'Email entered incorrectly',
    },
  },
  password: {
    isRequired: {
      message: 'Password required to fill',
    },
    isCapitalSymbol: {
      message: 'Password must contain at least one capital letter',
    },
    isSmallSymbol: {
      message: 'Password must contain at least one lowercase letter',
    },
    isContainDigit: {
      message: 'Password must contain at least one number',
    },
    min: {
      message: 'Password must be at least 8 characters long',
      value: 8,
    },
  },
  firstName: {
    isRequired: {
      message: 'FirstName required to fill',
    },
    isNotNumber: {
      message: 'Digits and numbers cannot be used',
    },
    isNotSpecial: {
      message: 'Special characters cannot be used',
    },
  },
  lastName: {
    isRequired: {
      message: 'LastName required to fill',
    },
    isNotNumber: {
      message: 'Digits and numbers cannot be used',
    },
    isNotSpecial: {
      message: 'Special characters cannot be used',
    },
  },
  dateOfBirth: {
    isRequired: {
      message: 'Date required to fill',
    },
    isValidDate: {
      message: 'User must be over 13 years old',
    },
  },
  title: {
    isRequired: {
      message: 'Title required to fill',
    },
    isNotNumber: {
      message: 'Digits and numbers cannot be used',
    },
    isNotDublicateTitle: {
      message: 'A title with this title already exists',
    },
  },
  country: {
    isRequired: {
      message: 'Country required to fill',
    },
  },
  city: {
    isRequired: {
      message: 'City required to fill',
    },
    isNotNumber: {
      message: 'Digits and numbers cannot be used',
    },
    isNotSpecial: {
      message: 'Special characters cannot be used',
    },
  },
  state: {
    isNotNumber: {
      message: 'Digits and numbers cannot be used',
    },
    isNotSpecial: {
      message: 'Special characters cannot be used',
    },
  },
  streetName: {
    isRequired: {
      message: 'Street Name required to fill',
    },
    isNotNumber: {
      message: 'Digits and numbers cannot be used',
    },
  },
  streetNumber: {
    isRequired: {
      message: 'Street Number required to fill',
    },
    onlyNumber: {
      message: 'Street Number must contain only  number',
    },
  },
  building: {
    onlyNumber: {
      message: 'Building must contain only  number',
    },
  },
  apartment: {
    isRequired: {
      message: 'Apartment required to fill',
    },
    onlyNumber: {
      message: 'Apartment must contain only  number',
    },
  },
  firstNameShipping: {
    isRequired: {
      message: 'FirstName required to fill',
    },
    isNotNumber: {
      message: 'Digits and numbers cannot be used',
    },
    isNotSpecial: {
      message: 'Special characters cannot be used',
    },
  },
  lastNameShipping: {
    isRequired: {
      message: 'LastName required to fill',
    },
    isNotNumber: {
      message: 'Digits and numbers cannot be used',
    },
    isNotSpecial: {
      message: 'Special characters cannot be used',
    },
  },
  mobile: {
    isRequired: {
      message: 'Mobile required to fill',
    },
    notMobile: {
      message: 'Mobile number entered incorrectly',
    },
  },

  postalCode: {
    isRequired: {
      message: 'Zip required to fill',
    },
    zip: {
      message: 'Zip code entered incorrectly',
    },
  },
  billingTitle: {
    isRequired: {
      message: 'Title required to fill',
    },
    isNotNumber: {
      message: 'Digits and numbers cannot be used',
    },
    isNotDublicateTitle: {
      message: 'A title with this title already exists',
    },
  },
  billingCountry: {
    isRequired: {
      message: 'Country required to fill',
    },
  },
  billingState: {
    isNotNumber: {
      message: 'Digits and numbers cannot be used',
    },
    isNotSpecial: {
      message: 'Special characters cannot be used',
    },
  },
  billingStreetName: {
    isRequired: {
      message: 'Street Name required to fill',
    },
    isNotNumber: {
      message: 'Digits and numbers cannot be used',
    },
    isNotSpecial: {
      message: 'Special characters cannot be used',
    },
  },
  billingCity: {
    isRequired: {
      message: 'City required to fill',
    },
    isNotNumber: {
      message: 'Digits and numbers cannot be used',
    },
    isNotSpecial: {
      message: 'Special characters cannot be used',
    },
  },
  billingStreetNumber: {
    isRequired: {
      message: 'Street Number required to fill',
    },
    onlyNumber: {
      message: 'Street Number must contain only  number',
    },
  },
  billingBuilding: {
    onlyNumber: {
      message: 'Building must contain only  number',
    },
  },
  billingApartment: {
    isRequired: {
      message: 'Apartment required to fill',
    },
    onlyNumber: {
      message: 'Apartment must contain only  number',
    },
  },
  firstNameBilling: {
    isRequired: {
      message: 'FirstName required to fill',
    },
    isNotNumber: {
      message: 'Digits and numbers cannot be used',
    },
    isNotSpecial: {
      message: 'Special characters cannot be used',
    },
  },
  lastNameBilling: {
    isRequired: {
      message: 'LastName required to fill',
    },
    isNotNumber: {
      message: 'Digits and numbers cannot be used',
    },
    isNotSpecial: {
      message: 'Special characters cannot be used',
    },
  },
  billingMobile: {
    isRequired: {
      message: 'Mobile required to fill',
    },
    notMobile: {
      message: 'Mobile number entered incorrectly',
    },
  },
  billingPostalCode: {
    isRequired: {
      message: 'Zip required to fill',
    },
    zip: {
      message: 'Zip code entered incorrectly',
    },
  },
};

export default validatorConfig;
