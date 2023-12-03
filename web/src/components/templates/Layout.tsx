import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';

import Header from '../organisms/Header';
import Sidebar from '../organisms/Sidebar';
import Login from '../organisms/Login';
import Register from '../organisms/Register';

import background from '../../assets/background.png';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const { loginModal, registerModal } = useSelector((state: RootState) => state.view);

  return (
    <div className='App h-screen w-full flex flex-col'>
      <img
        className='absolute buttom-0 left-0 right-0 h-full w-full object-cover -z-10'
        src={background}
        alt='background'
      />
      <div className='flex flex-grow overflow-y-auto'>
        <Sidebar />
        <div className='flex flex-col w-full'>
          <Header />
          <main className='flex-grow overflow-y-auto'>{children}</main>
        </div>
      </div>
      {!registerModal && loginModal && <Login />}
      {registerModal && <Register />}
    </div>
  );
};

export default Layout;
