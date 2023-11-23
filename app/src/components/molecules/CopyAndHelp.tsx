import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { contentSlice } from '../../features/content';

import { exampleText } from '../../constants/examples';

import IconButtonWithTooltip from '../atoms/IconButtonWithTooltip';

import CopyIcon from '../../assets/elements/EditArea/CopyIcon';
import HelpIcon from '../../assets/elements/EditArea/HelpIcon';

const Component: FC = () => {
  const dispatch = useDispatch();
  const { content } = useSelector((state: RootState) => state.content);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
  };

  const handleHelp = () => {
    dispatch(contentSlice.actions.setContent(exampleText));
  };

  return (
    <div className='flex fixed gap-4'>
      <IconButtonWithTooltip Icon={CopyIcon} text='Copy' onClick={handleCopy} />
      <IconButtonWithTooltip Icon={HelpIcon} text='Help' onClick={handleHelp} />
    </div>
  );
};

export default Component;
