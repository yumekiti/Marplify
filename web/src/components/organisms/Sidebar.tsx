import Navigation from '../molecules/Navigation';
import UserPanel from '../molecules/UserPanel';

const Component = () => {
  return (
    <div className='bg-cardBackground w-1/6 p-4 h-full border-r border-subheadline'>
      <UserPanel />
      <Navigation />
    </div>
  );
};

export default Component;
