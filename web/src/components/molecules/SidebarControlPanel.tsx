import { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { InboxArrowDownIcon } from '@heroicons/react/24/solid';
import { ArrowLeftOnRectangleIcon, PlusIcon } from '@heroicons/react/24/solid';

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
  const { id } = useParams<{ id: string }>();
  const { content } = useSelector((state: RootState) => state.content);
  const { token } = useSelector((state: RootState) => state.user);
  const { editing } = useSelector((state: RootState) => state.view);

  const { data, error, mutate } = useSWR('/slides', (url) =>
    fetchInstanceWithToken(token)
      .get(url)
      .then((res) => res.data),
  );

  const handleSaveButton = () => {
    let title = 'No Title';
    const headingPrefixes = ['# ', '## ', '### ', '#### ', '##### ', '###### '];
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      for (const prefix of headingPrefixes) {
        if (lines[i].startsWith(prefix)) {
          title = lines[i].slice(prefix.length);
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
        .delete(`/slides/${id}`)
        .then(() => {
          mutate();
          handleNewButton();
        });
    } else if (id) {
      fetchInstanceWithToken(token)
        .put(`/slides/${id}`, body)
        .then(() => {
          mutate();
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      fetchInstanceWithToken(token)
        .post('/slides', body)
        .then((res) => {
          mutate();
          navigate(`/slides/${res.data.id}`);
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
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        if (editing !== 0) dispatch(viewSlice.actions.setEditing(0));
        handleSaveButton();
      }
    },
    [handleSaveButton, handleNewButton, editing, dispatch],
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
        <SidebarButton sidebar={sidebar} onClick={handleSaveButton} text='保存' Icon={InboxArrowDownIcon} />
      </div>
      {sidebar ? <SlideList id={id} slides={data} /> : <div className='h-full'></div>}
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
