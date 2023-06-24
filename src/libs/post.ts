import { fetchInstance } from './fetchInstance';

export const createPost = (uuid: string, content: string, style: string): Promise<string> => {
  return fetchInstance()
    .post(`/share/${uuid}`, {
      content: content,
      style: style,
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getPost = (uuid: string): Promise<string> => {
  return fetchInstance()
    .get(`/share/${uuid}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
