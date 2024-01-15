import { FC } from 'react';

import icon from '../../assets/icon.svg';

const Component: FC = () => {
  return (
    <header className='bg-cardBackground'>
      <div className='container mx-auto px-4 py-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center ml-2'>
            <img src={icon} alt='icon' className='w-10' />
            <p className='text-xl font-bold ml-2 tracking-widest'>Marplify</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Component;
