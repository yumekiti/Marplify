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
  const [text, setText] = useState<string>(`# Markdown to Marp Converter\nMarkdown形式のドキュメントとスライドの相互変換ツール。\n\n## Marpに変換したいMarkdownを入力してください。\n便利な体験をお楽しみください！\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`)

  //ModeSwitchBarにmodeの更新関数を渡すhandle
  const handleModeSwitch = (mode:Mode) => {
    setMode(mode)
  }

  //EditAreaにtextの更新関数を渡すhandle
  const handelTextChange = (newText: string) => {
    setText(newText)
  }

  //選択されたモードによってコンポーネントを出し分ける
  const switchMode = () => {
    switch (mode) {
      case Mode.Edit:
        return <EditArea text={text} handleTextChange={handelTextChange} />
      case Mode.Both:
        return <>
          <EditArea text={text} handleTextChange={handelTextChange} />
          <PreviewArea text={text} />
        </>
      case Mode.Preview:
        return <PreviewArea text={text}/>
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
