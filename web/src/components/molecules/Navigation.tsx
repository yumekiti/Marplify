import React from 'react';

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
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 mr-2' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M17 9h-6V3a1 1 0 00-2 0v6H3a1 1 0 000 2h6v6a1 1 0 102 0v-6h6a1 1 0 100-2z'
                clipRule='evenodd'
              />
            </svg>
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
