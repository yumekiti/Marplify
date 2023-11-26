import { FC } from 'react';

type Props = {
  sidebar: boolean;
};

const Component: FC<Props> = ({ sidebar }) => {
  return (
    <div className={`mb-4 flex gap-4 items-center border-b border-gray-300 pb-4 ${!sidebar && 'justify-center'}`}>
      <img className='w-12 h-12 rounded-full' src='https://picsum.photos/300/300' alt='user' />
      {sidebar && (
        <div className='flex flex-col'>
          <p className='text-lg font-semibold'>John Doe</p>
          <p className='text-sm text-gray-500'>@johndoe</p>
        </div>
      )}
    </div>
  );
};

export default Component;
