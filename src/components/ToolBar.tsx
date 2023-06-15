import Card from './Card';

type ToolSwitchBarPropsType = {};

const ToolBar = (props: ToolSwitchBarPropsType) => {
  return (
    <div className='flex gap-4'>
      <Card>
        <div className='flex justify-between items-center flex-col'>
          <div className='w-10 h-10 bg-gray-300 rounded-full'></div>
          <p className='text-sm'>Presenter View</p>
        </div>
      </Card>
      <Card>
        <div className='flex justify-between items-center flex-col'>
          <div className='w-10 h-10 bg-gray-300 rounded-full'></div>
          <p className='text-sm'>Export</p>
        </div>
      </Card>
    </div>
  );
};

export default ToolBar;
