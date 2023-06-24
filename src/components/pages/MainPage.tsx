import { FC, useEffect, useState } from 'react';

import EditArea from '../organisms/EditArea';
import PreviewArea from '../organisms/PreviewArea';
import ModeSwitchBar from '../molecules/ModeSwitchBar';
import ToolBar from '../molecules/ToolBar';
import modes from '../../constant/modes';
import Layout from '../templates/Layout';

import { isMarpMarkdown } from '../../libs/markdown';
import { getPost } from '../../libs/post';

const MainPage: FC = () => {
  const [mode, setMode] = useState(modes.Both);
  const [content, setContent] = useState<string>('');
  const [style, setStyle] = useState<string>('');
  const [marp, setMarp] = useState<boolean>(false);

  useEffect(() => {
    const uuid = window.location.pathname.split('/')[1];
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
    <Layout>
      <div className='flex justify-between items-start flex-col gap-2 md:flex-row md:items-end'>
        <ModeSwitchBar mode={mode} setMode={setMode} />
        <ToolBar content={content} style={style} />
      </div>
      <div className='h-5/6 flex gap-4 mt-4 py-2'>
        {(mode === modes.Edit || mode === modes.Both) && (
          <EditArea content={content} setContent={setContent} setMarp={setMarp} />
        )}
        {(mode === modes.Preview || mode === modes.Both) && (
          <PreviewArea content={content} setContent={setContent} marp={marp} style={style} setStyle={setStyle} />
        )}
      </div>
    </Layout>
  );
};

export default MainPage;
