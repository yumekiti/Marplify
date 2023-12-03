import { FC } from 'react';

type Props = {
  text: string;
  Icon: React.ElementType;
  onClick?: () => void;
  tertiary?: boolean;
};

const Component: FC<Props> = ({ text, Icon, onClick, tertiary = false }) => (
  <button
    onClick={onClick}
    className={`active:scale-90 duration-100 text-icons-main rounded-md shadow-md ${
      tertiary ? 'bg-icons-tertiary' : 'bg-icons-highlight'
    }`}
  >
    <div className='flex gap-1 px-4 py-2 items-center hover:opacity-80 text-base tracking-wider'>
      <Icon className='w-6 h-6' />
      {text}
    </div>
  </button>
);

export default Component;
