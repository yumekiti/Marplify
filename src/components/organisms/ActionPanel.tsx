import React, { FC } from 'react';

import Card from '../templates/Card';
import IconButtonWithLabel from '../atoms/IconButtonWithLabel';

import PresentationIcon from '../../assets/elements/Tool/PresentationIcon';
import ExportIcon from '../../assets/elements/Tool/ExportIcon';

const Component: FC = () => {
  return (
    <div className='h-full flex gap-4'>
      <Card>
        <IconButtonWithLabel
          Icon={PresentationIcon}
          text='Presentation'
          onClick={() => console.log('presentation')}
          tertiary
        />
      </Card>
      <Card>
        <IconButtonWithLabel Icon={ExportIcon} text='Export' onClick={() => console.log('export')} />
      </Card>
    </div>
  );
};

export default Component;
