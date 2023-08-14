import { FC } from 'react';
import Layout from '../templates/Layout';

import ModeSwitchBar from '../organisms/ModeSwitchBar';
import ActionPanel from '../organisms/ActionPanel';
import EditArea from '../organisms/EditArea';
import ViewArea from '../organisms/ViewArea';

const MainPage: FC = () => {
  return (
    <Layout>
      <div className='h-full container mx-auto px-4 py-4'>
        {/* 設定やら */}
        <div className='flex justify-between items-start flex-col gap-2 md:flex-row md:items-end'>
          <ModeSwitchBar />
          <ActionPanel />
        </div>

        {/* ここから編集画面 */}
        <div className='h-5/6 flex gap-4 py-4'>
          {true && (
            <div className='w-full relative'>
              <EditArea />
            </div>
          )}
          {true && (
            <div className='w-full relative overflow-y-scroll shadow-md'>
              <ViewArea />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;
