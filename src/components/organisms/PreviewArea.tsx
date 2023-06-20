import 'github-markdown-css/github-markdown.css';
import { FC, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import Card from './Card';
import Presentation from './Presentation';

import IconButton from '../atoms/IconButton';

import { FaPaintRoller } from 'react-icons/fa';

type Props = {
  content: string;
  setContent: (content: string) => void;
  marp: boolean;
};

const PreviewArea: FC<Props> = ({ content, setContent, marp }) => {
  const [isDisplayedStyle, setIsDisplayedStyle] = useState<Boolean>(false);

  //Styleボタンが押されたとき
  const handleStyleClick = () => {
    setIsDisplayedStyle(!isDisplayedStyle);
  };

  const displayStyleList = () => {
    if (isDisplayedStyle) {
      return (
        <ul className='flex'>
          <li className='pr-2'>
            {/* <button onClick={() => selectStyle(content, Theme.gaia, setContent)}>{Theme.gaia}</button> */}
          </li>
          <li className=''>
            {/* <button onClick={() => selectStyle(content, Theme.gaia, setContent)}>{Theme.default}</button> */}
          </li>
        </ul>
      );
    }
  };

  return (
    <div className='h-full w-full bg-cardBackground rounded-lg relative overflow-y-scroll'>
      <div className='w-full h-full rounded-lg px-6 pt-4 markdown' style={{ whiteSpace: 'pre-line' }}>
        {marp ? (
          <Presentation content={content} />
        ) : (
          <ReactMarkdown className='markdown-body p-3' remarkPlugins={[gfm]} children={content} />
        )}
      </div>
      <div className='absolute bottom-20 right-24 rounded-b-lg'>
        <div className='fixed'>{displayStyleList()}</div>
      </div>
      <div className='absolute bottom-24 right-24 rounded-b-lg'>
        <div onClick={handleStyleClick} className='fixed group'>
          <Card>
            <div className='mt-2'>
              <IconButton
                active={true}
                onClick={handleStyleClick}
                icon={<FaPaintRoller className='w-8 h-8 text-headline' />}
                hoverText='Style'
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PreviewArea;
