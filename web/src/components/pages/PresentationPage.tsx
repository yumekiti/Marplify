import { FC, useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ChevronRightIcon, ChevronLeftIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/solid';

import { RootState } from '../../store';
import { isMarpSlide, markdownToMarp } from '../../libs/markdown';

import PresentationView from '../molecules/PresentationView';

const generatePageStyle = (currentPage: number) => {
  const style = document.createElement('style');
  style.innerHTML = `
    .marpit > svg:not(:nth-child(${currentPage})) {
      margin: 0;
      opacity: 0;
    }
    .marpit > svg:nth-child(${currentPage}){
      margin: 0;
      opacity: 1;
    }
    .marpit > svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `;
  document.head.appendChild(style);
};

const PresentationPage: FC = () => {
  const [page, setPage] = useState(Number(localStorage.getItem('page')) || 1);
  const [totalPage, setTotalPage] = useState(1);
  const { content, theme } = useSelector((state: RootState) => state.content);
  const [marpContent, setMarpContent] = useState(content);

  useEffect(() => {
    if (!isMarpSlide(marpContent)) {
      setMarpContent(markdownToMarp(content));
    }
  }, [content]);

  useEffect(() => {
    const marp = document.querySelector('.marpit') as HTMLElement | null;
    if (!marp) return;
    const pages = marp.children;
    setTotalPage(pages.length);
    generatePageStyle(page);
    localStorage.setItem('page', String(page));
  }, [page, marpContent]);

  const handlePreviousPage = useCallback(() => {
    setPage((prev) => (prev === 1 ? prev : prev - 1));
  }, []);

  const handleNextPage = useCallback(() => {
    setPage((prev) => (prev === totalPage ? prev : prev + 1));
  }, [totalPage]);

  const fullScreen = useCallback(() => {
    const doc = document;
    const elem = doc.documentElement;
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
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className='relative w-full h-full flex justify-center items-center group'>
      <PresentationView content={marpContent} style={theme} />
      <div className='h-20 bottom-0 left-0 right-0 flex justify-between items-center z-20 bg-icons-secondary opacity-0 bg-opacity-0 hover:bg-opacity-50 hover:opacity-100 gap-16 transition-all duration-300 fixed group-active:bg-opacity-50 group-active:opacity-100'>
        <div className='flex justify-center items-center mx-auto'>
          <button className='text-icons-main active:opacity-50' onClick={handlePreviousPage} disabled={page === 1}>
            <ChevronLeftIcon className='w-8 h-8' />
          </button>
          <span className='text-justify mx-4'>
            {page}&nbsp;/&nbsp;{totalPage}
          </span>
          <button className='text-icons-main active:opacity-50' onClick={handleNextPage} disabled={page === totalPage}>
            <ChevronRightIcon className='w-8 h-8' />
          </button>
        </div>
        <div className='flex justify-center items-end mx-12'>
          <button className='text-icons-main active:opacity-50' onClick={fullScreen}>
            <ArrowsPointingOutIcon className='w-8 h-8' />
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
