import { FC } from 'react';
import Card from './components/Card';
import Icon from './assets/icon.svg';

const App: FC = () => {
  return (
    <div className="App bg-background h-screen">
      <header className='bg-cardBackground absolute top-0 left-0 right-0'>
        <div className='container mx-auto px-6 py-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <img src={Icon} alt='logo' className='w-10 h-10' />
              <span className='text-xl font-bold ml-2 tracking-widest'>
                Mtmc
              </span>
            </div>
            <div>
              Share
            </div>
          </div>
        </div>
      </header>
      <div className='h-full pt-24 container mx-auto px-4'>
        <div className='flex justify-between items-end'>
          <Card>
            <div className='flex justify-between items-center gap-2'>
              <div className='w-10 h-10 bg-gray-300 rounded-full'></div>
              <div className='w-10 h-10 bg-gray-300 rounded-full'></div>
              <div className='w-10 h-10 bg-gray-300 rounded-full'></div>
            </div>
          </Card>
          <div className='flex gap-4'>
            <Card>
              <div className='flex justify-between items-center flex-col'>
                <div className='w-10 h-10 bg-gray-300 rounded-full'></div>
                <p className='text-sm'>Presenter View</p>
              </div>
            </Card>
            <Card>
              <div className='flex justify-between items-center flex-col'>
                <div className='w-10 h-10 bg-gray-300 rounded-full'></div>
                <p className='text-sm'>Export</p>
              </div>
            </Card>
          </div>
        </div>
        <div className='h-5/6 grid grid-cols-2 gap-4 mt-4 py-2'>
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
        </div>
      </div>
    </div>
  );
}

export default App;
