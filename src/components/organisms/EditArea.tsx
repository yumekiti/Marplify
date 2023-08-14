import React, { FC } from 'react';

import HighlightedIconButton from '../atoms/HighlightedIconButton';
import Loading from '../atoms/Loading';
// import CopyAndHelp from '../molecules/CopyAndHelp';
import MDEditor from '../molecules/MDEditor';

import ConvertIcon from '../../assets/elements/EditArea/ConvertIcon';

const Component: FC = () => {
  return (
    <div className='w-full relative'>
      {false && <Loading />}
      {/* <textarea
        className='w-full h-full pt-4 pl-6 rounded-lg text-headline'
        placeholder=''
        defaultValue={content}
        onChange={(e) => dispatch(contentSlice.actions.setContent(e.target.value))}
      ></textarea> */}
      <MDEditor />
      {/* <div className='absolute top-3 right-48 rounded-b-lg'>
        <CopyAndHelp />
      </div> */}
      <div className='absolute bottom-20 right-40 rounded-b-lg'>
        <div className='fixed'>
          <HighlightedIconButton Icon={ConvertIcon} text='Convert' onClick={() => console.log('convert')} tertiary />
        </div>
      </div>
    </div>
  );
};

export default Component;
