import { getApiRoot } from './createClient';
import { projectKey } from './ClientBuilder';
import { ProductPagedQueryResponse } from '@commercetools/platform-sdk';

export async function signIn(email: string, password: string) {
  const response = await getApiRoot()
    .withProjectKey({
      projectKey: import.meta.env.VITE_CTP_PROJECT_KEY,
    })
    .login()
    .post({
      body: {
        email: email,
        password: password,
      },
    })
    .execute();
  return response;
}

export const getProducts = async (): Promise<ProductPagedQueryResponse> => {
  try {
    const project = await getApiRoot().withProjectKey({ projectKey }).products().get().execute();
    return project.body;
  } catch (error) {
    throw error;
  }
};

export const getProjectDetails = async () => {
  try {
    const projectDetails = await getApiRoot().withProjectKey({ projectKey }).get().execute();
    return projectDetails;
  } catch (error) {
    throw error;
  }
};

export const getShippingMethodById = async (ID: string) => {
  try {
    const shippingMethod = await getApiRoot()
      .withProjectKey({ projectKey })
      .shippingMethods()
      .withId({ ID })
      .get()
      .execute();
    return shippingMethod;
  } catch (error) {
    throw error;
  }
};

export const getCustomers = async () => {
  try {
    const customers = await getApiRoot()
      .withProjectKey({ projectKey })
      .customers()
      .get({ queryArgs: { limit: 10 } })
      .execute();
    return customers;
  } catch (error) {
    throw error;
  }
};

export const getOrders = async () => {
  try {
    const customers = await getApiRoot()
      .withProjectKey({ projectKey })
      .orders()
      .get({ queryArgs: { limit: 10 } })
      .execute();
    return customers;
  } catch (error) {
    throw error;
  }
};

// const customerDraftData = {
//   firstName: 'test',
//   lastName: 'test',
//   email: 'test@test.com',
//   password: 'password',
//   key: 'test123',
//   countryCode: 'DE',
// };
export interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  key: string;
  countryCode: string;
}

export const createCustomer = async (draft: ICustomer) => {
  const { firstName, lastName, email, password, key, countryCode } = draft;
  try {
    const customers = await getApiRoot()
      .withProjectKey({ projectKey })
      .customers()
      .post({
        body: {
          firstName,
          lastName,
          email,
          password,
          key,
          addresses: [{ country: countryCode }],
        },
      })
      .execute();
    return customers;
  } catch (error) {
    throw error;
  }
};

export const getCustomerById = async (ID: string) => {
  try {
    const customer = await getApiRoot().withProjectKey({ projectKey }).customers().withId({ ID }).get().execute();
    return customer;
  } catch (error) {
    throw error;
  }
};

export const getCustomerByKey = async (key: string) => {
  try {
    const customer = await getApiRoot().withProjectKey({ projectKey }).customers().withKey({ key }).get().execute();
    return customer;
  } catch (error) {
    throw error;
  }
};

export const deleteCustomerById = async (ID: string) => {
  try {
    const customer = await getCustomerById(ID);
    const response = await getApiRoot()
      .withProjectKey({ projectKey })
      .customers()
      .withId({ ID })
      .delete({
        queryArgs: {
          version: customer.body.version,
        },
      })
      .execute();
    return response;
  } catch (error) {
    throw error;
  }
};

export const authCustomer = async (email: string, password: string) => {
  try {
    const responce = await getApiRoot()
      .withProjectKey({ projectKey })
      .me()
      .login()
      .post({
        body: { email, password },
      })
      .execute();
    return responce;
  } catch (error) {
    throw error;
  }
};
