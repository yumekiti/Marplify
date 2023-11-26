import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import Navigation from '../molecules/Navigation';
import UserPanel from '../molecules/UserPanel';
import SidebarToggle from '../molecules/SidebarToggle';

const Component = () => {
  const { sidebar } = useSelector((state: RootState) => state.view);

  return (
    <div className={`bg-cardBackground py-4 px-2 h-full border-r border-subheadline relative ${sidebar && 'w-1/6'}`}>
      <UserPanel sidebar={sidebar} />
      <Navigation sidebar={sidebar} />
      <SidebarToggle sidebar={sidebar} />
    </div>
  );
};

export default Component;
