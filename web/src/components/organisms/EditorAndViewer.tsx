import { FC } from 'react';
import ModeSwitchBar from '../organisms/ModeSwitchBar';
import ActionPanel from '../organisms/ActionPanel';
import EditArea from '../organisms/EditArea';
import ViewArea from '../organisms/ViewArea';
import Layout from '../templates/Layout';

type Props = {
  mode: string;
};

const Component: FC<Props> = ({ mode }) => {
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

export default Component;
