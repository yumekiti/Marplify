import { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { InboxArrowDownIcon } from '@heroicons/react/24/solid';
import { ArrowLeftOnRectangleIcon, PlusIcon, CheckIcon } from '@heroicons/react/24/solid';

import { userSlice } from '../../features/user';
import { contentSlice } from '../../features/content';
import { viewSlice } from '../../features/view';
import { fetchInstanceWithToken } from '../../libs/fetchInstance';
import { RootState } from '../../store';

import SidebarButton from '../atoms/SidebarButton';
import SlideList from '../molecules/SlideList';

import useSWR from 'swr';

type Props = {
  sidebar: boolean;
};

const Component: FC<Props> = ({ sidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { uuid } = useParams<{ uuid: string }>();
  const { content } = useSelector((state: RootState) => state.content);
  const { token } = useSelector((state: RootState) => state.user);
  const { editing } = useSelector((state: RootState) => state.view);
  const [done, setDone] = useState(false);

  const { data, error, mutate } = useSWR('/slides', (url) =>
    fetchInstanceWithToken(token)
      .get(url)
      .then((res) => res.data)
      .catch((err) => {
        if (err.response.status === 401) {
          dispatch(userSlice.actions.setToken(''));
          localStorage.removeItem('token');
          navigate('/');
        }
      }),
  );

  const handleDone = () => {
    setDone(true);
    setTimeout(() => {
      setDone(false);
    }, 1500);
  };

  const handleSaveButton = () => {
    if (editing != '') dispatch(viewSlice.actions.setEditing(''));
    else return;

    let title = 'No Title';
    let titleFlag = false;
    const headingPrefixes = ['# ', '## ', '### ', '#### ', '##### ', '###### '];
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      for (const prefix of headingPrefixes) {
        if (lines[i].startsWith(prefix) && !titleFlag) {
          title = lines[i].slice(prefix.length);
          titleFlag = true;
          break;
        }
      }
    }

    const body = {
      title: title,
      content: content,
    };

    if (!content) {
      fetchInstanceWithToken(token)
        .delete(`/slides/${uuid}`)
        .then(() => {
          mutate();
          handleNewButton();
          handleDone();
        });
    } else if (uuid) {
      fetchInstanceWithToken(token)
        .put(`/slides/${uuid}`, body)
        .then(() => {
          mutate();
          handleDone();
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      fetchInstanceWithToken(token)
        .post('/slides', body)
        .then((res) => {
          mutate();
          navigate(`/${res.data.uuid}`);
          handleDone();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const handleLogoutButton = () => {
    dispatch(userSlice.actions.setToken(''));
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleNewButton = () => {
    dispatch(contentSlice.actions.setContent(''));
    navigate('/');
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.key === 's') || (e.ctrlKey && e.key === 'S')) {
        e.preventDefault();
        handleSaveButton();
      }
      if ((e.ctrlKey && e.key === 'b') || (e.ctrlKey && e.key === 'B')) {
        e.preventDefault();
        dispatch(viewSlice.actions.toggleSidebar());
      }
    },
    [handleSaveButton, editing, dispatch],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <div className='mb-2'>
        <SidebarButton sidebar={sidebar} onClick={handleNewButton} text='新規' Icon={PlusIcon} />
      </div>
      <div className='mb-2'>
        {done ? (
          <div
            className={`bg-icons-tertiary overflow-hidden whitespace-nowrap w-full flex items-center py-2 px-4 bg-icons-highlight hover:bg-icons-secondary text-white rounded focus:outline-none gap-2
            ${!sidebar && 'justify-center'}
          `}
          >
            <CheckIcon className='w-6 h-6' />
            <p className={`text-sm font-bold ${!sidebar && 'hidden'}`}>保存しました</p>
          </div>
        ) : (
          <SidebarButton sidebar={sidebar} onClick={handleSaveButton} text='保存' Icon={InboxArrowDownIcon} />
        )}
      </div>
      {sidebar ? <SlideList uuid={uuid} slides={data} /> : <div className='h-full'></div>}
      <SidebarButton
        sidebar={sidebar}
        onClick={handleLogoutButton}
        text='ログアウト'
        Icon={ArrowLeftOnRectangleIcon}
        tertiary
      />
    </>
  );
};

export default Component;
