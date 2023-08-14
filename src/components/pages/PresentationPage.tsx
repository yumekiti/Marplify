import { FC, useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import Presentation from '../organisms/Presentation';
import { isMarpMarkdown, convertToMarp } from '../../libs/markdown';
import { getPost } from '../../libs/post';

// import LeftIcon from '../../assets/left.svg';
// import RightIcon from '../../assets/right.svg';

const generatePageStyle = (currentPage: number) => {
  const style = document.createElement('style');
  style.innerHTML = `
    .marpit > svg:not(:nth-child(${currentPage})) {
      display: none;
    }
    .marpit > svg:nth-child(${currentPage}){
      display: block;
    }
  `;
  document.head.appendChild(style);
};

const PresentationPage: FC = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [marpContent, setMarpContent] = useState('');
  const [marpStyle, setMarpStyle] = useState('');
  const svgs = document.getElementsByTagName('svg');
  const theme = localStorage.getItem('theme') || 'default';
  const ratio = marpContent
    .match(/size: \d+:\d+/)?.[0]
    .split(' ')[1]
    .split(':')
    .map((n) => parseInt(n));
  const ratioObj = { x: ratio?.[0], y: ratio?.[1] };

  const handleNextPage = useCallback(() => {
    if (currentPage < svgs.length) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, svgs.length]);

  const handlePreviousPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage]);

  const fullScreen = useCallback(() => {
    const doc = document as any;
    const elem = doc.documentElement;
    console.log(elem.requestFullscreen);
    if (elem.requestFullscreen && !doc.fullscreenElement) {
      elem.requestFullscreen();
    } else if (doc.exitFullscreen) {
      doc.exitFullscreen();
    }
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePreviousPage();
      } else if (e.key === 'ArrowRight') {
        handleNextPage();
      } else if (e.key === 'f' || e.key === 'F') {
        fullScreen();
      }
    },
    [handlePreviousPage, handleNextPage, fullScreen],
  );

  useEffect(() => {
    if (!uuid && marpContent) return;

    const getPages = async () => {
      await getPost(uuid).then(async (res: any) => {
        if (!res) return;
        let convertedContent = res.content;
        if (!isMarpMarkdown(convertedContent)) {
          setMarpContent((await convertToMarp(convertedContent)).replace(/theme: .*/, `theme: ${theme}`));
        } else setMarpContent(convertedContent);

        setTotalPages(svgs.length);
        setMarpStyle(res.style);
      });
    };

    getPages();
  }, [uuid, marpContent, svgs.length, theme]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    generatePageStyle(currentPage);
  }, [currentPage]);

  return (
    <div className='relative w-full h-full flex justify-center items-center'>
      <div className='absolute left-0 right-0 z-10'>
        {ratioObj.x && ratioObj.y && (
          <div className={`relative mx-auto overflow-hidden h-full max-w-[${(100 * ratioObj.x) / ratioObj.y}vh]`}>
            {marpContent && <Presentation content={marpContent} style={marpStyle} />}
          </div>
        )}
        <div className='h-20 absolute bottom-0 left-0 right-0 flex justify-center items-center z-20 bg-icons-secondary opacity-0 bg-opacity-0 py-2 gap-4 hover:bg-opacity-50 hover:opacity-100 transition-all duration-300'>
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            {/* <img src={LeftIcon} alt='left' className='w-6 h-6' /> */}
          </button>
          <span>
            {currentPage}&nbsp;/&nbsp;{totalPages}
          </span>
          <button onClick={handleNextPage} disabled={currentPage === svgs.length}>
            {/* <img src={RightIcon} alt='right' className='w-6 h-6' /> */}
          </button>
        </div>
      </div>
      <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-between items-center z-20 xl:hidden'>
        <button onClick={handlePreviousPage} className='w-full h-full' />
        <button onClick={handleNextPage} className='w-full h-full' />
      </div>
    </div>
  );
};

export default PresentationPage;
