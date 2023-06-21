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

export const exportMarkdown = (markdown: string, exportFormat: string): Promise<string> => {
  return fetchInstance()
    .post('/api/v1/md_export', {
      raw_body: markdown,
      format: exportFormat,
    })
    .then((response) => response.data.raw_body)
    .catch((error) => console.log(error));
};

export const exportMarp = (markdown: string, exportFormat: string): Promise<string> => {
  return fetchInstance()
    .post('/api/v1/marp_export', {
      raw_body: markdown,
      format: exportFormat,
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const selectTheme = (theme: string): Promise<string> => {
  return fetchInstance()
    .post('/api/v1/marp_export', {
      theme: theme,
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
