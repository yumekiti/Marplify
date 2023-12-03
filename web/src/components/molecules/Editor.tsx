import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MDEditor, { commands } from '@uiw/react-md-editor';
import { DocumentDuplicateIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';

import { RootState } from '../../store';
import { contentSlice } from '../../features/content';
import { placeholder, exampleText } from '../../constants/examples';

const Component: FC = () => {
  const dispatch = useDispatch();
  const { content } = useSelector((state: RootState) => state.content);

  return (
    <MDEditor
      className='w-full rounded-lg text-headline bg-cardBackground'
      value={content}
      onChange={(value) => dispatch(contentSlice.actions.setContent(value || ''))}
      preview='edit'
      height={'100%'}
      textareaProps={{
        placeholder: placeholder,
      }}
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
          icon: <DocumentDuplicateIcon className='w-3' />,
          execute: () => {
            navigator.clipboard.writeText(content);
          },
        },
        {
          name: 'help',
          keyCommand: 'help',
          buttonProps: { 'aria-label': 'Help', title: 'Help' },
          icon: <QuestionMarkCircleIcon className='w-3' />,
          execute: () => {
            dispatch(contentSlice.actions.setContent(exampleText));
          },
        },
      ]}
    />
  );
};

export default Component;
