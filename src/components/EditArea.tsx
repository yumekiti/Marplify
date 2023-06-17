import { FC } from 'react';

import { isMarpMarkdown, convertMarkdown, convertMarp } from '../libs/markdown';
import { AiOutlineRetweet } from 'react-icons/ai';

type Props = {
  content: string;
  setContent: (content: string) => void;
  setMarp: (marp: boolean) => void;
};

const EditArea: FC<Props> = ({ content, setContent, setMarp }) => {
  const handleConvertClick = async () => {
    if (!isMarpMarkdown(content)) setContent(await convertMarp(content));
    else setContent(await convertMarkdown(content));
    setMarp(!isMarpMarkdown(content));
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setMarp(isMarpMarkdown(e.target.value));
  };

  return (
    <div className='h-full w-full bg-cardBackground rounded-lg relative'>
      <textarea
        className='w-full h-full pt-4 pl-6 rounded-lg resize-none outline-none'
        placeholder={`# Marplify\nMarkdown形式のドキュメントとスライドの相互変換ツール。\n\n## Marpに変換したいMarkdownを入力してください。\n便利な体験をお楽しみください！`}
        value={content}
        onChange={handleContentChange}
      ></textarea>
      <div className='absolute top-4 right-24 rounded-b-lg'>
        <div className='fixed'>
          <div>Copy</div>
          <div>Help</div>
        </div>
      </div>
      <div className='absolute bottom-20 right-44 rounded-b-lg'>
        <div className='fixed'>
          <button
            onClick={handleConvertClick}
            className='bg-icons-tertiary text-icons-main text-xl rounded-lg px-4 py-2 font-bold flex items-center gap-2 shadow-md hover:opacity-80'
          >
            <AiOutlineRetweet className='w-8 h-8' />
            Convert
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditArea;
