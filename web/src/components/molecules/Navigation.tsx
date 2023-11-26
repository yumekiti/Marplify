import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { viewSlice } from '../../features/view';

import plusIcon from '../../assets/elements/Tool/plusIcon.svg';
import loginIcon from '../../assets/elements/Tool/loginIcon.svg';

type Props = {
  sidebar: boolean;
};

const Component: FC<Props> = ({ sidebar }) => {
  const dispatch = useDispatch();

  const handleLoginButton = () => {
    dispatch(viewSlice.actions.toggleLoginModal());
  };

  return (
    <>
      <div className='mb-2'>
        <button
          // onClick={handleCreate}
          className={`w-full flex items-center py-2 px-4 bg-icons-highlight hover:bg-icons-secondary text-white rounded focus:outline-none gap-2 ${
            !sidebar && 'justify-center'
          }`}
        >
          <img src={plusIcon} alt='plus' className='object-cover w-5 h-5' />
          <p className={`text-sm font-bold ${!sidebar && 'hidden'}`}>保存</p>
        </button>
      </div>
      <ul className='mb-2 h-full list-none overflow-y-scroll'>
        {sidebar &&
          [...Array(30)].map((_, index) => (
            <li className='mb-2' key={index}>
              <button className='flex items-center py-1 w-full rounded group hover:bg-headline hover:bg-opacity-30 justify-start'>
                <p className={`px-2 whitespace-nowrap group-hover:underline ${true && 'font-bold'}`}>hoge</p>
              </button>
            </li>
          ))}
      </ul>
      <button
        onClick={handleLoginButton}
        className={`w-full flex items-center py-2 px-4 bg-icons-tertiary hover:bg-icons-secondary text-white rounded focus:outline-none gap-2 ${
          !sidebar && 'justify-center'
        }`}
      >
        <img src={loginIcon} alt='login' className='object-cover w-5 h-5' />
        <p className={`text-sm font-bold ${!sidebar && 'hidden'}`}>ログイン</p>
      </button>
    </>
  );
};

export default Component;
