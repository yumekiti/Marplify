import React, { FC } from 'react';

import IconButtonWithTooltip from '../atoms/IconButtonWithTooltip';
import HighlightedIconButton from '../atoms/HighlightedIconButton';
import Loading from '../atoms/Loading';
import CopyAndHelp from '../molecules/CopyAndHelp';
import Card from '../templates/Card';

import ConvertIcon from '../../assets/elements/EditArea/ConvertIcon';

const Component: FC = () => {
  return (
    <Card>
      {false && <Loading />}
      <textarea
        className='w-full h-full pt-4 pl-6 rounded-lg resize-none outline-none text-headline'
        placeholder=''
        value={'content'}
        // onChange={handleContentChange}
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
