import { FC } from 'react';
import { useSelector } from 'react-redux';
import { ComputerDesktopIcon, DocumentArrowDownIcon } from '@heroicons/react/24/solid';

import { RootState } from '../../store';

import Card from '../templates/Card';
import IconButtonWithLabel from '../atoms/IconButtonWithLabel';

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
          <IconButtonWithLabel Icon={ComputerDesktopIcon} text='Presentation' tertiary />
        </Card>
      </a>
      <Card>
        <IconButtonWithLabel Icon={DocumentArrowDownIcon} text='Export' onClick={handleExport} />
      </Card>
    </div>
  );
};

export default Component;
