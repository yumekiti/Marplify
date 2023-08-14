export const isMarp = (markdown: string): boolean => {
  const marpPattern = /^\s*---\s*\n\s*marp:\s*(?:true|1)\s*\n/m;
  return marpPattern.test(markdown);
};
