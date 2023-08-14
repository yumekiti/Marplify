import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { viewSlice } from '../../features/view';

import HighlightedIconButton from '../atoms/HighlightedIconButton';
import Share from '../organisms/Share';

import Background from '../../assets/Background.png';
import Icon from '../../assets/Icon';
import ShareIcon from '../../assets/elements/ShareIcon';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state: RootState) => state.view);

  return (
    <div className='App h-screen w-full flex flex-col'>
      <img
        className='absolute buttom-0 left-0 right-0 h-full w-full object-cover -z-10'
        src={Background}
        alt='background'
      />
      {modal && <Share />}
      <header className='bg-cardBackground'>
        <div className='container mx-auto px-4 py-2'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center ml-2'>
              <Icon />
              <p className='text-xl font-bold ml-2 tracking-widest'>Marplify</p>
            </div>
            <HighlightedIconButton
              Icon={ShareIcon}
              text='Share'
              onClick={() => dispatch(viewSlice.actions.toggleModal())}
            />
          </div>
        </div>
      </header>
      <main className='flex-grow'>{children}</main>
    </div>
  );
};

export default Layout;
