import React, { FC } from 'react';

import IconButtonWithTooltip from '../atoms/IconButtonWithTooltip';

import CopyIcon from '../../assets/elements/EditArea/CopyIcon';
import HelpIcon from '../../assets/elements/EditArea/HelpIcon';

const Component: FC = () => (
  <div className='flex fixed gap-4'>
    <IconButtonWithTooltip Icon={CopyIcon} text='Copy' onClick={() => console.log('edit')} />
    <IconButtonWithTooltip Icon={HelpIcon} text='Help' onClick={() => console.log('edit')} />
  </div>
);

export default Component;
