import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkEmoji from 'remark-emoji';
import markdownStyle from '../../styles/markdown.module.css';
import { RootState } from '../../store';
import IconButtonWithTooltip from '../atoms/IconButtonWithTooltip';
import StyleIcon from '../../assets/elements/ViewArea/StyleIcon';
import { isMarpSlide } from '../../libs/markdown';
import Presentation from '../molecules/Presentation';

const Component: FC = () => {
  const { content } = useSelector((state: RootState) => state.content);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.run({ querySelector: '.language-mermaid' });
  }, [content]);

  return (
    <div className='w-full relative h-full bg-cardBackground overflow-y-scroll h-full bg-cardBackground rounded-lg px-4 py-2 shadow-md'>
      <div className='markdown-body'>
        {isMarpSlide(content) ? (
          <Presentation content={content} />
        ) : (
          <ReactMarkdown
            className={markdownStyle.markdown}
            remarkPlugins={[remarkGfm, remarkEmoji]}
            rehypePlugins={[rehypeRaw]}
          >
            {content}
          </ReactMarkdown>
        )}
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
    </div>
  );
};

export default Component;
