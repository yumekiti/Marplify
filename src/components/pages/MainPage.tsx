import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';

import EditorAndViewer from '../organisms/EditorAndViewer';

const MainPage: FC = () => {
  const { mode } = useSelector((state: RootState) => state.view);

  return <EditorAndViewer mode={mode} />;
};

export default MainPage;
