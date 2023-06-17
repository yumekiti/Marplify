import { FC } from 'react';
import Card from './Card';
import modes from '../constant/modes';

import { RiPencilFill } from 'react-icons/ri';
import { MdViewAgenda } from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai';

type Props = {
  mode: string;
  setMode: (mode: string) => void;
};

const ModeSwitchBar: FC<Props> = ({ mode, setMode }) => {
  return (
    <Card>
      <div className='flex justify-between items-center gap-2'>
        <button
          onClick={() => setMode(modes.Edit)}
          className={`relative group p-1 hover:bg-slate-200 rounded-full ${mode !== modes.Edit ? 'opacity-50' : ''}`}
        >
          <RiPencilFill className='text-icons-stroke w-8 h-8' />
          <span className='absolute -top-2 -right-2 bg-icons-highlight text-icons-main rounded-full px-1 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300'>
            Edit
          </span>
        </button>
        <button
          onClick={() => setMode(modes.Both)}
          className={`relative group p-1 hover:bg-slate-200 rounded-full ${mode !== modes.Both ? 'opacity-50' : ''}`}
        >
          <MdViewAgenda className='text-icons-stroke w-8 h-8 rotate-90' />
          <span className='absolute -top-2 -right-2 bg-icons-highlight text-icons-main rounded-full px-1 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300'>
            Both
          </span>
        </button>
        <button
          onClick={() => setMode(modes.Preview)}
          className={`relative group p-1 hover:bg-slate-200 rounded-full ${mode !== modes.Preview ? 'opacity-50' : ''}`}
        >
          <AiFillEye className='text-icons-stroke w-8 h-8' />
          <span className='absolute -top-2 -right-2 bg-icons-highlight text-icons-main rounded-full px-1 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300'>
            Preview
          </span>
        </button>
      </div>
    </Card>
  );
};

export default ModeSwitchBar;
