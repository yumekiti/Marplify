import { FC, ReactNode } from 'react';

import background from '../../assets/background.png';

import Header from '../organisms/Header';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='App h-screen w-full flex flex-col'>
      <img
        className='absolute buttom-0 left-0 right-0 h-full w-full object-cover -z-10'
        src={background}
        alt='background'
      />
      <div className='flex flex-grow overflow-y-auto'>
        <div className='flex flex-col w-full'>
          <Header />
          <main className='flex-grow overflow-y-auto'>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
