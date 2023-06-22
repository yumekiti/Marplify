import { FC } from 'react';

import { isMarpMarkdown } from '../../libs/markdown';
import CopyIcon from '../../assets/copy.svg';
import HelpIcon from '../../assets/help.svg';
import exampleText from '../../constant/exampleText';

type Props = {
  content: string;
  setContent: (content: string) => void;
  setMarp: (marp: boolean) => void;
};

const CopyAndHelp: FC<Props> = ({ content, setContent, setMarp }) => {
  const onClickCopy = async () => {
    await global.navigator.clipboard.writeText(content);
  };

  const onClickHelp = () => {
    setContent(exampleText);
    setMarp(isMarpMarkdown(exampleText));
  };

  return (
    <>
      <button onClick={onClickCopy}>
        <img src={CopyIcon} alt='copy' className='w-6 h-6 opacity-50 hover:opacity-100' />
      </button>
      <button onClick={onClickHelp}>
        <img src={HelpIcon} alt='help' className='w-6 h-6 opacity-50 hover:opacity-100' />
      </button>
    </>
  );
};

export default CopyAndHelp;
