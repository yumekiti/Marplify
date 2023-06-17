import { fetchInstance } from './fetchInstance';

export const isMarpMarkdown = (markdown: string): boolean => {
  const marpPattern = /^\s*---\s*\n\s*marp:\s*(?:true|1)\s*\n/m;
  const isMarpStart = marpPattern.test(markdown);

  return isMarpStart;
};

export const convertMarkdown = (markdown: string): Promise<string> => {
  return fetchInstance()
    .post('/api/v1/markdown', {
      raw_body: markdown,
    })
    .then((response) => response.data.raw_body)
    .catch((error) => console.log(error));
};

export const convertMarp = (markdown: string): Promise<string> => {
  return fetchInstance()
    .post('/api/v1/marp', {
      raw_body: markdown,
    })
    .then((response) => response.data.raw_body)
    .catch((error) => console.log(error));
};