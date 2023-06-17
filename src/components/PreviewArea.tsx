import 'github-markdown-css/github-markdown.css';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { selectStyle } from '../api/selectStyle';
import { TextType } from '../App';
//エラーが出る。
import { Marpit } from '@marp-team/marpit'

export const Theme = {
  gaia: 'gaia',
  default: 'default'
} as const;
export type Theme = keyof typeof Theme;

type PreviewAreaPropsType = {
  text: string;
  textType: TextType;
  handleTextChange: (newText: string) => void;
};

const PreviewArea = ({ text, textType, handleTextChange }: PreviewAreaPropsType) => {
  const [isDisplayedStyle, setIsDisplayedStyle] = useState<Boolean>(false)

  //Styleボタンが押されたとき
  const handleStyleClick = () => {
    setIsDisplayedStyle(!isDisplayedStyle)
  }

  //TextTypeに応じてMarpとMarkdownPreviewの切り替え
  const preview = () => {
    switch (textType) {
      case TextType.Markdown:
        return <ReactMarkdown className='markdown-body p-3' remarkPlugins={[gfm]} children={text} />
      case TextType.Marp:
        return <div dangerouslySetInnerHTML={{ __html: marpit() }} />
    }
  } 

  //Marp適用処理
  const marpit = () => {
    const marpit = new Marpit({
      markdown: {
        html: true
      },
    })

    // 2. Add theme CSS
    const theme = `
    /* @theme example */

    section {
      background-color: #369;
      color: #fff;
      font-size: 30px;
      padding: 40px;
    }

    h1,
    h2 {
      text-align: center;
      margin: 0;
    }

    h1 {
      color: #8cf;
    }
    `
    // marpit.themeSet.default = marpit.themeSet.add(theme)

    const { html, css } = marpit.render(text)

    return html
  }

  //Styleボタンを押したときに選択肢を表示
  const displayStyleList = () => {
    if (isDisplayedStyle) {
      return <ul className='flex'>
        <li className='pr-2'><button onClick={() => selectStyle(text, Theme.gaia, handleTextChange)}>{Theme.gaia}</button></li>
        <li className=''><button onClick={() => selectStyle(text, Theme.default, handleTextChange)}>{Theme.default}</button></li>
      </ul>
    }
  }

  return (
    <div className='h-full col-span-1 bg-cardBackground rounded-lg relative overflow-y-scroll'>
      <div className='w-full h-full rounded-lg px-6 pt-4 markdown' style={{ whiteSpace: 'pre-line' }}>
        {preview()}
      </div>
      <div className='absolute bottom-20 right-24 rounded-b-lg'>
        <div className='fixed'>
          {displayStyleList()}
        </div>
      </div>
      <div className='absolute bottom-14 right-24 rounded-b-lg'>
        <div className='fixed'>
          <button onClick={handleStyleClick}>Style</button>
        </div>
      </div>
    </div>
  );
};

export default PreviewArea;
