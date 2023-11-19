import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import Share from '../organisms/Share';
import Header from '../organisms/Header';

import Background from '../../assets/Background.png';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const { modal } = useSelector((state: RootState) => state.view);

  return (
    <div className='App h-screen w-full flex flex-col'>
      <img
        className='absolute buttom-0 left-0 right-0 h-full w-full object-cover -z-10'
        src={Background}
        alt='background'
      />
      {modal && <Share />}
      <Header />
      <main className='flex-grow overflow-y-auto'>{children}</main>
    </div>
  );
};

export default Layout;
