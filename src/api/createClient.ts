// import { ApiRoot, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
// import { ctpClient } from './BuildClient';

// const projectKey = import.meta.env.VITE_CTP_PROJECT_KEY;

// // Create apiRoot from the imported ClientBuilder and include your Project key
// const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
//   projectKey,
// });

// // Example call to return Project information
// // This code has the same effect as sending a GET request to the commercetools Composable Commerce API without any endpoints.
// export const getProject = () => {
//   return apiRoot.get().execute();
// };

// // Retrieve Project information and output the result to the log
// getProject().then(console.log).catch(console.error);

// export const getShoppingLists = () => {
//   return apiRoot
//     .shoppingLists()
//     .get()
//     .execute()
//     .then(({ body }) => {
//       console.log(JSON.stringify(body));
//     })
//     .catch(console.error);
// };
