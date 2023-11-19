import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkEmoji from 'remark-emoji';
import markdownStyle from '../../styles/markdown.module.css';
import { RootState } from '../../store';
import { isMarpSlide } from '../../libs/markdown';
import Presentation from '../molecules/Presentation';
import SetStyle from '../molecules/SetStyle';

const Component: FC = () => {
  const { content, theme } = useSelector((state: RootState) => state.content);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.run({ querySelector: '.language-mermaid' });
  }, [content]);

  return (
    <div className='w-full relative bg-cardBackground overflow-y-scroll h-full bg-cardBackground rounded-lg px-4 py-2 shadow-md'>
      <div className='markdown-body'>
        {isMarpSlide(content) ? (
          <Presentation content={content} style={theme} />
        ) : (
          <ReactMarkdown
            className={markdownStyle.markdown}
            remarkPlugins={[remarkGfm, remarkEmoji]}
            rehypePlugins={[rehypeRaw]}
          >
            {content}
          </ReactMarkdown>
        )}
      </div>
      <SetStyle />
    </div>
  );
};

export default Component;
