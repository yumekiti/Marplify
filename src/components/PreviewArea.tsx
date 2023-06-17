import 'github-markdown-css/github-markdown.css';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

export const Theme = {
  gaia: 'gaia',
  default: 'default',
} as const;
export type Theme = keyof typeof Theme;

type PreviewAreaPropsType = {
  content: string;
  setContent: (content: string) => void;
};

const PreviewArea = ({ content, setContent }: PreviewAreaPropsType) => {
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
        <ReactMarkdown className='markdown-body p-3' remarkPlugins={[gfm]} children={content} />
      </div>
      <div className='absolute bottom-20 right-24 rounded-b-lg'>
        <div className='fixed'>{displayStyleList()}</div>
      </div>
      <div className='absolute bottom-14 right-24 rounded-b-lg'>
        <div className='fixed'>
          <button onClick={handleStyleClick}>Style</button>
        </div>
      </div>
    </div>
  );
};

export default PreviewArea;
