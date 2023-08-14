import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { contentSlice } from '../../features/content';
import { RootState } from '../../store';

import HighlightedIconButton from '../atoms/HighlightedIconButton';
import Loading from '../atoms/Loading';
import CopyAndHelp from '../molecules/CopyAndHelp';
import Card from '../templates/Card';

import ConvertIcon from '../../assets/elements/EditArea/ConvertIcon';

const Component: FC = () => {
  const dispatch = useDispatch();
  const { content } = useSelector((state: RootState) => state.content);

  return (
    <Card>
      {false && <Loading />}
      <textarea
        className='w-full h-full pt-4 pl-6 rounded-lg resize-none outline-none text-headline'
        placeholder=''
        defaultValue={content}
        onChange={(e) => dispatch(contentSlice.actions.setContent(e.target.value))}
      ></textarea>
      <div className='absolute top-4 right-24 rounded-b-lg'>
        <CopyAndHelp />
      </div>
      <div className='absolute bottom-20 right-40 rounded-b-lg'>
        <div className='fixed'>
          <HighlightedIconButton Icon={ConvertIcon} text='Convert' onClick={() => console.log('convert')} tertiary />
        </div>
      </div>
    </Card>
  );
};

export default Component;
