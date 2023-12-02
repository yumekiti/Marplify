import { FC } from 'react';
import { userSlice } from '../../features/user';
import { fetchInstanceWithToken } from '../../libs/fetchInstance';
import plusIcon from '../../assets/elements/Tool/plusIcon.svg';
import logoutIcon from '../../assets/elements/Tool/logoutIcon.svg';
import SlideList from '../molecules/SlideList';

import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import SidebarButton from '../atoms/SidebarButton';
import { useNavigate } from 'react-router-dom';

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

  const { data, error, mutate } = useSWR('/slides', (url) =>
    fetchInstanceWithToken(token)
      .get(url)
      .then((res) => res.data),
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

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
      if (title !== '') {
        break;
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
        .then(() => {
          mutate();
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

  return (
    <>
      <div className='mb-2'>
        <SidebarButton sidebar={sidebar} onClick={handleSaveButton} text='保存' icon={plusIcon} highlight />
      </div>
      {sidebar ? <SlideList id={id} slides={data} /> : <div className='h-full'></div>}
      <SidebarButton sidebar={sidebar} onClick={handleLogoutButton} text='ログアウト' icon={logoutIcon} />
    </>
  );
};

export default Component;
