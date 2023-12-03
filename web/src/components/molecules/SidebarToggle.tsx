import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { viewSlice } from '../../features/view';

import rightIcon from '../../assets/icons/rightIcon.svg';
import leftIcon from '../../assets/icons/leftIcon.svg';

type Props = {
  sidebar: boolean;
};

const Component: FC<Props> = ({ sidebar }) => {
  const dispatch = useDispatch();

  return sidebar ? (
    <div className='absolute -right-4 top-1/4 transform -translate-y-1/2'>
      <button
        className='bg-cardBackground rounded-full flex justify-center items-center p-2 border border-headline hover:bg-subheadline'
        onClick={() => dispatch(viewSlice.actions.toggleSidebar())}
      >
        <img src={leftIcon} alt='left' className='w-4 h-4 pr-0.5' />
      </button>
    </div>
  ) : (
    <div className='absolute -right-4 top-1/4 transform -translate-y-1/2'>
      <button
        className='bg-cardBackground rounded-full flex justify-center items-center p-2 border border-headline hover:bg-subheadline'
        onClick={() => dispatch(viewSlice.actions.toggleSidebar())}
      >
        <img src={rightIcon} alt='right' className='w-4 h-4 pl-0.5' />
      </button>
    </div>
  );
};

export default Component;
