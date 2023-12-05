import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';

import { viewSlice } from '../../features/view';

import SidebarButton from '../atoms/SidebarButton';
import SidebarControlPanel from '../molecules/SidebarControlPanel';

type Props = {
  sidebar: boolean;
  isLogin: boolean;
};

const Component: FC<Props> = ({ sidebar, isLogin }) => {
  const dispatch = useDispatch();

  const handleLoginButton = () => {
    dispatch(viewSlice.actions.toggleLoginModal());
  };

  return (
    <>
      {isLogin ? (
        <SidebarControlPanel sidebar={sidebar} />
      ) : (
        <>
          <div className='h-full'>
            {sidebar && <p className='text-sm text-gray-500'>ログインするとデータ追加や編集ができるようになります</p>}
          </div>
          <SidebarButton
            sidebar={sidebar}
            onClick={handleLoginButton}
            text='ログイン'
            Icon={ArrowRightOnRectangleIcon}
            tertiary
          />
        </>
      )}
    </>
  );
};

export default Component;
