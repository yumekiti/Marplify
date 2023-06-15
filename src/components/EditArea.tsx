import { TextType } from '../App';
import { convertToMarp } from '../api/convertToMarp';
import { convertToMarkDown } from '../api/convetToMarkDown';

type EditAreaPropsType = {
  text: string;
  textType: TextType;
  handleTextChange: (newText: string) => void;
  handleTextTypeChange: (textType: TextType) => void;
};

const EditArea = ({ text, textType, handleTextChange, handleTextTypeChange }: EditAreaPropsType) => {
  //Convertボタンが押されたとき
  const onClickConvert = () => {
    switch (textType) {
      case TextType.Markdown:
        convertToMarp(text, handleTextChange);
        handleTextTypeChange(TextType.Marp);
        return;
      case TextType.Marp:
        convertToMarkDown(text, handleTextChange);
        handleTextTypeChange(TextType.Markdown);
        return;
    }
  };

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
          <button onClick={onClickConvert}>Convert</button>
        </div>
      </div>
    </div>
  );
};

export default EditArea;
