import { FC } from 'react';
import Card from '../organisms/Card';
import modes from '../../constant/modes';
import IconButton from '../atoms/IconButton';

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
      <div className='flex justify-between items-center gap-2 relative'>
        <IconButton
          onClick={() => setMode(modes.Edit)}
          icon={<RiPencilFill className='text-icons-stroke w-8 h-8' />}
          active={mode === modes.Edit}
          hoverText='Edit'
        />
        <IconButton
          onClick={() => setMode(modes.Both)}
          icon={<MdViewAgenda className='text-icons-stroke w-8 h-8 rotate-90' />}
          active={mode === modes.Both}
          hoverText='Edit & Preview'
        />
        <IconButton
          onClick={() => setMode(modes.Preview)}
          icon={<AiFillEye className='text-icons-stroke w-8 h-8' />}
          active={mode === modes.Preview}
          hoverText='Preview'
        />
      </div>
    </Card>
  );
};

export default ModeSwitchBar;
