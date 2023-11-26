import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import Navigation from '../molecules/Navigation';
import UserPanel from '../molecules/UserPanel';
import SidebarToggle from '../molecules/SidebarToggle';

const Component = () => {
  const { sidebar } = useSelector((state: RootState) => state.view);

  return (
    <div
      className={`flex flex-col bg-cardBackground py-4 px-2 h-full border-r border-subheadline relative transition-all duration-200 ${
        sidebar ? 'w-1/6' : 'w-20'
      }`}
    >
      <UserPanel sidebar={sidebar} />
      <Navigation sidebar={sidebar} />
      <SidebarToggle sidebar={sidebar} />
    </div>
  );
};

export default Component;
