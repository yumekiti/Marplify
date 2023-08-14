import { FC } from 'react';

import HighlightedIconButton from '../atoms/HighlightedIconButton';

import Background from '../../assets/Background.png';
import Icon from '../../assets/Icon';
import ShareIcon from '../../assets/elements/ShareIcon';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='App h-screen w-full flex flex-col'>
      <img
        className='absolute buttom-0 left-0 right-0 h-full w-full object-cover -z-10'
        src={Background}
        alt='background'
      />
      {false && (
        <div className='h-screen w-screen bg-background fixed top-0 left-0 z-50 bg-opacity-60'>
          <div className='h-full w-full flex justify-center items-center'>
            <div className='h-4/6 flex justify-center items-center w-10/12 lg:w-4/12 md:w-6/12'>
              <div className='h-full w-full bg-cardBackground rounded-lg px-4 py-2 flex flex-col'>
                <div className='h-1/4 flex justify-between items-start'>
                  <div className='flex justify-start items-center gap-2 m-2'>
                    {/* <img src={ModalShareIcon} alt='share' className='text-icons-stroke w-8 h-8' /> */}
                    <h1 className='text-headline text-2xl font-bold'>Share</h1>
                  </div>
                  <button className='text-icons-main rounded-md' onClick={() => console.log('close')}>
                    {/* <img src={ExitIcon} alt='exit' className='text-headline h-10 w-10 m-2' /> */}
                  </button>
                </div>
                <div className='h-3/4'>
                  <div className='flex flex-col justify-center items-center'>
                    {/* <QRCode value={url} size={300} /> */}
                    <div className='w-10/12 mt-16 border rounded-md flex justify-between items-center'>
                      <input className='rounded-l-md px-4 py-2 w-full' defaultValue={'url'} />
                      <button
                        className='bg-icons-highlight text-icons-main rounded-r-md px-4 py-2 hover:opacity-80'
                        // onClick={handleCopy}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  {/* {copied && (
                    <div className='flex justify-center items-center mt-4'>
                      <p className='text-icons-tertiary'>Copied!</p>
                    </div> 
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <header className='bg-cardBackground'>
        <div className='container mx-auto px-4 py-2'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center ml-2'>
              <Icon />
              <p className='text-xl font-bold ml-2 tracking-widest'>Marplify</p>
            </div>
            <HighlightedIconButton Icon={ShareIcon} text='Share' onClick={() => console.log('share')} />
          </div>
        </div>
      </header>
      <main className='flex-grow'>{children}</main>
    </div>
  );
};

export default Layout;
