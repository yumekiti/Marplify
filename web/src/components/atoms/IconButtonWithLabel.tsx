import { FC } from 'react';

type Props = {
  text: string;
  Icon: FC;
  onClick?: () => void;
  tertiary?: boolean;
};

const Component: FC<Props> = ({ text, Icon, onClick, tertiary = false }) => (
  <button onClick={onClick}>
    <div
      className={`h-16 w-20 flex flex-col justify-center items-center hover:opacity-60 ${
        tertiary ? 'text-icons-tertiary' : 'text-icons-highlight'
      }`}
    >
      <Icon />
      <p className='h-1/2 mt-1 text-sm font-semibold'>{text}</p>
    </div>
  </button>
);

export default Component;
