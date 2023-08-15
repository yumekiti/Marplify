export const isMarpSlide = (markdown: string): boolean => {
  const lines = markdown.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim() === 'marp: true') {
      return true;
    }
  }
  return false;
};

export const markdownToMarp = (markdown: string): string => {
  const lines = markdown.split('\n');
  let result = `---\nmarp: true\npaginate: true\nsize: 16:9\ntheme: default\n---\n\n`;
  let isFirstHeader = true;
  let currentH1 = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('# ')) {
      if (!isFirstHeader) {
        result += `---\n\n`;
      }
      result += `<!--\n_class: headline\n-->\n\n`;
      isFirstHeader = false;
      currentH1 = line.substring(2);
    } else if (line.startsWith('## ')) {
      result += `---\n\n<!--\n_class: general\n_header: ${currentH1}\n-->\n\n`;
    }
    result += line + '\n';
  }

  return result;
};

export const marpToMarkdown = (marpContent: string): string => {
  let markdown = marpContent;

  // Remove Marp metadata
  markdown = markdown.replace(/---[\s\S]*?---/, '');

  // Remove HTML comments
  markdown = markdown.replace(/<!--[\s\S]*?-->/g, '');

  // Remove horizontal rules
  markdown = markdown.replace(/^-{3,}\s*$/gm, '');

  // Trim extra spaces and lines
  markdown = markdown.trim();

  // Ensure empty lines between paragraphs
  markdown = markdown.replace(/\n{2,}/g, '\n\n');

  return markdown;
};
