import Card from './Card';
import modes from '../constant/modes';

import { FaPen } from 'react-icons/fa';
import { MdViewAgenda } from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai';

type Props = {
  mode: string;
  setMode: (mode: string) => void;
};

const ModeSwitchBar = ({ mode, setMode }: Props) => {
  return (
    <Card>
      <div className='flex justify-between items-center gap-2'>
        <button onClick={() => setMode(modes.Edit)} className={mode !== modes.Edit ? 'opacity-50' : ''}>
          <FaPen className='text-icons-stroke w-6 h-6' />
        </button>
        <button onClick={() => setMode(modes.Both)} className={mode !== modes.Both ? 'opacity-50' : ''}>
          <MdViewAgenda className='text-icons-stroke w-8 h-8 rotate-90' />
        </button>
        <button onClick={() => setMode(modes.Preview)} className={mode !== modes.Preview ? 'opacity-50' : ''}>
          <AiFillEye className='text-icons-stroke w-8 h-8' />
        </button>
      </div>
    </Card>
  );
};

export default ModeSwitchBar;
