import { Mode } from '../App';
import Card from './Card';

type ModeSwitchBarPropsType = {
  mode: Mode;
  handleModeSwitch: (mode: Mode) => void;
};

const ModeSwitchBar = ({ mode, handleModeSwitch }: ModeSwitchBarPropsType) => {
  const onClick = (selectedMode: Mode) => {
    if (mode != selectedMode) {
      handleModeSwitch(selectedMode);
    }
  };

  return (
    <Card>
      <div className='flex justify-between items-center gap-2'>
        <div className='w-10 h-10 bg-gray-300 rounded-full'>
          <button onClick={() => onClick(Mode.Edit)}>Edit</button>
        </div>
        <div className='w-10 h-10 bg-gray-300 rounded-full'>
          <button onClick={() => onClick(Mode.Both)}>Both</button>
        </div>
        <div className='w-10 h-10 bg-gray-300 rounded-full'>
          <button onClick={() => onClick(Mode.Preview)}>Preview</button>
        </div>
      </div>
    </Card>
  );
};

export default ModeSwitchBar;
