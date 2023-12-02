import { FC, useEffect } from 'react';
import Layout from '../templates/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import useSWR from 'swr';
import { fetchInstanceWithToken } from '../../libs/fetchInstance';
import { useParams, useNavigate } from 'react-router-dom';
import { contentSlice } from '../../features/content';

import ModeSwitchBar from '../organisms/ModeSwitchBar';
import ActionPanel from '../organisms/ActionPanel';
import EditArea from '../organisms/EditArea';
import ViewArea from '../organisms/ViewArea';

const MainPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const { mode } = useSelector((state: RootState) => state.view);
  const { token } = useSelector((state: RootState) => state.user);

  if (!token) navigate('/');

  const { data, error } = useSWR(`/slides/${id}`, (url) =>
    fetchInstanceWithToken(token)
      .get(url)
      .then((res) => res.data),
  );

  useEffect(() => {
    if (data && !error) {
      dispatch(contentSlice.actions.setContent(data.content));
    } else if (error) {
      navigate('/');
    }
  }, [data, error, dispatch]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Layout>
      <div className='h-full container mx-auto px-4 py-4'>
        <div className='flex justify-between items-start flex-col gap-2 md:flex-row md:items-end'>
          <ModeSwitchBar />
          <ActionPanel />
        </div>
        <div className='h-5/6 flex gap-4 py-4'>
          {mode !== 'view' && <EditArea />}
          {mode !== 'edit' && <ViewArea />}
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;
