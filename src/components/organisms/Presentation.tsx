import { FC } from 'react';
import { Marp } from '@marp-team/marp-core';
import '../../styles/marp.css';

type Props = {
  content: string;
  selectedCss: string | null;
};

const Presentation: FC<Props> = ({ content, selectedCss }) => {
  const marp = new Marp();
  const { html, css } = marp.render(content);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <style dangerouslySetInnerHTML={{ __html: selectedCss ?? css }} />
    </>
  );
};

export default Presentation;
