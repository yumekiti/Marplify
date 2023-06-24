import { FC, useState } from 'react';

import Background from '../../assets/background.svg';

import Header from '../organisms/Header';
import Share from '../organisms/Share';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const [share, setShare] = useState<boolean>(false);

  const handleShareClick = () => {
    setShare(true);
  };

  return (
    <>
      <img
        src={Background}
        alt='background'
        className='absolute buttom-0 left-0 right-0 h-full w-full object-cover -z-10'
      />
      {share && <Share url={window.location.href + '/presentation'} setShare={setShare} />}
      <Header handleShareClick={handleShareClick} />
      <div className='h-full pt-24 container mx-auto px-4'>{children}</div>
    </>
  );
};

export default Layout;
