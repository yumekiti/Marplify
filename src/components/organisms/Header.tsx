import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { viewSlice } from '../../features/view';

import HighlightedIconButton from '../atoms/HighlightedIconButton';

import Icon from '../../assets/Icon';
import ShareIcon from '../../assets/elements/ShareIcon';

const Component: FC = () => {
  const dispatch = useDispatch();

  return (
    <header className='bg-cardBackground'>
      <div className='container mx-auto px-4 py-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center ml-2'>
            <Icon />
            <p className='text-xl font-bold ml-2 tracking-widest'>Marplify</p>
          </div>
          <HighlightedIconButton
            Icon={ShareIcon}
            text='Share'
            onClick={() => dispatch(viewSlice.actions.toggleModal())}
          />
        </div>
      </div>
    </header>
  );
};

export default Component;
