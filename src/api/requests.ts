import { ISort } from 'store/reducers/filters.slice';
import { getApiRoot, projectKey } from './ClientBuilder';
import {
  CustomerSignInResult,
  ProductPagedQueryResponse,
  Product,
  CustomerChangePassword,
  CustomerChangeAddressAction,
  ProductProjectionPagedSearchResponse,
  CategoryPagedQueryResponse,
  ProductTypePagedQueryResponse,
  CustomerUpdateAction,
} from '@commercetools/platform-sdk';

export async function signIn(email: string, password: string): Promise<CustomerSignInResult> {
  try {
    const response = await getApiRoot()
      .withProjectKey({
        projectKey,
      })
      .login()
      .post({
        body: {
          email: email,
          password: password,
        },
      })
      .execute();
    return response.body;
  } catch (error) {
    throw error;
  }
}

export async function signUp(
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  dateOfBirth: string,
  shippingAddress: {
    title?: string;
    firstName?: string;
    lastName?: string;
    state?: string;
    streetName?: string;
    postalCode?: string;
    city?: string;
    country: string;
    building?: string;
    apartment?: string;
    streetNumber?: string;
    mobile?: string;
  },
  billingAddress: {
    title?: string;
    firstName?: string;
    lastName?: string;
    state?: string;
    streetName?: string;
    postalCode?: string;
    city?: string;
    country: string;
    building?: string;
    apartment?: string;
    streetNumber?: string;
    mobile?: string;
  }
): Promise<CustomerSignInResult> {
  try {
    const response = await getApiRoot()
      .withProjectKey({
        projectKey,
      })
      .me()
      .signup()
      .post({
        body: {
          email: email,
          firstName: firstName,
          lastName: lastName || '',
          password: password,
          dateOfBirth: dateOfBirth,
          addresses: [shippingAddress, billingAddress],
        },
      })
      .execute();

    return response.body;
  } catch (error) {
    throw error;
  }
}
export const addShippingBillingAddress = async (
  cutomerId: string,
  version: number,
  shippingAddressId: string,
  billingAddressId: string
) => {
  try {
    const response = await getApiRoot()
      .withProjectKey({
        projectKey,
      })
      .customers()
      .withId({ ID: cutomerId })
      .post({
        body: {
          version,
          actions: [
            {
              action: 'addShippingAddressId',
              addressId: shippingAddressId,
            },
            {
              action: 'addBillingAddressId',
              addressId: billingAddressId,
            },
          ],
        },
      })
      .execute();
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateCustomer = async (
  customerID: string,
  version: number,
  firstName: string,
  lastName: string,
  email: string,
  middleName: string,
  date: string
) => {
  try {
    const response = await getApiRoot()
      .withProjectKey({ projectKey })
      .customers()
      .withId({ ID: customerID })
      .post({
        body: {
          version,
          actions: [
            {
              action: 'setFirstName',
              firstName: firstName,
            },
            {
              action: 'setLastName',
              lastName: lastName,
            },
            {
              action: 'changeEmail',
              email: email,
            },
            {
              action: 'setMiddleName',
              middleName: middleName,
            },
            {
              action: 'setDateOfBirth',
              dateOfBirth: date,
            },
          ],
        },
      })
      .execute();
    return response.body;
  } catch (error) {
    throw error;
  }
};

export async function changePassword({ id, version, currentPassword, newPassword }: CustomerChangePassword) {
  try {
    const response = await getApiRoot()
      .withProjectKey({ projectKey })
      .customers()
      .password()
      .post({
        body: {
          id,
          version,
          currentPassword,
          newPassword,
        },
      })
      .execute();
    return response.body;
  } catch (error) {
    throw error;
  }
}

export const changeCustomerAddress = async (
  customerID: string,
  version: number,
  action: CustomerChangeAddressAction
) => {
  try {
    const response = await getApiRoot()
      .withProjectKey({ projectKey })
      .customers()
      .withId({ ID: customerID })
      .post({
        body: {
          version,
          actions: [action],
        },
      })
      .execute();
    return response;
  } catch (error) {
    throw error;
  }
};

export const getProducts = async (limit?: number, offset?: number): Promise<ProductPagedQueryResponse> => {
  try {
    const project = await getApiRoot()
      .withProjectKey({ projectKey })
      .products()
      .get({ queryArgs: { limit, offset } })
      .execute();
    return project.body;
  } catch (error) {
    throw error;
  }
};
// export const getProductsSearch = async (
//   search: string,
//   limit: number,
//   offset: number
// ): Promise<ProductProjectionPagedSearchResponse> => {
//   try {
//     const project = await getApiRoot()
//       .withProjectKey({ projectKey })
//       .productProjections()
//       .search()
//       .get({
//         queryArgs: {
//           'text.en': search,
//           limit,
//           offset,
//         },
//       })
//       .execute();
//     return project.body;
//   } catch (error) {
//     throw error;
//   }
// };
export const searchProducts = async (
  search: string,
  fuzzy: boolean,
  limit: number,
  offset: number,
  categoryId?: string,
  typeId?: string,
  sortData?: ISort,
  priceRange?: number[]
): Promise<ProductProjectionPagedSearchResponse> => {
  const sort = sortData && sortData[0] ? [sortData.join(' ')] : undefined;
  const filter = [];
  if (!!categoryId) {
    filter.push(`categories.id:"${categoryId}"`);
  }
  if (!!typeId) {
    filter.push(`productType.id:"${typeId}"`);
  }
  if (priceRange?.length === 2) {
    // filter.push(`variants.price.centAmount:range(${priceRange[0]} to ${priceRange[1]})`);
    filter.push(`variants.price.centAmount:range(${priceRange[0]} to ${priceRange[1]})`);
  }
  try {
    const project = await getApiRoot()
      .withProjectKey({ projectKey })
      .productProjections()
      .search()
      .get({
        queryArgs: {
          ['text.en-US']: search,
          fuzzy,
          limit,
          offset,
          filter,
          sort,
        },
      })
      .execute();

    return project.body;
  } catch (error) {
    throw error;
  }
};

export const getProductTypes = async (): Promise<ProductTypePagedQueryResponse> => {
  try {
    const project = await getApiRoot().withProjectKey({ projectKey }).productTypes().get().execute();
    return project.body;
  } catch (error) {
    throw error;
  }
};

export const getProductCategories = async (): Promise<CategoryPagedQueryResponse> => {
  try {
    const project = await getApiRoot().withProjectKey({ projectKey }).categories().get().execute();
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

export const getProductByKey = async (productKey: string): Promise<Product> => {
  try {
    const project = await getApiRoot()
      .withProjectKey({ projectKey })
      .products()
      .withKey({ key: productKey })
      .get()
      .execute();
    return project.body;
  } catch (e) {
    throw e;
  }
};

export const AddCustomerAddress = async (customerID: string, version: number, actions: CustomerUpdateAction[]) => {
  try {
    const response = await getApiRoot()
      .withProjectKey({ projectKey })
      .customers()
      .withId({ ID: customerID })
      .post({
        body: {
          version,
          actions,
        },
      })
      .execute();
    return response;
  } catch (error) {
    throw error;
  }
};
export const DeleteCustomerAddress = async (customerID: string, version: number, id: string) => {
  try {
    const response = await getApiRoot()
      .withProjectKey({ projectKey })
      .customers()
      .withId({ ID: customerID })
      .post({
        body: {
          version,
          actions: [
            {
              action: 'removeAddress',
              addressId: id,
            },
          ],
        },
      })
      .execute();
    return response.body;
  } catch (error) {
    throw error;
  }
};
