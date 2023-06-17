import Card from './Card';

import { BsDisplay } from 'react-icons/bs';
import { TbFileExport } from 'react-icons/tb';

const ToolBar = () => {
  return (
    <div className='flex gap-4'>
      <Card>
        <button className='flex justify-between items-center flex-col text-icons-tertiary hover:opacity-60'>
          <BsDisplay className='w-8 h-10' />
          <p className='text-sm'>Presentation</p>
        </button>
      </Card>
      <Card>
        <button className='flex justify-between items-center flex-col text-icons-highlight hover:opacity-60'>
          <TbFileExport className='w-8 h-10' />
          <p className='text-sm'>Export</p>
        </button>
      </Card>
    </div>
  );
};

export default ToolBar;
