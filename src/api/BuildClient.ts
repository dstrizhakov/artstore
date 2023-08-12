// import {
//   ClientBuilder,
//   type AuthMiddlewareOptions,
//   type HttpMiddlewareOptions,
// } from '@commercetools/sdk-client-v2';
// import fetch from 'isomorphic-fetch';

// const projectKey = import.meta.env.VITE_CTP_PROJECT_KEY;
// const authHost = import.meta.env.VITE_CTP_AUTH_URL;
// const clientId = import.meta.env.VITE_CTP_CLIENT_ID;
// const clientSecret = import.meta.env.VITE_CTP_CLIENT_SECRET;
// const scope = import.meta.env.VITE_CTP_SCOPES;

// const scopes = scope.split(' ');

// // Configure authMiddlewareOptions
// const authMiddlewareOptions: AuthMiddlewareOptions = {
//   host: 'https://auth.{region}.commercetools.com',
//   projectKey: projectKey,
//   credentials: {
//     clientId,
//     clientSecret,
//   },
//   scopes,
//   fetch,
// };

// const httpMiddlewareOptions: HttpMiddlewareOptions = {
//   host: authHost,
//   fetch,
// };

// // Export the ClientBuilder
// export const ctpClient = new ClientBuilder()
//   .withProjectKey(projectKey)
//   .withClientCredentialsFlow(authMiddlewareOptions)
//   .withHttpMiddleware(httpMiddlewareOptions)
//   .withLoggerMiddleware()
//   .build();
