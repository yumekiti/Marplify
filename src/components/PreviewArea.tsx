
type PreviewAreaPropsType = {
   
}

const PreviewArea = (props: PreviewAreaPropsType) => {
    return (
        <div className='h-full col-span-1 bg-cardBackground rounded-lg relative overflow-y-scroll'>
            <div className='w-full h-full rounded-lg px-6 pt-4'>
              <h1>Markdown to Marp Converter</h1>
              <p>Markdown形式のドキュメントとスライドの相互変換ツール。</p>
              <br />
              <h2>Marpに変換したいMarkdownを入力してください。</h2>
              <p>便利な体験をお楽しみください！</p>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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