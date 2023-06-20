import { FC } from 'react';

import { isMarpMarkdown, convertMarkdown, convertMarp } from '../../libs/markdown';
import { AiOutlineRetweet } from 'react-icons/ai';
import { MdOutlineContentCopy } from 'react-icons/md';
import { IoMdHelpCircle } from 'react-icons/io';

type Props = {
  content: string;
  setContent: (content: string) => void;
  setMarp: (marp: boolean) => void;
};

const EditArea: FC<Props> = ({ content, setContent, setMarp }) => {
  const handleConvertClick = async () => {
    let newContent = '';
    if (isMarpMarkdown(content)) newContent = await convertMarkdown(content);
    else newContent = await convertMarp(content);
    setContent(newContent);
    setMarp(isMarpMarkdown(newContent));
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setMarp(isMarpMarkdown(e.target.value));
  };

  const copyToClipboard = async () => {
    await global.navigator.clipboard.writeText(content);
  };

  const onClickHelp = () => {
    const exampleText = `
## タイトル

- 作成日
- メンバー


## テーマ

###  　　　　　　〇〇〇〇


## 背景

□□□□□□□□□□□


## 問題定義
- ??????
- △△△△△△
- ++++++


## 概要

□□□□□□□□□□□
`;
    setContent(exampleText);
  };

  return (
    <div className='h-full w-full bg-cardBackground rounded-lg relative shadow-md'>
      <textarea
        className='w-full h-full pt-4 pl-6 rounded-lg resize-none outline-none'
        placeholder={`# Marplify\nMarkdown形式のドキュメントとスライドの相互変換ツール。\n\n## Marpに変換したいMarkdownを入力してください。\n便利な体験をお楽しみください！`}
        value={content}
        onChange={handleContentChange}
      ></textarea>
      <div className='absolute top-4 right-24 rounded-b-lg'>
        <div className='flex fixed'>
          <button onClick={copyToClipboard}>
            <MdOutlineContentCopy className='w-6 h-10 mr-4 hover:opacity-50' />
          </button>
          <button onClick={onClickHelp}>
            <IoMdHelpCircle className='w-7 h-10 hover:opacity-50' />
          </button>
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
