import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import Card from '../templates/Card';
import IconButtonWithLabel from '../atoms/IconButtonWithLabel';

import presentationIcon from '../../assets/elements/Tool/presentationIcon.svg';
import exportIcon from '../../assets/elements/Tool/exportIcon.svg';

const Component: FC = () => {
  const { content } = useSelector((state: RootState) => state.content);

  const handleExport = () => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'markdown.md';
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className='h-full flex gap-4'>
      <a href={`${window.location.origin}/presentation`} target='_blank' rel='noreferrer'>
        <Card>
          <IconButtonWithLabel icon={presentationIcon} text='Presentation' tertiary />
        </Card>
      </a>
      <Card>
        <IconButtonWithLabel icon={exportIcon} text='Export' onClick={handleExport} />
      </Card>
    </div>
  );
};

export default Component;