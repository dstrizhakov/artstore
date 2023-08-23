import { ConfigValidator } from './../pages/Register';
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
      message: 'Password must contain at least one letter',
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
  },
  lastName: {
    isRequired: {
      message: 'LastName required to fill',
    },
  },
  country: {
    isRequired: {
      message: 'Country required to fill',
    },
  },
  billingCountry: {
    isRequired: {
      message: 'Country required to fill',
    },
  },
};

export default validatorConfig;
