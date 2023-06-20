import { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

const Modal: FC<Props> = ({ children }) => {
  return (
    <div className='h-screen w-screen bg-background fixed top-0 left-0 z-50 bg-opacity-60'>
      <div className='h-full w-full flex justify-center items-center'>{children}</div>
    </div>
  );
};

export default Modal;
