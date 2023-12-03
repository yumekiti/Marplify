import { FC } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';

type Props = {
  username?: string;
  email?: string;
  sidebar: boolean;
};

const Component: FC<Props> = ({ sidebar, username, email }) => {
  return (
    <div className={`mb-4 flex gap-4 items-center border-b border-gray-300 pb-4 ${!sidebar && 'justify-center'}`}>
      <UserCircleIcon className='w-12 h-12 rounded-full' />
      {sidebar && (
        <div className='flex flex-col overflow-hidden whitespace-nowrap'>
          <p className='text-lg font-semibold'>{username}</p>
          <p className='text-sm text-gray-500'>{email}</p>
        </div>
      )}
    </div>
  );
};

export default Component;
