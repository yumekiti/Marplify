import { convertToMarp } from '../api/convertToMarp';

type EditAreaPropsType = {
  text: string;
  handleTextChange: (newText: string) => void;
};

const EditArea = ({ text, handleTextChange }: EditAreaPropsType) => {
  return (
    <div className='h-full col-span-1 bg-cardBackground rounded-lg relative'>
      <textarea
        className='w-full h-full pt-4 pl-6 rounded-lg resize-none outline-none'
        value={text}
        onChange={(e) => handleTextChange(e.target.value)}
      ></textarea>
      <div className='absolute top-4 right-24 rounded-b-lg'>
        <div className='fixed'>
          <div>Copy</div>
          <div>Help</div>
        </div>
      </div>
      <div className='absolute bottom-14 right-24 rounded-b-lg'>
        <div className='fixed'>
          <button onClick={() => convertToMarp(text, handleTextChange)}>Convert</button>
        </div>
      </div>
    </div>
  );
};

export default EditArea;
