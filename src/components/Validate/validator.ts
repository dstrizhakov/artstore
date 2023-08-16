import { DataLogin } from './../../pages/Login';
import { DataRegister, Erroring, ConfigValidator, Required } from './../../pages/Register';

export const validator = (data: DataRegister | DataLogin, config: ConfigValidator) => {
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
      case 'isContainDigit': {
        const digitRegExp = /\d+/g;
        statusVlidate = !digitRegExp.test(data);
        break;
      }
      case 'min': {
        statusVlidate = data.length <= config.value!;
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
        data[fildName as keyof (DataRegister | DataLogin)],
        config[fildName as keyof ConfigValidator][validateMethod as keyof typeof validate]
      );
      if (error && !errors[fildName as keyof typeof errors]) {
        errors[fildName as keyof typeof errors] = error;
      }
    }
  }

  return errors;
};
