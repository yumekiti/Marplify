import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { viewSlice } from '../../features/view';

import IconButtonWithTooltip from '../atoms/IconButtonWithTooltip';
import Card from '../templates/Card';

import editIcon from '../../assets/elements/Tool/editIcon.svg';
import bothIcon from '../../assets/elements/Tool/bothIcon.svg';
import viewIcon from '../../assets/elements/Tool/viewIcon.svg';

const Component: FC = () => {
  const dispatch = useDispatch();

  return (
    <Card>
      <div className='flex justify-between items-center gap-6 relative py-1'>
        <IconButtonWithTooltip
          icon={editIcon}
          text='Edit'
          onClick={() => dispatch(viewSlice.actions.setMode('edit'))}
        />
        <IconButtonWithTooltip
          icon={bothIcon}
          text='Edit & Preview'
          onClick={() => dispatch(viewSlice.actions.setMode('both'))}
        />
        <IconButtonWithTooltip
          icon={viewIcon}
          text='Preview'
          onClick={() => dispatch(viewSlice.actions.setMode('view'))}
        />
      </div>
    </Card>
  );
};

export default Component;
