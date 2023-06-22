import { FC, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Card from './Card';
import Presentation from './Presentation';
import IconButton from '../atoms/IconButton';

import StyleIcon from '../../assets/style.svg';

import StyleList from './StyleList';

type Props = {
  content: string;
  setContent: (content: string) => void;
  marp: boolean;
};

const PreviewArea: FC<Props> = ({ content, setContent, marp }) => {
  const [isDisplayStyle, setDisplayStyle] = useState<Boolean>(false);
  const [style, setStyle] = useState<string>('');

  const handleStyleClick = () => {
    setDisplayStyle(!isDisplayStyle);
  };

  return (
    <div className='h-full w-full bg-cardBackground rounded-lg relative overflow-y-scroll shadow-md'>
      <div className='w-full h-full rounded-lg px-6 pt-4'>
        {marp ? (
          <Presentation content={content} style={style} />
        ) : (
          <ReactMarkdown
            className='markdown-body'
            remarkPlugins={[gfm]}
            rehypePlugins={[rehypeRaw]}
            children={content}
          />
        )}
      </div>
      {isDisplayStyle && (
        <StyleList setDisplayStyle={setDisplayStyle} setStyle={setStyle} content={content} setContent={setContent} />
      )}
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
