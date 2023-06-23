import { FC, useState } from 'react';

import { selectTheme } from '../../libs/markdown';
import themes from '../../constant/themes';

import LeftIcon from '../../assets/left.svg';
import RightIcon from '../../assets/right.svg';

type Props = {
  setStyle: (style: string) => void;
  setDisplayStyle: (isDisplayedStyle: boolean) => void;
  content: string;
  setContent: (content: string) => void;
};

const StyleList: FC<Props> = ({ setStyle, setDisplayStyle }) => {
  const [centerNum, setCenterNum] = useState<number>(1);

  const handleSelectedTheme = async (index: number) => {
    setStyle(await selectTheme(themes[index]));
    setDisplayStyle(false);
  };

  const onClickLeft = () => {
    setCenterNum((num) => (num != 0 ? (num - 1) % themes.length : themes.length - 1));
  };
  const onClickRight = () => {
    setCenterNum((num) => (num + 1) % themes.length);
  };

  const leftNum = centerNum != 0 ? (centerNum - 1) % themes.length : themes.length - 1;
  const rightNum = (centerNum + 1) % themes.length;
  const displayNumList = [leftNum, centerNum, rightNum];

  return (
    <div className='absolute bottom-24 right-6'>
      <div className='flex bg-icons-stroke rounded'>
        <button className='w-10' onClick={onClickLeft}>
          <img src={LeftIcon} alt='left' className='w-8 h-8' />
        </button>
        <ul className='flex py-4 h-24 space-x-4'>
          {displayNumList.map((index) => (
            <button className='w-24 bg-gray-300' onClick={() => handleSelectedTheme(index)}>
              <li>{themes[index]}</li>
            </button>
          ))}
        </ul>
        <button className='w-10' onClick={onClickRight}>
          <img src={RightIcon} alt='right' className='w-8 h-8' />
        </button>
      </div>
    </div>
  );
};

export default StyleList;
