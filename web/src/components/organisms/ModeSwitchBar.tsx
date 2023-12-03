import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { PencilIcon, WindowIcon, EyeIcon } from '@heroicons/react/24/solid';

import { viewSlice } from '../../features/view';

import IconButtonWithTooltip from '../atoms/IconButtonWithTooltip';
import Card from '../templates/Card';

const Component: FC = () => {
  const dispatch = useDispatch();

  return (
    <Card>
      <div className='flex justify-between items-center gap-6 relative py-1'>
        <IconButtonWithTooltip
          Icon={PencilIcon}
          text='Edit'
          onClick={() => dispatch(viewSlice.actions.setMode('edit'))}
        />
        <IconButtonWithTooltip
          Icon={WindowIcon}
          text='Edit & Preview'
          onClick={() => dispatch(viewSlice.actions.setMode('both'))}
        />
        <IconButtonWithTooltip
          Icon={EyeIcon}
          text='Preview'
          onClick={() => dispatch(viewSlice.actions.setMode('view'))}
        />
      </div>
    </Card>
  );
};

export default Component;
