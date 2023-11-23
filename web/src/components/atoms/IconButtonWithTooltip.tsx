import { FC } from 'react';

type Props = {
  text: string;
  icon: string;
  onClick?: () => void;
  opacity?: boolean;
};

const Component: FC<Props> = ({ text, icon, onClick, opacity = true }) => (
  <button onClick={onClick} className='active:scale-75 duration-100'>
    <div className={`flex flex-col items-center group ${opacity ? '' : 'opacity-70'}`}>
      <img src={icon} alt='icon' className='w-8' />
      <p className='whitespace-nowrap absolute -bottom-6 z-20 bg-icons-highlight text-icons-main rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300'>
        {text}
      </p>
    </div>
  </button>
);

export default Component;