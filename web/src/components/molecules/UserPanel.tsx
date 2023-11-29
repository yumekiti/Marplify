import { FC } from 'react';

import accountIcon from '../../assets/elements/Tool/accountIcon.svg';

type Props = {
  sidebar: boolean;
};

const Component: FC<Props> = ({ sidebar }) => {
  return (
    <div className={`mb-4 flex gap-4 items-center border-b border-gray-300 pb-4 ${!sidebar && 'justify-center'}`}>
      <img className='w-12 h-12 rounded-full' src={accountIcon} alt='user' />
      {sidebar && (
        <div className='flex flex-col overflow-hidden whitespace-nowrap'>
          <p className='text-lg font-semibold'>Guest</p>
          <p className='text-sm text-gray-500'>@guest</p>
        </div>
      )}
    </div>
  );
};

export default Component;
