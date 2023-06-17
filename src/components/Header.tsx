import Icon from '../assets/icon.svg';
import { BsShareFill } from 'react-icons/bs';

const Header = () => {
  return (
    <header className='bg-cardBackground absolute top-0 left-0 right-0'>
      <div className='container mx-auto px-6 py-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <img src={Icon} alt='logo' className='w-10 h-10' />
            <span className='text-xl font-bold ml-2 tracking-widest'>Marplify</span>
          </div>
          <button className='flex gap-2 bg-icons-highlight px-4 py-2 rounded-md text-icons-main items-center hover:opacity-80 shadow-md text-sm tracking-wider'>
            <BsShareFill className='text-icons-main' />
            Share
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
