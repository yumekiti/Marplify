import Navigation from '../molecules/Navigation';
import UserPanel from '../molecules/UserPanel';

const Component = () => {
  return (
    <div className='bg-cardBackground w-1/6 p-4 h-full border-r border-subheadline relative'>
      <UserPanel />
      <Navigation />
      {/* 右側のボーダーの中央に閉じるボタンを配置 */}
      <div className='absolute -right-3 top-1/2 transform -translate-y-1/2'>
        <button className='text-subheadline'>閉じる</button>
      </div>
    </div>
  );
};

export default Component;
