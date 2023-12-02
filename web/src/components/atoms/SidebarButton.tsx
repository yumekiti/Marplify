import { FC } from 'react';

type Props = {
  sidebar: boolean;
  highlight?: boolean;
  text: string;
  icon: string;
  onClick: () => void;
};

const Component: FC<Props> = ({ sidebar, highlight, text, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`overflow-hidden whitespace-nowrap w-full flex items-center py-2 px-4 bg-icons-highlight hover:bg-icons-secondary text-white rounded focus:outline-none gap-2
        ${!sidebar && 'justify-center'}
        ${highlight ? 'bg-icons-highlight' : 'bg-icons-tertiary'}
      `}
    >
      <img src={icon} alt='plus' className='object-cover w-5 h-5' />
      <p className={`text-sm font-bold ${!sidebar && 'hidden'}`}>{text}</p>
    </button>
  );
};

export default Component;
