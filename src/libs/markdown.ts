import { fetchInstance } from './fetchInstance';

export const isMarpMarkdown = (markdown: string): boolean => {
  const marpPattern = /^\s*---\s*\n\s*marp:\s*(?:true|1)\s*\n/m;
  const isMarpStart = marpPattern.test(markdown);

  return isMarpStart;
};

export const convertToMarp = (markdown: string): Promise<string> => {
  return fetchInstance()
    .post('/markdown-to-marp', {
      content: markdown,
    })
    .then((response) => response.data.content)
    .catch((error) => console.log(error));
};

export const convertToMarkdown = (markdown: string): Promise<string> => {
  return fetchInstance()
    .post('/marp-to-markdown', {
      content: markdown,
    })
    .then((response) => response.data.content)
    .catch((error) => console.log(error));
};
