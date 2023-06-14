import { FC } from 'react';
import EditArea from './components/EditArea';
import PreviewArea from './components/PreviewArea';
import ModeSwitchBar from './components/ModeSwitchBar';
import ToolBar from './components/ToolBar';
import Header from './components/Header';

const App: FC = () => {
  return (
    <div className="App bg-background h-screen">
      <Header />  
      <div className='h-full pt-24 container mx-auto px-4'>
        <div className='flex justify-between items-end'>
          <ModeSwitchBar /> 
          <ToolBar />
        </div>
        <div className='h-5/6 grid grid-cols-2 gap-4 mt-4 py-2'>
          <EditArea />
          <PreviewArea />
        </div>
      </div>
    </div>
  );
}

export default App;
