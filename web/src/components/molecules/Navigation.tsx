import React from 'react';
import plusIcon from '../../assets/elements/Tool/plusIcon.svg';

const Component = () => {
  return (
    <nav>
      <ul className='list-none'>
        {/* 作成 */}
        <li className='mb-2'>
          <button
            // onClick={handleCreate}
            className='w-full flex items-center py-2 px-4 bg-icons-highlight hover:bg-icons-secondary text-white rounded focus:outline-none'
          >
            <img src={plusIcon} alt='plus' className='w-4 h-4 mr-2 object-contain' />
            作成
          </button>
        </li>
        <li className='mb-2'>
          <button className='flex items-center py-1 w-full rounded group hover:bg-headline hover:bg-opacity-30 justify-start'>
            <p className={`px-2 whitespace-nowrap group-hover:underline ${true && 'font-bold'}`}>hoge</p>
          </button>
        </li>
        <li className='mb-2'>
          <button className='flex items-center py-1 w-full rounded group hover:bg-headline hover:bg-opacity-30 justify-start'>
            <p className={`px-2 whitespace-nowrap group-hover:underline ${true && 'font-bold'}`}>hoge</p>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Component;
