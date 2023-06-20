import Card from '../organisms/Card';

import { BsDisplay, BsFillFilePdfFill, BsFillFileEarmarkCodeFill } from 'react-icons/bs';
import { TbFileExport } from 'react-icons/tb';
import { exportMarkdown, exportMarp, isMarpMarkdown } from '../../libs/markdown';
import { FC, useState } from 'react';

type Props = {
  content: string;
};

const ToolBar: FC<Props> = ({ content }) => {
  const [exportFormat, setExportFormat] = useState<string>('html');
  const handleExportClick = async () => {
    if (!isMarpMarkdown(content)) {
      await exportMarkdown(content, exportFormat);
    } else {
      await exportMarp(content, exportFormat);
    }
  };

  return (
    <div className='flex gap-4'>
      <Card>
        <button className='flex justify-between items-center flex-col text-icons-tertiary hover:opacity-60'>
          <BsDisplay className='w-8 h-10' />
          <p className='text-sm'>Presentation</p>
        </button>
      </Card>
      <Card>
        <div className='flex'>
          {exportFormat == 'html' && (
            <button
              className='flex justify-between items-center flex-col hover:opacity-60 w-20 pr-4'
              onClick={() => setExportFormat('pdf')}
            >
              <BsFillFileEarmarkCodeFill className='w-7 h-10' />
              <p className='text-sm'>HTML</p>
            </button>
          )}
          {exportFormat == 'pdf' && (
            <button
              className='flex justify-between items-center flex-col hover:opacity-60 w-20 pr-4'
              onClick={() => setExportFormat('html')}
            >
              <BsFillFilePdfFill className='w-7 h-10' />
              <p className='text-sm'>PDF</p>
            </button>
          )}
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
  );
};

export default ToolBar;
