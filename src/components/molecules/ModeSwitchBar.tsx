import { FC } from 'react';
import Card from '../organisms/Card';
import modes from '../../constant/modes';
import IconButton from '../atoms/IconButton';

import EditIcon from '../../assets/edit.svg';
import BothIcon from '../../assets/both.svg';
import PreviewIcon from '../../assets/preview.svg';

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
          icon={<img src={EditIcon} alt='edit' className='text-icons-stroke w-6 h-6' />}
          active={mode === modes.Edit}
          hoverText='Edit'
        />
        <IconButton
          onClick={() => setMode(modes.Both)}
          icon={<img src={BothIcon} alt='both' className='text-icons-stroke w-6 h-6' />}
          active={mode === modes.Both}
          hoverText='Edit & Preview'
        />
        <IconButton
          onClick={() => setMode(modes.Preview)}
          icon={<img src={PreviewIcon} alt='preview' className='text-icons-stroke w-6 h-6' />}
          active={mode === modes.Preview}
          hoverText='Preview'
        />
      </div>
    </Card>
  );
};

export default ModeSwitchBar;
