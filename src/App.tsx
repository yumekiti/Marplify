import { FC, useState } from 'react';
import EditArea from './components/EditArea';
import PreviewArea from './components/PreviewArea';
import ModeSwitchBar from './components/ModeSwitchBar';
import ToolBar from './components/ToolBar';
import Header from './components/Header';
import Share from './components/Share';

import modes from './constant/modes';

export const TextType = {
  Markdown: 'Markdown',
  Marp: 'Marp',
} as const;
export type TextType = keyof typeof TextType;

const App: FC = () => {
  const [mode, setMode] = useState(modes.Both);
  const [share, setShare] = useState(false);
  const [textType, setTextType] = useState<TextType>(TextType.Markdown);
  const [text, setText] = useState<string>(
    `# Markdown to Marp Converter\nMarkdown形式のドキュメントとスライドの相互変換ツール。\n\n## Marpに変換したいMarkdownを入力してください。\n便利な体験をお楽しみください！\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`,
  );

  //textの更新関数を渡すhandle
  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  //EditAreaにtextTypeの更新関数を渡すhandle
  const handleTextTypeChange = (textType: TextType) => {
    setTextType(textType);
  };

  return (
    <div className='App bg-background h-screen'>
      {share && <Share url={window.location.href} setShare={setShare} />}
      <Header setShare={setShare} />
      <div className='h-full pt-24 container mx-auto px-4'>
        <div className='flex justify-between items-end'>
          <ModeSwitchBar mode={mode} setMode={setMode} />
          <ToolBar />
        </div>
        <div className='h-5/6 flex gap-4 mt-4 py-2'>
          {(mode === modes.Edit || mode === modes.Both) && (
            <EditArea
              text={text}
              textType={textType}
              handleTextChange={handleTextChange}
              handleTextTypeChange={handleTextTypeChange}
            />
          )}
          {(mode === modes.Preview || mode === modes.Both) && (
            <PreviewArea text={text} handleTextChange={handleTextChange} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
