import { ctpClient } from './ClientBuilder';
import { ApiRoot, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
export const getApiRoot: () => ApiRoot = () => {
  return createApiBuilderFromCtpClient(ctpClient);
};
