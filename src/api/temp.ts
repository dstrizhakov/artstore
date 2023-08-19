import { getApiRoot } from './ClientBuilder';

export const returnCustomerByEmail = async (customerEmail: string) => {
  return await getApiRoot()
    .withProjectKey({
      projectKey: import.meta.env.VITE_CTP_PROJECT_KEY,
    })
    .customers()
    .get({
      queryArgs: {
        where: `email="${customerEmail}"`,
      },
    })
    .execute();
};

//   returnCustomerByEmail('sdk@example.com')
//     .then(({ body }) => {
//       // As email addresses must be unique, either 0 or 1 Customers will be returned.
//       // If 0, then no Customer exists with this email address.
//       if (body.results.length == 0) {
//         console.log("This email address has not been registered.");
//       }
//       else {
//         // Since there can be only one Customer resource in the result, it must be the first entry of the results array. This outputs the Customer's id.
//         console.log(body.results[0].id);
//       }
//     })
//     .catch(console.error);
