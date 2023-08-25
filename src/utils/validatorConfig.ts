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
  country: {
    isRequired: {
      message: 'Country required to fill',
    },
  },
  streetName: {
    isRequired: {
      message: 'Street Name required to fill',
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
  postalCode: {
    isRequired: {
      message: 'Zip required to fill',
    },
    zip: {
      message: 'Zip code entered incorrectly',
    },
  },
  billingCountry: {
    isRequired: {
      message: 'Country required to fill',
    },
  },
  billingStreetName: {
    isRequired: {
      message: 'Street Name required to fill',
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
  billingPostalCode: {
    isRequired: {
      message: 'Zip required to fill',
    },
    zip: {
      message: 'Zip code entered incorrectly',
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
};

export default validatorConfig;
