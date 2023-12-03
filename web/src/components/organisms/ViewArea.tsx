import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';
import { isMarpSlide } from '../../libs/markdown';

import MarkdownView from '../molecules/MarkdownView';
import PresentationView from '../molecules/PresentationView';
import SetStyle from '../molecules/SetStyle';

const Component: FC = () => {
  const { content, theme } = useSelector((state: RootState) => state.content);

  return (
    <div className='w-full relative bg-cardBackground overflow-y-scroll h-full bg-cardBackground rounded-lg px-4 py-2 shadow-md'>
      <div className='markdown-body'>
        {isMarpSlide(content) ? (
          <PresentationView content={content} style={theme} />
        ) : (
          <MarkdownView content={content} />
        )}
      </div>
      <SetStyle />
    </div>
  );
};

export default Component;
