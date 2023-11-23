import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contentSlice } from '../../features/content';
import { RootState } from '../../store';
import IconButtonWithTooltip from '../atoms/IconButtonWithTooltip';
import styleIcon from '../../assets/elements/ViewArea/styleIcon.svg';
import leftIcon from '../../assets/elements/ViewArea/leftIcon.svg';
import rightIcon from '../../assets/elements/ViewArea/rightIcon.svg';
import themesData from '../../constants/themes';

type Theme = {
  name: string;
  style: string;
  img: string;
};

const Component: FC = () => {
  const dispatch = useDispatch();
  const { content } = useSelector((state: RootState) => state.content);
  const [isDisplayStyle, setIsDisplayStyle] = React.useState(false);
  const [page, setPage] = React.useState(0);

  const splitThemes = (themes: Theme[]) => {
    const result = [];
    for (let i = 0; i < themes.length; i += 2) {
      result.push(themes.slice(i, i + 2));
    }
    return result;
  };

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

  const handleSelectTheme = (theme: Theme) => {
    dispatch(contentSlice.actions.setTheme(theme.style));

    const newContent = content.replace(/theme: .*\n/, `theme: ${theme.name}\n`);
    dispatch(contentSlice.actions.setContent(newContent));

    setIsDisplayStyle(false);
  };

  return (
    <div className='absolute bottom-24 right-24'>
      {isDisplayStyle && (
        <div className='fixed'>
          <div className='w-96 absolute bottom-2 -right-16 flex justify-center items-center bg-icons-stroke rounded'>
            <button className='px-2 w-12 active:scale-75 duration-100' onClick={handleClickLeft}>
              <img src={leftIcon} alt='left' />
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
            <button className='px-2 w-12 active:scale-75 duration-100' onClick={handleClickRight}>
              <img src={rightIcon} alt='right' />
            </button>
          </div>
        </div>
      )}
      <div
        className='fixed bg-cardBackground rounded-lg p-4 shadow-md flex justify-center items-center'
        onClick={handleClickStyle}
      >
        <IconButtonWithTooltip icon={styleIcon} text='Style' onClick={() => {}} />
      </div>
    </div>
  );
};

export default Component;
