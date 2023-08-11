import { getApiRoot } from './ClientBuilder';
import { projectKey } from './ClientBuilder';

export const getProducts = async () => {
  try {
    const project = await getApiRoot().withProjectKey({ projectKey }).products().get().execute();
    return project.body;
  } catch (e) {
    console.log(e);
  }
};
