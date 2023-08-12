import SdkAuth from '@commercetools/sdk-auth';

const projectKey = import.meta.env.VITE_CTP_PROJECT_KEY;
const clientId = import.meta.env.VITE_CTP_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CTP_CLIENT_SECRET;
const authHost = import.meta.env.VITE_CTP_AUTH_URL;
const scope = import.meta.env.VITE_CTP_SCOPES;

const authClient = new SdkAuth({
  host: authHost,
  projectKey,
  disableRefreshToken: false,
  credentials: {
    clientId,
    clientSecret,
  },
  scopes: scope.split(' '),
  fetch,
});

export const getToken = async () => {
  const token = await authClient.clientCredentialsFlow();
  localStorage.setItem('accessToken', token.access_token);
  return token;
};
