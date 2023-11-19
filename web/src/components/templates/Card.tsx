import React, { ReactNode, FC } from 'react';

type Props = {
  children: ReactNode;
};

const Component: FC<Props> = ({ children }) => (
  <div className='h-full bg-cardBackground rounded-lg px-4 py-2 shadow-md'>{children}</div>
);

export default Component;
