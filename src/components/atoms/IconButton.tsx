import { FC } from 'react';

type Props = {
  active: boolean;
  onClick?: () => void;
  icon: JSX.Element;
  hoverText: string;
};

const IconButton: FC<Props> = ({ active, onClick, icon, hoverText }) => {
  return (
    <button onClick={onClick} className={`flex items-center p-1 group rounded-full ${active ? '' : 'opacity-70'}`}>
      {icon}
      <span className='absolute -bottom-6 left-0 right-0 bg-icons-highlight text-icons-main rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300'>
        {hoverText}
      </span>
    </button>
  );
};

export default IconButton;
