import { FC, useState } from 'react';

import { isMarpMarkdown, convertToMarkdown, convertToMarp } from '../../libs/markdown';
import ConvertIcon from '../../assets/convert.svg';
import CopyAndHelp from '../molecules/CopyAndHelp';

import { placeholder } from '../../constant/exampleText';

type Props = {
  content: string;
  setContent: (content: string) => void;
  setMarp: (marp: boolean) => void;
};

const EditArea: FC<Props> = ({ content, setContent, setMarp }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleConvertClick = async () => {
    setIsLoading(true);
    let newContent = content;
    if (isMarpMarkdown(content)) newContent = (await convertToMarkdown(content)) || content;
    else newContent = (await convertToMarp(content)) || content;
    setContent(newContent);
    setMarp(isMarpMarkdown(newContent));
    setIsLoading(false);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setMarp(isMarpMarkdown(e.target.value));
  };

  return (
    <div className='h-full w-full bg-cardBackground rounded-lg relative shadow-md'>
      {isLoading && (
        <div className='flex justify-center items-center h-full w-full absolute z-10 top-0 left-0 bg-icons-secondary bg-opacity-30'>
          <div className='animate-spin h-10 w-10 border-4 border-icons-highlight rounded-full border-t-transparent'></div>
        </div>
      )}
      <textarea
        className='w-full h-full pt-4 pl-6 rounded-lg resize-none outline-none text-headline'
        placeholder={placeholder}
        value={content}
        onChange={handleContentChange}
      ></textarea>
      <div className='absolute top-4 right-24 rounded-b-lg'>
        <div className='flex fixed gap-4'>
          <CopyAndHelp content={content} setContent={setContent} setMarp={setMarp} />
        </div>
      </div>
      <div className='absolute bottom-20 right-44 rounded-b-lg'>
        <div className='fixed'>
          <button
            onClick={handleConvertClick}
            className='bg-icons-tertiary text-icons-main text-xl rounded-lg px-4 py-2 font-bold flex items-center gap-2 shadow-md hover:opacity-70'
          >
            <img src={ConvertIcon} alt='convert' className='w-6 h-6' />
            Convert
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditArea;
