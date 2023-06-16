import { FC, useState } from 'react';
import EditArea from './components/EditArea';
import PreviewArea from './components/PreviewArea';
import ModeSwitchBar from './components/ModeSwitchBar';
import ToolBar from './components/ToolBar';
import Header from './components/Header';

export const Mode = {
  Edit: 'Edit',
  Both: 'Both',
  Preview: 'Preview',
} as const;
export type Mode = keyof typeof Mode;

export const TextType = {
  Markdown: 'Markdown',
  Marp: 'Marp',
} as const;
export type TextType = keyof typeof TextType;

const App: FC = () => {
  const [mode, setMode] = useState<Mode>(Mode.Both);
  const [textType, setTextType] = useState<TextType>(TextType.Markdown);
  const [text, setText] = useState<string>(
    `# Markdown to Marp Converter\nMarkdown形式のドキュメントとスライドの相互変換ツール。\n\n## Marpに変換したいMarkdownを入力してください。\n便利な体験をお楽しみください！\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`,
  );

  //ModeSwitchBarにmodeの更新関数を渡すhandle
  const handleModeSwitch = (mode: Mode) => {
    setMode(mode);
  };

  //textの更新関数を渡すhandle
  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  //EditAreaにtextTypeの更新関数を渡すhandle
  const handleTextTypeChange = (textType: TextType) => {
    setTextType(textType);
  };

  //選択されたモードによってコンポーネントを出し分ける
  const switchMode = () => {
    switch (mode) {
      case Mode.Edit:
        return (
          <EditArea
            text={text}
            textType={textType}
            handleTextChange={handleTextChange}
            handleTextTypeChange={handleTextTypeChange}
          />
        );
      case Mode.Both:
        return (
          <>
            <EditArea
              text={text}
              textType={textType}
              handleTextChange={handleTextChange}
              handleTextTypeChange={handleTextTypeChange}
            />
            <PreviewArea text={text} handleTextChange={handleTextChange} />
          </>
        );
      case Mode.Preview:
        return <PreviewArea text={text} handleTextChange={handleTextChange} />;
    }
  };

  return (
    <div className='App bg-background h-screen'>
      <Header />
      <div className='h-full pt-24 container mx-auto px-4'>
        <div className='flex justify-between items-end'>
          <ModeSwitchBar mode={mode} handleModeSwitch={handleModeSwitch} />
          <ToolBar />
        </div>
        <div className='h-5/6 grid grid-cols-2 gap-4 mt-4 py-2'>{switchMode()}</div>
      </div>
    </div>
  );
};

export default App;
