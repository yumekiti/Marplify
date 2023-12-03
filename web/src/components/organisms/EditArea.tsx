import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/24/solid';

import { RootState } from '../../store';
import { contentSlice } from '../../features/content';
import { isMarpSlide, markdownToMarp, marpToMarkdown } from '../../libs/markdown';

import HighlightedIconButton from '../atoms/HighlightedIconButton';
import Loading from '../atoms/Loading';
import Editor from '../molecules/Editor';

const Component: FC = () => {
  const dispatch = useDispatch();
  const { content } = useSelector((state: RootState) => state.content);

  const handleConvert = () => {
    if (!content) return;

    if (isMarpSlide(content)) {
      const markdown = marpToMarkdown(content);
      dispatch(contentSlice.actions.setContent(markdown));
    } else {
      const marp = markdownToMarp(content);
      dispatch(contentSlice.actions.setContent(marp));
    }
  };

  return (
    <div className='w-full relative'>
      {false && <Loading />}
      <Editor />
      <div className='absolute bottom-20 right-40 rounded-b-lg'>
        <div className='fixed'>
          <HighlightedIconButton Icon={ArrowPathRoundedSquareIcon} text='Convert' onClick={handleConvert} tertiary />
        </div>
      </div>
    </div>
  );
};

export default Component;
