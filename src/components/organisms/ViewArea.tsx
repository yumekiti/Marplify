import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';

import Card from '../templates/Card';
import IconButtonWithTooltip from '../atoms/IconButtonWithTooltip';

import StyleIcon from '../../assets/elements/ViewArea/StyleIcon';

const Component: FC = () => {
  const { content } = useSelector((state: RootState) => state.content);
  return (
    <Card>
      <div className='w-full h-full rounded-lg px-6 pt-4'>
        {/* <div className={marpStyle.marpit}>
          <Presentation content={content} style={style} />
        </div> */}
        {/* <ReactMarkdown /> */}
        {content}
      </div>
      {/* {isDisplayStyle && (
        <div className='absolute bottom-48 left-0 lg:left-20 xl:left-48 2xl:left-80'>
          <div className='fixed'>
            <div className='flex bg-icons-stroke rounded'>
              <button className='pl-2 w-10' onClick={onClickLeft}>
                <img src={LeftIcon} alt='left' className='w-8 h-8' />
              </button>
              <ul className='flex py-4 h-24 space-x-4'>
                {displayNumList.map((index) => (
                  <button key={index} className='w-24 bg-gray-300' onClick={() => handleSelectedTheme(index)}>
                    <li>{themes[index]}</li>
                  </button>
                ))}
              </ul>
              <button className='w-10' onClick={onClickRight}>
                <img src={RightIcon} alt='right' className='w-8 h-8' />
              </button>
            </div>
          </div>
        </div>
      )} */}
      <div className='absolute bottom-24 right-24'>
        <div className='fixed bg-cardBackground rounded-lg p-4 shadow-md flex justify-center items-center'>
          <IconButtonWithTooltip Icon={StyleIcon} text='Style' onClick={() => console.log('style')} />
        </div>
      </div>
    </Card>
  );
};

export default Component;
