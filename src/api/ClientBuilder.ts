// import fetch from 'node-fetch';
import { ApiRoot, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import {
  ClientBuilder,
  Client,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions,
  PasswordAuthMiddlewareOptions,
} from '@commercetools/sdk-client-v2';

export const projectKey = import.meta.env.VITE_CTP_PROJECT_KEY;
const authUrl = import.meta.env.VITE_CTP_AUTH_URL;
const clientId = import.meta.env.VITE_CTP_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CTP_CLIENT_SECRET;
const apiUrl = import.meta.env.VITE_CTP_API_URL;
const scope = import.meta.env.VITE_CTP_SCOPES;

const scopes = scope.split(' ');

export const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: authUrl,
  projectKey: projectKey,
  credentials: {
    clientId,
    clientSecret,
  },
  scopes,
  fetch,
};

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: apiUrl,
  fetch,
};

const ctpClient: Client = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  // .withLoggerMiddleware()
  .build();

export const getApiRoot: () => ApiRoot = () => {
  return createApiBuilderFromCtpClient(ctpClient);
};

export const withPasswordFlowClient = (username: string, password: string) => {
  const options: PasswordAuthMiddlewareOptions = {
    host: authUrl,
    projectKey,
    credentials: {
      clientId,
      clientSecret,
      user: {
        username,
        password,
      },
    },
    scopes,
    fetch,
  };
  return new ClientBuilder().withPasswordFlow(options).build();
};

export const getCliApiRoot: () => ApiRoot = () => {
  return createApiBuilderFromCtpClient(withPasswordFlowClient('admiral@gmail.com', 'Fox347767!'));
};
