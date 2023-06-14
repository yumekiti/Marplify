import { FC, useState } from 'react';
import EditArea from './components/EditArea';
import PreviewArea from './components/PreviewArea';
import ModeSwitchBar from './components/ModeSwitchBar';
import ToolBar from './components/ToolBar';
import Header from './components/Header';

export const Mode = {
  Edit: "Edit",
  Both: "Both",
  Preview: "Preview"
} as const
export type Mode = keyof typeof Mode

const App: FC = () => {
  const [mode, setMode] = useState<Mode>(Mode.Both)

  //ModeSwitchBarにmodeの更新関数を渡すhandle
  const handleModeSwitch = (mode:Mode) => {
    setMode(mode)
  }

  //選択されたモードによってコンポーネントを出し分ける
  const switchMode = () => {
    switch (mode) {
      case Mode.Edit:
        return <EditArea />
      case Mode.Both:
        return <>
          <EditArea/>
          <PreviewArea />
        </>
      case Mode.Preview:
        return <PreviewArea />
    }
  }

  return (
    <div className="App bg-background h-screen">
      <Header />  
      <div className='h-full pt-24 container mx-auto px-4'>
        <div className='flex justify-between items-end'>
          <ModeSwitchBar mode={mode} handleModeSwitch={handleModeSwitch} /> 
          <ToolBar />
        </div>
        <div className='h-5/6 grid grid-cols-2 gap-4 mt-4 py-2'>
          {switchMode()}
        </div>
      </div>
    </div>
  );
}

export default App;
