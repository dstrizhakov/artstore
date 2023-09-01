export interface Erroring {
  [key: string]: string;
}
export interface DataRegister {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
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
  dateOfBirth: {
    isRequired: Required;
    isValidDate: {
      message: string;
    };
  };
  title: {
    isRequired: Required;
    isNotNumber: {
      message: string;
    };
    isNotDublicateTitle: {
      message: string;
    };
  };
  country: {
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
  state: {
    isNotNumber: {
      message: string;
    };
    isNotSpecial: {
      message: string;
    };
  };
  streetName: {
    isRequired: Required;
    isNotNumber: {
      message: string;
    };
  };
  streetNumber: {
    isRequired: Required;
    onlyNumber: {
      message: string;
    };
  };
  building: {
    onlyNumber: {
      message: string;
    };
  };
  apartment: {
    isRequired: Required;
    onlyNumber: {
      message: string;
    };
  };
  firstNameShipping: {
    isRequired: Required;
    isNotNumber: {
      message: string;
    };
    isNotSpecial: {
      message: string;
    };
  };
  lastNameShipping: {
    isRequired: Required;
    isNotNumber: {
      message: string;
    };
    isNotSpecial: {
      message: string;
    };
  };
  mobile: {
    isRequired: Required;
    notMobile: {
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
  billingTitle: {
    isRequired: Required;
    isNotNumber: {
      message: string;
    };
    isNotDublicateTitle: {
      message: string;
    };
  };
  billingCountry: {
    isRequired: Required;
  };
  billingState: {
    isNotNumber: {
      message: string;
    };
    isNotSpecial: {
      message: string;
    };
  };
  billingStreetName: {
    isRequired: Required;
    isNotNumber: {
      message: string;
    };
    isNotSpecial: {
      message: string;
    };
  };
  billingCity: {
    isRequired: Required;
    isNotNumber: {
      message: string;
    };
    isNotSpecial: {
      message: string;
    };
  };
  billingStreetNumber: {
    isRequired: Required;
    onlyNumber: {
      message: string;
    };
  };
  billingBuilding: {
    onlyNumber: {
      message: string;
    };
  };
  billingApartment: {
    isRequired: Required;
    onlyNumber: {
      message: string;
    };
  };
  firstNameBilling: {
    isRequired: Required;
    isNotNumber: {
      message: string;
    };
    isNotSpecial: {
      message: string;
    };
  };
  lastNameBilling: {
    isRequired: Required;
    isNotNumber: {
      message: string;
    };
    isNotSpecial: {
      message: string;
    };
  };
  billingMobile: {
    isRequired: Required;
    notMobile: {
      message: string;
    };
  };
  billingPostalCode: {
    isRequired: Required;
    zip: {
      message: string;
    };
  };
}
