import SdkAuth from '@commercetools/sdk-auth';

const projectKey = import.meta.env.VITE_CTP_PROJECT_KEY;
const clientId = import.meta.env.VITE_CTP_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CTP_CLIENT_SECRET;
const authHost = import.meta.env.VITE_CTP_AUTH_URL;
const scope = import.meta.env.VITE_CTP_SCOPES;

export const authClient = new SdkAuth({
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

export const customerSession = async (username: string, password: string) => {
  console.log(username, password);
  try {
    const token = await authClient.clientPasswordFlow(
      {
        username,
        password,
      },
      {
        disableRefreshToken: false,
      }
    );
    return token;
  } catch (error) {
    throw error;
  }
};

export const anonimusSession = async () => {
  try {
    const token = await authClient.anonymousFlow();
    return token;
  } catch (error) {
    throw error;
  }
};

// export const customSession = async (username: string, password: string) => {
//   try {
//     const token = await authClient.customFlow({
//       host: authHost,
//       uri: `/oauth/${projectKey}/customers/token`,
//       body: JSON.stringify({
//         username,
//         password,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     return token;
//   } catch (error) {
//     throw error;
//   }
// };
