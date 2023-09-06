import { ConfigValidator, DataRegister, Erroring, Required } from '../types/ConfigValidator';
import { DataCustomerInfo } from '../components/Profile/CustomerInfo/CustomerInfo';
import { DataLogin } from '../pages/Login';
import { AddressType } from '../types/types';
export const validator = (
  data: DataRegister | DataLogin | DataCustomerInfo | AddressType,
  config: ConfigValidator,
  address?: AddressType[]
) => {
  const errors: Erroring = {};
  const validate = (validateMethod: string, data: string, config: Required) => {
    let statusVlidate;
    switch (validateMethod) {
      case 'isRequired':
        statusVlidate = data.trim() === '';

        break;
      case 'isEmail': {
        const emailRegExp = /^\S+@\S+\.+\S+$/g;
        statusVlidate = !emailRegExp.test(data);
        break;
      }
      case 'isCapitalSymbol': {
        const capitalRegExp = /[A-Z]+/g;
        statusVlidate = !capitalRegExp.test(data);
        break;
      }
      case 'isSmallSymbol': {
        const smallRegExp = /[a-z]+/g;
        statusVlidate = !smallRegExp.test(data);
        break;
      }
      case 'isContainDigit': {
        const digitRegExp = /\d+/g;
        statusVlidate = !digitRegExp.test(data);
        break;
      }

      case 'min': {
        statusVlidate = data.length <= config.value!;
        break;
      }
      case 'isNotNumber': {
        const dontNumberExp = /\d/g;
        statusVlidate = dontNumberExp.test(data);
        break;
      }
      case 'isNotSpecial': {
        const dontSpecialExp = /\W|_/g;
        statusVlidate = dontSpecialExp.test(data);
        break;
      }
      case 'isValidDate': {
        const birthDate = new Date(data);
        const otherDate = new Date();
        if (birthDate > otherDate) statusVlidate = true;
        let years = otherDate.getFullYear() - birthDate.getFullYear();
        if (
          otherDate.getMonth() < birthDate.getMonth() ||
          (otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate())
        ) {
          years--;
        }
        if (years < 13) statusVlidate = true;
        break;
      }
      case 'zip': {
        const postalCodeExp = /^\d{5}(?:[-\s]\d{4})?$/g;
        statusVlidate = !postalCodeExp.test(data);
        break;
      }
      case 'onlyNumber': {
        const onlyNumberExp = /^[0-9]+$/g;
        if (data !== '') {
          statusVlidate = !onlyNumberExp.test(data);
        }
        break;
      }
      case 'notMobile': {
        const notMobileExp = /(?:\+|\d)[\d\-\(\) ]{9,}\d/g;
        statusVlidate = !notMobileExp.test(data);
        break;
      }
      case 'isNotDublicateTitle': {
        const isNotDublicateTitleExp = address?.find((item) => item.title === data);
        statusVlidate = isNotDublicateTitleExp;
        break;
      }

      default:
        break;
    }
    if (statusVlidate) return config.message;
  };

  for (const fildName in data) {
    for (const validateMethod in config[fildName as keyof ConfigValidator]) {
      const error = validate(
        validateMethod,
        data[fildName as keyof (DataRegister | DataLogin | DataCustomerInfo | AddressType)],
        config[fildName as keyof ConfigValidator][validateMethod as keyof typeof validate]
      );
      if (error && !errors[fildName as keyof typeof errors]) {
        errors[fildName as keyof typeof errors] = error;
      }
    }
  }

  return errors;
};
