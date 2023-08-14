import { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
