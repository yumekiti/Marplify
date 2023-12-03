import { FC } from 'react';

type Props = {
  sidebar: boolean;
  highlight?: boolean;
  text: string;
  Icon: React.ElementType;
  onClick: () => void;
};

const Component: FC<Props> = ({ sidebar, highlight, text, Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`overflow-hidden whitespace-nowrap w-full flex items-center py-2 px-4 bg-icons-highlight hover:bg-icons-secondary text-white rounded focus:outline-none gap-2
        ${!sidebar && 'justify-center'}
        ${highlight ? 'bg-icons-highlight' : 'bg-icons-tertiary'}
      `}
    >
      <Icon className='w-6 h-6' />
      <p className={`text-sm font-bold ${!sidebar && 'hidden'}`}>{text}</p>
    </button>
  );
};

export default Component;
