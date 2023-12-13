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
  let result = `----------\nmarp: true\npaginate: true\nsize: 16:9\ntheme: default\n----------\n`;
  let isFirst = true;
  let current = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let appendString = '';

    if (!isFirst) {
      appendString = `------------------------------------------------------------\n`;
    }

    if (line.startsWith('# ')) {
      result += `${appendString}\n`;
      result += `<!-----\n_class: headline\n----->\n\n`;
      current = line.substring(2);
    } else if (line.startsWith('## ')) {
      result += `${appendString}\n`;
      result += `<!-----\n_class: headline\n----->\n\n`;
      current = line.substring(3);
    } else if (line.startsWith('### ')) {
      result += `${appendString}\n`;
      result += `<!-----\n_class: general\n_header: ${current}\n----->\n\n`;
    } else if (line.startsWith('![')) {
      result += `${appendString}\n`;
    }

    isFirst = false;
    result += line + '\n';

    if (line.startsWith('![')) {
      result += `\n${appendString}`;
    }
  }

  return result;
};

export const marpToMarkdown = (marpContent: string): string => {
  let markdown = marpContent;

  // Remove Marp metadata
  markdown = markdown.replace(/----------[\s\S]*?----------/, '');

  // Remove HTML comments
  markdown = markdown.replace(/<!-----[\s\S]*?----->/g, '');

  // Remove horizontal rules
  markdown = markdown.replace(/^-{60,}\s*$/gm, '');

  // Trim extra spaces and lines
  markdown = markdown.trim();

  // Ensure empty lines between paragraphs
  markdown = markdown.replace(/\n{2,}/g, '\n\n');

  return markdown;
};
