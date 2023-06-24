import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import EditArea from '../organisms/EditArea';
import PreviewArea from '../organisms/PreviewArea';
import ModeSwitchBar from '../molecules/ModeSwitchBar';
import ToolBar from '../molecules/ToolBar';
import modes from '../../constant/modes';

import Background from '../../assets/background.svg';

import Header from '../organisms/Header';
import Share from '../organisms/Share';

import { isMarpMarkdown } from '../../libs/markdown';
import { getPost, createPost } from '../../libs/post';

const MainPage: FC = () => {
  const [share, setShare] = useState<boolean>(false);

  const { uuid } = useParams<{ uuid: string }>();
  const [mode, setMode] = useState(modes.Both);
  const [content, setContent] = useState<string>('');
  const [style, setStyle] = useState<string>('');
  const [marp, setMarp] = useState<boolean>(false);

  const handleShareClick = async () => {
    setShare(true);
    await createPost(uuid, content, style);
  };

  useEffect(() => {
    if (uuid) {
      getPost(uuid).then((res: any) => {
        if (res && new Date().getTime() - new Date(res.created_at).getTime() > 30 * 60 * 1000) {
          window.location.href = '/';
        }
        if (res) {
          setContent(res.content);
          setStyle(res.style);
          setMarp(isMarpMarkdown(res.content));
        }
      });
    }
  }, []);

  return (
    <>
      <img
        src={Background}
        alt='background'
        className='absolute buttom-0 left-0 right-0 h-full w-full object-cover -z-10'
      />
      {share && <Share url={window.location.href + '/presentation'} setShare={setShare} />}
      <Header handleShareClick={handleShareClick} />
      <div className='h-full pt-24 container mx-auto px-4'>
        <div className='flex justify-between items-start flex-col gap-2 md:flex-row md:items-end'>
          <ModeSwitchBar mode={mode} setMode={setMode} />
          <ToolBar content={content} style={style} uuid={uuid} />
        </div>
        <div className='h-5/6 flex gap-4 mt-4 py-2'>
          {(mode === modes.Edit || mode === modes.Both) && (
            <EditArea content={content} setContent={setContent} setMarp={setMarp} />
          )}
          {(mode === modes.Preview || mode === modes.Both) && (
            <PreviewArea content={content} setContent={setContent} marp={marp} style={style} setStyle={setStyle} />
          )}
        </div>
      </div>
    </>
  );
};

export default MainPage;
