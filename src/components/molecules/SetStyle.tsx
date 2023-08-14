import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contentSlice } from '../../features/content';
import { RootState } from '../../store';
import IconButtonWithTooltip from '../atoms/IconButtonWithTooltip';
import StyleIcon from '../../assets/elements/ViewArea/StyleIcon';
import LeftIcon from '../../assets/elements/ViewArea/LeftIcon';
import RightIcon from '../../assets/elements/ViewArea/RightIcon';

const Component: FC = () => {
  const dispatch = useDispatch();
  const { content } = useSelector((state: RootState) => state.content);
  const [isDisplayStyle, setIsDisplayStyle] = React.useState(false);
  const [page, setPage] = React.useState(0);

  const splitThemes = (themes: any[]) => {
    const result = [];
    for (let i = 0; i < themes.length; i += 2) {
      result.push(themes.slice(i, i + 2));
    }
    return result;
  };

  const themesData = [
    {
      name: 'default',
      style: '',
      img: 'https://user-images.githubusercontent.com/3993388/48039490-53be1b80-e1b8-11e8-8179-0e6c11d285e2.png',
    },
    {
      name: 'gaia',
      style: '',
      img: 'https://user-images.githubusercontent.com/3993388/48039493-5456b200-e1b8-11e8-9c49-dd5d66d76c0d.png',
    },
    {
      name: 'uncover',
      style: '',
      img: 'https://user-images.githubusercontent.com/3993388/48039495-5456b200-e1b8-11e8-8c82-ca7f7842b34d.png',
    },
  ];

  const [themes] = useState(splitThemes(themesData));

  const handleClickStyle = () => {
    setIsDisplayStyle(!isDisplayStyle);
  };

  const handleClickLeft = () => {
    if (page === 0) {
      setPage(themes.length - 1);
    } else {
      setPage(page - 1);
    }
  };

  const handleClickRight = () => {
    if (page === themes.length - 1) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };

  const handleSelectTheme = (theme: any) => {
    dispatch(contentSlice.actions.setTheme(theme));

    const newContent = content.replace(/theme: .*\n/, `theme: ${theme.name}\n`);
    dispatch(contentSlice.actions.setContent(newContent));
  };

  return (
    <div className='absolute bottom-24 right-24'>
      {isDisplayStyle && (
        <div className='w-96 absolute bottom-0 right-0 flex justify-center items-center bg-icons-stroke rounded z-30'>
          <button className='px-2 w-10 active:scale-75 duration-100' onClick={handleClickLeft}>
            <LeftIcon />
          </button>
          <ul className='flex w-full py-4 space-x-4 justify-center items-center'>
            {themes[page].map((theme, index) => (
              <li key={index} className='list-none'>
                <button className='rounded-lg active:scale-75 duration-100' onClick={() => handleSelectTheme(theme)}>
                  <img src={theme.img} alt={theme.name} className='w-32 h-20 rounded-lg' />
                  <p className='text-center text-icons-main text-sm'>{theme.name}</p>
                </button>
              </li>
            ))}
          </ul>
          <button className='px-2 w-10 active:scale-75 duration-100' onClick={handleClickRight}>
            <RightIcon />
          </button>
        </div>
      )}
      <div className='fixed bg-cardBackground rounded-lg p-4 shadow-md flex justify-center items-center'>
        <IconButtonWithTooltip Icon={StyleIcon} text='Style' onClick={handleClickStyle} />
      </div>
    </div>
  );
};

export default Component;
