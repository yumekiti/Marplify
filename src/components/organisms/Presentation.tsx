import { FC } from 'react';
import { Marp } from '@marp-team/marp-core';

type Props = {
  content: string;
  style?: string;
};

const Presentation: FC<Props> = ({ content, style }) => {
  const marp = new Marp({
    html: true,
    math: 'katex',
    emoji: {
      shortcode: true,
      unicode: false,
      twemoji: {
        base: '/resources/twemoji/',
      },
    },
  });
  const { html, css } = marp.render(content);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <style dangerouslySetInnerHTML={{ __html: style || css }} />
    </>
  );
};

export default Presentation;
