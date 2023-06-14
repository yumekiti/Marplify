
type EditAreaPropsType = {
   
}

const EditArea = (props: EditAreaPropsType) => {
    return (
        <div className='h-full col-span-1 bg-cardBackground rounded-lg relative'>
            <textarea className='w-full h-full pt-4 pl-6 rounded-lg resize-none outline-none'
            defaultValue={`# Markdown to Marp Converter\nMarkdown形式のドキュメントとスライドの相互変換ツール。\n\n## Marpに変換したいMarkdownを入力してください。\n便利な体験をお楽しみください！\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`}>
            </textarea>
            <div className='absolute top-4 right-24 rounded-b-lg'>
                <div className='fixed'>
                    <div>
                    Copy
                    </div>
                    <div>
                    Help
                    </div>
                </div>
            </div>
            <div className='absolute bottom-14 right-24 rounded-b-lg'>
                <div className='fixed'>
                    Convert
                </div>
            </div>
        </div>
    );
};

export default EditArea;