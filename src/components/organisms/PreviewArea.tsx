import { FC, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Card from './Card';
import Presentation from './Presentation';
import IconButton from '../atoms/IconButton';

import StyleIcon from '../../assets/style.svg';

import { selectTheme } from '../../libs/markdown';

type Props = {
  content: string;
  setContent: (content: string) => void;
  marp: boolean;
};

const PreviewArea: FC<Props> = ({ content, setContent, marp }) => {
  const [isDisplayedStyle, setIsDisplayedStyle] = useState<Boolean>(false);
  const [selectedCss, setSelectedCss] = useState<string>('');
  const [centerNum, setCenterNum] = useState<number>(1);

  //Styleボタンが押されたとき
  const handleStyleClick = () => {
    setIsDisplayedStyle(!isDisplayedStyle);
  };

  //StyleToolTip
  const displayStyleList = () => {
    const themelist = ['Theme1', 'Theme2', 'Theme3', 'Theme4'];
    const handleSelectedTheme = async (index: number) => {
      //apiでthemeのcss取得
      setSelectedCss(await selectTheme(themelist[index]));
      //contentのthemeを変更
      const themeRow = content.match(/theme: [A-Za-z0-9]*/) ?? '';
      setContent(content.replace(themeRow[0], `theme: ${themelist[index]}`));
    };

    const onClickLeft = () => {
      setCenterNum((num) => (num != 0 ? (num - 1) % themelist.length : themelist.length - 1));
    };
    const onClickRight = () => {
      setCenterNum((num) => (num + 1) % themelist.length);
    };

    const leftNum = centerNum != 0 ? (centerNum - 1) % themelist.length : themelist.length - 1;
    const rightNum = (centerNum + 1) % themelist.length;
    const displayNumList = [leftNum, centerNum, rightNum];

    if (isDisplayedStyle) {
      return (
        <div className='flex bg-slate-800 rounded'>
          <button className='w-10 text-white' onClick={onClickLeft}>
            ＜
          </button>
          <ul className='flex py-4 h-24 space-x-4'>
            {displayNumList.map((index) => (
              <button className='w-24 bg-gray-300' onClick={() => handleSelectedTheme(index)}>
                <li>{themelist[index]}</li>
              </button>
            ))}
          </ul>
          <button className='w-10 text-white' onClick={onClickRight}>
            ＞
          </button>
        </div>
      );
    }
  };

  return (
    <div className='h-full w-full bg-cardBackground rounded-lg relative overflow-y-scroll shadow-md'>
      <div className='w-full h-full rounded-lg px-6 pt-4'>
        {marp ? (
          <Presentation content={content} style={selectedCss} />
        ) : (
          <ReactMarkdown
            className='markdown-body'
            remarkPlugins={[gfm]}
            rehypePlugins={[rehypeRaw]}
            children={content}
          />
        )}
      </div>
      <div className='absolute bottom-48 right-96 rounded-b-lg'>
        <div className='fixed'>{displayStyleList()}</div>
      </div>
      <div className='absolute bottom-24 right-24 rounded-b-lg'>
        <div className='fixed group'>
          <button onClick={handleStyleClick}>
            <Card>
              <div className='my-2'>
                <IconButton
                  active={true}
                  icon={<img src={StyleIcon} alt='style' className='w-8 h-8 text-headline' />}
                  hoverText='Style'
                />
              </div>
            </Card>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewArea;
