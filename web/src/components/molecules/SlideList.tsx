import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

type Slide = {
  id: string;
  title: string;
  content: string;
  created_at: string;
  update_at: string;
};

const formatDate = (date: string) => {
  const d = new Date(date);
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
};

type Props = {
  id: string | undefined;
  slides: Slide[];
};

const Component: FC<Props> = ({ id, slides }) => {
  const { editing } = useSelector((state: RootState) => state.view);

  return (
    <ul className='mb-2 h-full list-none overflow-y-scroll'>
      {slides.map((slide: Slide, index: number) => (
        <li className='mb-2' key={index}>
          <Link
            to={`/slides/${slide.id}`}
            className='flex items-start py-1 w-full rounded group hover:bg-headline hover:bg-opacity-30 justify-center flex-col'
          >
            <div className='px-2 flex items-center gap-2'>
              {editing !== 0 && editing === Number(slide.id) && (
                <div className='rounded-full w-3 h-3 bg-icons-tertiary' />
              )}
              <p className={`whitespace-nowrap group-hover:underline ${id == slide.id && 'text-icons-highlight'}`}>
                {slide.title}
              </p>
            </div>
            <p className='px-2 text-sm text-gray-400'>created : {formatDate(slide.created_at)}</p>
            <p className='px-2 text-sm text-gray-400'>updated : {formatDate(slide.update_at)}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Component;