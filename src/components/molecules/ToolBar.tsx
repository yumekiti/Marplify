import Card from '../organisms/Card';

import { BsDisplay, BsFillFilePdfFill, BsFillFileEarmarkCodeFill, BsLock } from 'react-icons/bs';
import { AiFillFilePdf, AiFillFilePpt } from 'react-icons/ai';
import { TbFileExport } from 'react-icons/tb';
import { exportMarkdown, exportMarp, isMarpMarkdown } from '../../libs/markdown';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  content: string;
};

const ToolBar: FC<Props> = ({ content }) => {
  const formatList = [
    { icon: <BsFillFileEarmarkCodeFill className='w-7 h-10 mx-auto' />, text: 'HTML' },
    { icon: <AiFillFilePdf className='w-8 h-10 mx-auto' />, text: 'PDF' },
    { icon: <AiFillFilePpt className='w-8 h-10 mx-auto' />, text: 'PPT' },
  ];
  const [exportFormat, setExportFormat] = useState<{ icon: JSX.Element; text: string }>(formatList[0]);
  const [isDisplayedFormat, setIsDisplayedFormat] = useState<Boolean>(true);

  //Exportボタンが押された時
  const handleExportClick = async () => {
    if (!isMarpMarkdown(content)) {
      await exportMarkdown(content, exportFormat.text);
    } else {
      await exportMarp(content, exportFormat.text);
    }
  };

  //Format選択画面の表示・非表示
  const handleFormatClick = () => {
    setIsDisplayedFormat(!isDisplayedFormat);
  };

  //Formatが選択された時
  const handleSelectFormat = (format: { icon: JSX.Element; text: string }) => {
    setExportFormat(format);
    handleFormatClick();
  };

  //FileFormatTooltip
  const fileFormatList = () => {
    console.log('fileFormat');
    if (isDisplayedFormat) {
      return (
        <div className='flex bg-slate-800 w-60 rounded'>
          <ul className='flex py-2 h-20 space-x-2 mx-auto'>
            {formatList.map((format) => (
              <button className='w-14 bg-white hover:opacity-60' onClick={() => handleSelectFormat(format)}>
                {format.icon}
                <p className='text-sm'>{format.text}</p>
              </button>
            ))}
          </ul>
        </div>
      );
    }
  };

  const deactiveStyle = isMarpMarkdown(content) ? {} : { color: 'gray' };
  return (
    <div>
      <div className='flex gap-4'>
        <Card>
          <Link
            to={{ pathname: '/presentation', state: content }}
            style={isMarpMarkdown(content) ? {} : { pointerEvents: 'none' }}
          >
            <button className='flex justify-between items-center flex-col text-icons-tertiary hover:opacity-60'>
              <BsDisplay className='w-8 h-10' style={deactiveStyle} />
              <p className='text-sm' style={deactiveStyle}>
                Presentation
              </p>
            </button>
          </Link>
        </Card>
        <Card>
          <div className='flex'>
            <button
              className='flex justify-between items-center flex-col hover:opacity-60 w-20 pr-4'
              onClick={handleFormatClick}
            >
              {exportFormat.icon}
              <p className='text-sm'>{exportFormat.text}</p>
            </button>
            <button
              onClick={handleExportClick}
              className='flex justify-between items-center flex-col text-icons-highlight hover:opacity-60'
            >
              <TbFileExport className='w-8 h-10' />
              <p className='text-sm'>Export</p>
            </button>
          </div>
        </Card>
      </div>
      <div className='absolute top-44 right-8 h-80 w-80 rounded-b-lg z-10'>
        <div className='fixed'>{fileFormatList()}</div>
      </div>
    </div>
  );
};

export default ToolBar;
