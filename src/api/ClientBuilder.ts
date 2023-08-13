// import fetch from 'isomorphic-fetch';
import { ClientBuilder, Client, AuthMiddlewareOptions, HttpMiddlewareOptions } from '@commercetools/sdk-client-v2';
import { createApiBuilderFromCtpClient, ApiRoot } from '@commercetools/platform-sdk';

const scope = import.meta.env.VITE_CTP_SCOPES;
const scopes = scope.split(' ');

export const projectKey = import.meta.env.VITE_CTP_PROJECT_KEY || '';
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: import.meta.env.VITE_CTP_AUTH_URL,
  projectKey,
  credentials: {
    clientId: import.meta.env.VITE_CTP_CLIENT_ID || '',
    clientSecret: import.meta.env.VITE_CTP_CLIENT_SECRET || '',
  },
  scopes,
  fetch,
};

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: import.meta.env.VITE_CTP_API_URL,
  fetch,
};

const client: Client = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();

export const getApiRoot: () => ApiRoot = () => {
  return createApiBuilderFromCtpClient(client);
};
