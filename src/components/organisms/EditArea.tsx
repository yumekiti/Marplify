import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MDEditor, { commands } from '@uiw/react-md-editor';

import { contentSlice } from '../../features/content';
import { RootState } from '../../store';
import { exampleText } from '../../constants/examples';

import CopyIcon from '../../assets/elements/EditArea/CopyIcon';
import HelpIcon from '../../assets/elements/EditArea/HelpIcon';

import HighlightedIconButton from '../atoms/HighlightedIconButton';
import Loading from '../atoms/Loading';
// import CopyAndHelp from '../molecules/CopyAndHelp';

import ConvertIcon from '../../assets/elements/EditArea/ConvertIcon';

const Component: FC = () => {
  const dispatch = useDispatch();
  const { content } = useSelector((state: RootState) => state.content);

  return (
    <div className='w-full relative'>
      {false && <Loading />}
      {/* <textarea
        className='w-full h-full pt-4 pl-6 rounded-lg text-headline'
        placeholder=''
        defaultValue={content}
        onChange={(e) => dispatch(contentSlice.actions.setContent(e.target.value))}
      ></textarea> */}
      <MDEditor
        className='w-full rounded-lg text-headline bg-cardBackground'
        value={content}
        onChange={(value) => dispatch(contentSlice.actions.setContent(value || ''))}
        preview='edit'
        height={'100%'}
        commands={[
          commands.title1,
          commands.title2,
          commands.title3,
          commands.bold,
          commands.italic,
          commands.strikethrough,
          commands.hr,
          commands.divider,
          commands.link,
          commands.quote,
          commands.code,
          commands.codeBlock,
          commands.comment,
          commands.image,
          commands.divider,
          commands.unorderedListCommand,
          commands.orderedListCommand,
          commands.checkedListCommand,
          {
            name: 'copy',
            keyCommand: 'copy',
            buttonProps: { 'aria-label': 'Copy', title: 'Copy' },
            icon: <CopyIcon />,
            execute: (state, api) => {
              navigator.clipboard.writeText(content);
            },
          },
          {
            name: 'help',
            keyCommand: 'help',
            buttonProps: { 'aria-label': 'Help', title: 'Help' },
            icon: <HelpIcon />,
            execute: (state, api) => {
              dispatch(contentSlice.actions.setContent(exampleText));
            },
          },
        ]}
      />
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
