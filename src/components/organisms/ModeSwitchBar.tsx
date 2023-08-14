import React, { FC } from 'react';

import IconButtonWithTooltip from '../atoms/IconButtonWithTooltip';
import Card from '../templates/Card';

import EditIcon from '../../assets/elements/Tool/EditIcon';
import BothIcon from '../../assets/elements/Tool/BothIcon';
import ViewIcon from '../../assets/elements/Tool/ViewIcon';

const Component: FC = () => {
  return (
    <Card>
      <div className='flex justify-between items-center gap-6 relative py-1'>
        <IconButtonWithTooltip Icon={EditIcon} text='Edit' onClick={() => console.log('edit')} />
        <IconButtonWithTooltip Icon={BothIcon} text='Edit & Preview' onClick={() => console.log('edit & preview')} />
        <IconButtonWithTooltip Icon={ViewIcon} text='Preview' onClick={() => console.log('preview')} />
      </div>
    </Card>
  );
};

export default Component;
