import { FC } from 'react';
import { Marp } from '@marp-team/marp-core';

type Props = {
  content: string;
};

const Presentation: FC<Props> = ({ content }) => {
  const marp = new Marp();
  const { html, css } = marp.render(content);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <style dangerouslySetInnerHTML={{ __html: css }} />
    </>
  );
};

export default Presentation;
