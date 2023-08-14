import { FC, useState } from 'react';
import { Marp } from '@marp-team/marp-core';
import { useKey } from 'react-use';

type Props = {
  markdowns: string[];
};

const Slide: FC<Props> = ({ markdowns }: Props) => {
  const marp = new Marp();
  const htmls = markdowns.map((markdown) => marp.render(markdown).html);
  const { css } = marp.render(markdowns[0]);

  //スライドで表示するページ数を管理
  const [page, setPage] = useState(0);
  const maxPage = htmls.length;

  //1ページ進む
  const nextPage = () => {
    setPage((count) => {
      if (count + 1 < maxPage) {
        return count + 1;
      }
      return count;
    });
  };

  //1ページ戻る
  const returnPage = () => {
    setPage((count) => {
      if (count > 0) {
        return count - 1;
      }
      return count;
    });
  };

  useKey('ArrowLeft', returnPage);
  useKey('ArrowRight', nextPage);

  return (
    <>
      <div className='w-full h-full flex'>
        <div className='w-full my-auto'>
          <div dangerouslySetInnerHTML={{ __html: htmls[page] }} />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </div>
        <div className='absolute bottom-0 flex justify-center w-full text-white text-center bg-black py-5 opacity-0 transition-all duration-300 hover:opacity-100 '>
          <button onClick={returnPage} disabled={page <= 0 ? true : false}>
            ＜
          </button>
          <div className='px-4'>
            {page + 1} / {maxPage}
          </div>
          <button onClick={nextPage} disabled={page >= maxPage - 1 ? true : false}>
            ＞
          </button>
        </div>
      </div>
    </>
  );
};

export default Slide;
