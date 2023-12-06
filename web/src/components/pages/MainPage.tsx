import { FC, useEffect } from 'react';
import useSWR from 'swr';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';
import { fetchInstanceWithToken } from '../../libs/fetchInstance';
import { contentSlice } from '../../features/content';
import { useParams, useNavigate } from 'react-router-dom';

import EditorAndViewer from '../organisms/EditorAndViewer';

const MainPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { uuid } = useParams<{ uuid: string }>();
  const { mode } = useSelector((state: RootState) => state.view);
  const { token } = useSelector((state: RootState) => state.user);

  if (!token) navigate('/');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchInstanceWithToken(token).get(`/slides/${uuid}`);
        const data = response.data;

        dispatch(contentSlice.actions.setContent(data.content));
      } catch (error) {
        navigate('/');
      }
    };

    if (uuid) fetchData();
  }, [dispatch, navigate, token, uuid]);

  if (!uuid) return <EditorAndViewer mode={mode} />;
  return <EditorAndViewer mode={mode} />;
};

export default MainPage;
