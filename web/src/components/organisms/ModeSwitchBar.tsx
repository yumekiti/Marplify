import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { viewSlice } from '../../features/view';

import IconButtonWithTooltip from '../atoms/IconButtonWithTooltip';
import Card from '../templates/Card';

import EditIcon from '../../assets/elements/Tool/EditIcon';
import BothIcon from '../../assets/elements/Tool/BothIcon';
import ViewIcon from '../../assets/elements/Tool/ViewIcon';

const Component: FC = () => {
  const dispatch = useDispatch();

  return (
    <Card>
      <div className='flex justify-between items-center gap-6 relative py-1'>
        <IconButtonWithTooltip
          Icon={EditIcon}
          text='Edit'
          onClick={() => dispatch(viewSlice.actions.setMode('edit'))}
        />
        <IconButtonWithTooltip
          Icon={BothIcon}
          text='Edit & Preview'
          onClick={() => dispatch(viewSlice.actions.setMode('both'))}
        />
        <IconButtonWithTooltip
          Icon={ViewIcon}
          text='Preview'
          onClick={() => dispatch(viewSlice.actions.setMode('view'))}
        />
      </div>
    </Card>
  );
};

export default Component;
