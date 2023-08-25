export interface Erroring {
  [key: string]: string;
}
export interface DataRegister {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  country?: string;
  billingCountry?: string;
  dateOfBirth: string;
}

export interface Required {
  message: string;
  value?: number;
}
export interface ConfigValidator {
  email: {
    isRequired: Required;
    isEmail: {
      message: string;
    };
  };
  password: {
    isRequired: Required;
    isCapitalSymbol: {
      message: string;
    };
    isSmallSymbol: {
      message: string;
    };
    isContainDigit: {
      message: string;
    };
    min: {
      message: string;
      value: number;
    };
  };
  firstName: {
    isRequired: Required;
    isNotNumber: {
      message: string;
    };
    isNotSpecial: {
      message: string;
    };
  };
  lastName: {
    isRequired: Required;
    isNotNumber: {
      message: string;
    };
    isNotSpecial: {
      message: string;
    };
  };
  country: {
    isRequired: Required;
  };
  streetName: {
    isRequired: Required;
  };
  city: {
    isRequired: Required;
    isNotNumber: {
      message: string;
    };
    isNotSpecial: {
      message: string;
    };
  };
  postalCode: {
    isRequired: {
      message: string;
    };
    zip: {
      message: string;
    };
  };
  billingCountry: {
    isRequired: Required;
  };
  billingStreetName: {
    isRequired: {
      message: 'Street Name required to fill';
    };
  };
  billingCity: {
    isRequired: {
      message: 'City required to fill';
    };
    isNotNumber: {
      message: 'Digits and numbers cannot be used';
    };
    isNotSpecial: {
      message: 'Special characters cannot be used';
    };
  };
  billingPostalCode: {
    isRequired: {
      message: 'Zip required to fill';
    };
    zip: {
      message: 'Zip code entered incorrectly';
    };
  };
  dateOfBirth: {
    isRequired: Required;
    isValidDate: {
      message: string;
    };
  };
}
