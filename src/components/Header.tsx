import Icon from '../assets/icon.svg';

type HeaderPropsType = {};

const Header = (props: HeaderPropsType) => {
  return (
    <header className='bg-cardBackground absolute top-0 left-0 right-0'>
      <div className='container mx-auto px-6 py-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <img src={Icon} alt='logo' className='w-10 h-10' />
            <span className='text-xl font-bold ml-2 tracking-widest'>Mtmc</span>
          </div>
          <div>Share</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
