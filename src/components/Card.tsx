import { ReactNode, FC } from 'react';

type Props = {
  children: ReactNode;
};

const Card: FC<Props> = ({ children }) => {
  return <div className='h-full bg-cardBackground rounded-lg px-4 py-2'>{children}</div>;
};

export default Card;
