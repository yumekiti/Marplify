import { FC } from 'react';

type Props = {
  text: string;
  icon: string;
  onClick?: () => void;
  tertiary?: boolean;
};

const Component: FC<Props> = ({ text, icon, onClick, tertiary = false }) => (
  <button onClick={onClick}>
    <div
      className={`h-16 w-20 flex flex-col justify-center items-center hover:opacity-60 ${
        tertiary ? 'text-icons-tertiary' : 'text-icons-highlight'
      }`}
    >
      <img src={icon} alt='icon' className='w-10' />
      <p className='h-1/2 mt-1 text-sm font-semibold'>{text}</p>
    </div>
  </button>
);

export default Component;
