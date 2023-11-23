import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { viewSlice } from '../../features/view';
import QRCode from 'qrcode.react';

import ExitIcon from '../../assets/elements/ExitIcon';
import ShareIcon from '../../assets/elements/ShareArea/ShareIcon';

const Component: FC = () => {
  const url = window.location.href; // 現在のURLを取得
  const dispatch = useDispatch();
  const [copySuccess, setCopySuccess] = useState<boolean>(false); // copySuccessの型をbooleanに設定

  const handleCopyClick = () => {
    navigator.clipboard.writeText(url); // クリップボードにURLをコピー
    setCopySuccess(true); // コピー成功時にtrueを設定

    setTimeout(() => {
      setCopySuccess(false); // 1秒後にfalseに設定
    }, 1500);
  };

  const handleCloseClick = () => {
    dispatch(viewSlice.actions.toggleModal());
  };

  return (
    <div className='fixed inset-0 bg-background bg-opacity-60 flex justify-center items-center z-30'>
      <div className='absolute inset-0 flex justify-center items-center z-40' onClick={handleCloseClick}>
        <div className='w-full h-full'></div>
      </div>
      <div className='z-50 h-4/6 flex justify-center items-center w-10/12 lg:w-4/12 md:w-6/12'>
        <div className='h-full w-full bg-cardBackground rounded-lg px-4 py-2 flex flex-col'>
          <div className='h-1/4 flex justify-between items-start'>
            <div className='flex justify-start items-center gap-2 m-2'>
              <ShareIcon />
              <h1 className='text-headline text-2xl font-bold'>Share</h1>
            </div>
            <button className='p-2 text-icons-main rounded-md' onClick={handleCloseClick}>
              <ExitIcon />
            </button>
          </div>
          <div className='h-2/4 flex flex-col justify-center items-center'>
            {/* QRcode */}
            {/* <img src='https://placehold.jp/150x150.png' alt='QRcode' /> */}
            <QRCode value={url} size={150} />
            <div className='w-10/12 mt-12 border rounded-md flex justify-between items-center'>
              <input className='rounded-l-md px-4 py-2 w-full' type='text' readOnly defaultValue={url} />
              <button
                className='bg-icons-highlight text-icons-main rounded-r-md px-4 py-2 hover:opacity-80'
                onClick={handleCopyClick}
              >
                Copy
              </button>
            </div>
          </div>
          {copySuccess ? (
            <div className='h-1/4 flex justify-center items-center mt-4'>
              <p className='text-icons-tertiary'>Copied&nbsp;!</p>
            </div>
          ) : (
            <div className='h-1/4 flex justify-center items-center mt-4'>
              <p className='text-icons-highlight'>Copy URL</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Component;
