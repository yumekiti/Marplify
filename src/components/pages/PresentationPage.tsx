import Presentation from '../organisms/Presentation';
import { FC, useEffect, useState, useCallback } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { useLocation } from 'react-router-dom';

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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { state } = useLocation() as { state: { content: string; style: string } };
  const { content, style } = state;
  const handle = useFullScreenHandle();
  const svgs = document.getElementsByTagName('svg');

  const handleNextPage = () => {
    if (currentPage < svgs.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const fullScreen = () => {
    if (!handle.active) handle.enter();
    else handle.exit();
  };

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
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    generatePageStyle(currentPage);
    setTotalPages(svgs.length);
  }, [currentPage]);

  return (
    <FullScreen handle={handle} className='absolute buttom-0 left-0 right-0 z-10'>
      <Presentation content={content} style={style} />
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
