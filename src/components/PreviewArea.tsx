
type PreviewAreaPropsType = {
  text: string 
}

const PreviewArea = ({text}: PreviewAreaPropsType) => {
    return (
        <div className='h-full col-span-1 bg-cardBackground rounded-lg relative overflow-y-scroll'>
            <div className='w-full h-full rounded-lg px-6 pt-4' style={{ whiteSpace: 'pre-line' }}>
              <p>{text}</p>
            </div>
            <div className='absolute bottom-14 right-24 rounded-b-lg'>
              <div className='fixed'>
                Style
              </div>
            </div>
        </div>
    );
};

export default PreviewArea;