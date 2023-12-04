import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { XMarkIcon } from '@heroicons/react/24/solid';

import { viewSlice } from '../../features/view';

type Props = {
  text: string;
  children: React.ReactNode;
};

const Component: FC<Props> = ({ text, children }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(viewSlice.actions.resetModal());
  };

  return (
    <div className='fixed inset-0 bg-background bg-opacity-60 flex justify-center items-center z-30'>
      <div className='absolute inset-0 flex justify-center items-center z-40' onClick={handleClick}>
        <div className='w-full h-full'></div>
      </div>
      <div className='z-50 flex justify-center items-center w-10/12 lg:w-4/12 md:w-6/12'>
        <div className='h-full w-full bg-cardBackground rounded-lg px-4 py-2 flex flex-col'>
          <div className='flex justify-between items-start'>
            <div className='flex justify-start items-center gap-2 m-2'>
              <h1 className='text-headline text-2xl font-bold'>{text}</h1>
            </div>
            <button className='p-2 rounded-md' onClick={handleClick}>
              <XMarkIcon className='w-6' />
            </button>
          </div>
          <div className='py-0 md:py-24 h-full flex flex-col justify-center items-center'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Component;
