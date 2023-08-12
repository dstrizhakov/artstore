import { getApiRoot } from './ClientBuilder';
import { projectKey } from './ClientBuilder';
import { ProductPagedQueryResponse } from '@commercetools/platform-sdk';

export const getProducts = async (): Promise<ProductPagedQueryResponse> => {
  try {
    const project = await getApiRoot().withProjectKey({ projectKey }).products().get().execute();
    return project.body;
  } catch (e) {
    throw e;
  }
};
