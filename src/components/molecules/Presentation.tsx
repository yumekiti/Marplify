import { FC, useEffect } from 'react';
import { Marp } from '@marp-team/marp-core';
import marpStyle from '../../styles/marp.module.css';

type Props = {
  content: string;
  style: string;
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

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
    });
    mermaid.init(undefined, '.language-mermaid');
  }, [content]);

  console.log(style);

  return (
    <div className={marpStyle.marpit}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <style dangerouslySetInnerHTML={{ __html: css }} />
      {/* <style dangerouslySetInnerHTML={{ __html: style }} /> */}
      <link rel='stylesheet' href={style} />
    </div>
  );
};

export default Presentation;
