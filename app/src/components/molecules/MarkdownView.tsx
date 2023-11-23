import React, { FC, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkEmoji from 'remark-emoji';
import markdownStyle from '../../styles/markdown.module.css';
import mermaid from 'mermaid';

type Props = {
  content: string;
};

const Component: FC<Props> = ({ content }) => {
  useEffect(() => {
    const runMermaid = async () => {
      try {
        await mermaid.run({
          querySelector: 'code.language-mermaid',
        });
      } catch (error) {
        console.error('Error running mermaid:', error);
      }
    };

    runMermaid();
  }, [content]);

  return (
    <ReactMarkdown
      className={markdownStyle.markdown}
      remarkPlugins={[remarkGfm, remarkEmoji]}
      rehypePlugins={[rehypeRaw]}
    >
      {content}
    </ReactMarkdown>
  );
};

export default Component;
