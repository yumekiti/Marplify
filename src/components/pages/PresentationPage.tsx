import { FC, useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import Presentation from '../organisms/Presentation';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { isMarpMarkdown, convertToMarp } from '../../libs/markdown';
import { getPost } from '../../libs/post';

import LeftIcon from '../../assets/left.svg';
import RightIcon from '../../assets/right.svg';

const generatePageStyle = (currentPage: number) => {
  const style = document.createElement('style');
  style.innerHTML = `
    .marpit svg {
      display: none;
    }
    
    .marpit svg:nth-child(${currentPage}) {
      display: block;
    }
    .marpit svg:nth-child(${currentPage - 1}) {
      display: none;
    }
    .marpit svg:nth-child(${currentPage + 1}) {
      display: none;
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
  const handle = useFullScreenHandle();
  const svgs = document.getElementsByTagName('svg');

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
    if (!handle.active) handle.enter();
    else handle.exit();
  }, [handle]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePreviousPage();
      } else if (e.key === 'ArrowRight') {
        handleNextPage();
      } else if (e.key === 'f') {
        fullScreen();
      }
    },
    [handlePreviousPage, handleNextPage, fullScreen],
  );

  useEffect(() => {
    if (marpContent && marpStyle) return;

    const getPages = async () => {
      await getPost(uuid).then(async (res: any) => {
        if (!res) return;
        let convertedContent = res.content;
        if (!isMarpMarkdown(convertedContent)) {
          convertedContent = convertedContent.replace(
            /theme: .*/,
            `theme: ${localStorage.getItem('theme') || 'default'}`,
          );
          setMarpContent(await convertToMarp(convertedContent));
        } else setMarpContent(convertedContent);

        setMarpStyle(res.style);
      });
    };

    getPages();
  }, [uuid, marpContent, marpStyle]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    generatePageStyle(currentPage);
    setTotalPages(svgs.length);
  }, [currentPage, svgs.length]);

  return (
    <FullScreen handle={handle} className='absolute buttom-0 left-0 right-0 z-10'>
      {marpContent && <Presentation content={marpContent} style={marpStyle} />}
      <div className='absolute bottom-0 left-0 right-0 flex justify-center items-center z-20 bg-icons-secondary opacity-0 bg-opacity-0 py-2 gap-4 hover:bg-opacity-50 hover:opacity-100 transition-all duration-300'>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          <img src={LeftIcon} alt='left' className='w-6 h-6' />
        </button>
        <span>
          {currentPage}&nbsp;/&nbsp;{totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === svgs.length}>
          <img src={RightIcon} alt='right' className='w-6 h-6' />
        </button>
      </div>
    </FullScreen>
  );
};

export default PresentationPage;
