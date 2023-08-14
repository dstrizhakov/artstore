
import { projectKey } from './ClientBuilder';
import { Product } from '@commercetools/platform-sdk';
import { getApiRoot } from './createClient';

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
