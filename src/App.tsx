import { FC, useState } from 'react';

import Background from './assets/background.svg';

import EditArea from './components/EditArea';
import PreviewArea from './components/PreviewArea';
import ModeSwitchBar from './components/ModeSwitchBar';
import ToolBar from './components/ToolBar';
import Header from './components/Header';
import Share from './components/Share';
import modes from './constant/modes';

const App: FC = () => {
  const [mode, setMode] = useState(modes.Both);
  const [share, setShare] = useState(false);
  const [content, setContent] = useState<string>('');
  const [marp, setMarp] = useState<boolean>(false);

  return (
    <div className='App h-screen'>
      <img
        src={Background}
        alt='background'
        className='absolute buttom-0 left-0 right-0 h-full w-full object-cover -z-10'
      />
      {share && <Share url={window.location.href} setShare={setShare} />}
      <Header setShare={setShare} />
      <div className='h-full pt-24 container mx-auto px-4'>
        <div className='flex justify-between items-start flex-col gap-2 md:flex-row md:items-end'>
          <ModeSwitchBar mode={mode} setMode={setMode} />
          <ToolBar />
        </div>
        <div className='h-5/6 flex gap-4 mt-4 py-2'>
          {(mode === modes.Edit || mode === modes.Both) && (
            <EditArea content={content} setContent={setContent} setMarp={setMarp} />
          )}
          {(mode === modes.Preview || mode === modes.Both) && (
            <PreviewArea content={content} setContent={setContent} marp={marp} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
