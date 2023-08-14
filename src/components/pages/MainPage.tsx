import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import modes from '../../constant/modes';
import Background from '../../assets/background.svg';

const MainPage: FC = () => {
  return (
    <>
      <img
        src={Background}
        alt='background'
        className='absolute buttom-0 left-0 right-0 h-full w-full object-cover -z-10'
      />
      {false && (
        <div className='h-screen w-screen bg-background fixed top-0 left-0 z-50 bg-opacity-60'>
          <div className='h-full w-full flex justify-center items-center'>
            <div className='h-4/6 flex justify-center items-center w-10/12 lg:w-4/12 md:w-6/12'>
              <div className='h-full w-full bg-cardBackground rounded-lg px-4 py-2 flex flex-col'>
                <div className='h-1/4 flex justify-between items-start'>
                  <div className='flex justify-start items-center gap-2 m-2'>
                    {/* <img src={ModalShareIcon} alt='share' className='text-icons-stroke w-8 h-8' /> */}
                    <h1 className='text-headline text-2xl font-bold'>Share</h1>
                  </div>
                  <button className='text-icons-main rounded-md' onClick={() => console.log('close')}>
                    {/* <img src={ExitIcon} alt='exit' className='text-headline h-10 w-10 m-2' /> */}
                  </button>
                </div>
                <div className='h-3/4'>
                  <div className='flex flex-col justify-center items-center'>
                    {/* <QRCode value={url} size={300} /> */}
                    <div className='w-10/12 mt-16 border rounded-md flex justify-between items-center'>
                      <input className='rounded-l-md px-4 py-2 w-full' defaultValue={'url'} />
                      <button
                        className='bg-icons-highlight text-icons-main rounded-r-md px-4 py-2 hover:opacity-80'
                        // onClick={handleCopy}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  {/* {copied && (
                    <div className='flex justify-center items-center mt-4'>
                      <p className='text-icons-tertiary'>Copied!</p>
                    </div> 
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <header className='bg-cardBackground absolute top-0 left-0 right-0'>
        <div className='container mx-auto pl-6 pr-4 py-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              {/* <img src={Icon} alt='logo' className='w-10 h-10' /> */}
              <span className='text-xl font-bold ml-2 tracking-widest'>Marplify</span>
            </div>
            <button
              className='flex gap-2 bg-icons-highlight px-4 py-2 rounded-md text-icons-main items-center hover:opacity-80 shadow-md text-sm tracking-wider'
              onClick={() => console.log('share')}
            >
              {/* <img src={ShareIcon} alt='share' className='w-5 h-5 text-icons-main' /> */}
              Share
            </button>
          </div>
        </div>
      </header>
      <div className='h-full pt-24 container mx-auto px-4'>
        <div className='flex justify-between items-start flex-col gap-2 md:flex-row md:items-end'>
          <div className='flex justify-between items-center gap-2 relative'>
            <button
              onClick={() => {
                console.log('edit');
              }}
              className={`flex items-center p-1 group rounded-full ${true ? '' : 'opacity-70'}`}
            >
              {/* icon img */}
              <span className='absolute -bottom-6 left-0 right-0 bg-icons-highlight text-icons-main rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300'>
                Edit
              </span>
            </button>
            <button
              onClick={() => {
                console.log('edit');
              }}
              className={`flex items-center p-1 group rounded-full ${true ? '' : 'opacity-70'}`}
            >
              {/* icon img */}
              <span className='absolute -bottom-6 left-0 right-0 bg-icons-highlight text-icons-main rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300'>
                Edit & Preview
              </span>
            </button>
            <button
              onClick={() => {
                console.log('edit');
              }}
              className={`flex items-center p-1 group rounded-full ${true ? '' : 'opacity-70'}`}
            >
              {/* icon img */}
              <span className='absolute -bottom-6 left-0 right-0 bg-icons-highlight text-icons-main rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300'>
                Preview
              </span>
            </button>
          </div>
          <div>
            <div className='flex gap-4'>
              <button
                onClick={() => {
                  console.log('edit');
                }}
              >
                <div className='h-full bg-cardBackground rounded-lg px-4 py-2 shadow-md'>
                  <div className='flex justify-between items-center flex-col text-icons-tertiary hover:opacity-60'>
                    {/* <img src={PresentationIcon} alt='presentation' className='w-10 h-10' /> */}
                    <p className='text-sm font-semibold'>Presentation</p>
                  </div>
                </div>
              </button>
              <div className='h-full bg-cardBackground rounded-lg px-4 py-2 shadow-md'>
                <div className='flex'>
                  <button
                    className='flex justify-between items-center flex-col hover:opacity-60 w-20 pr-4'
                    onClick={() => console.log('export')}
                  >
                    {/* {exportFormat.icon} */}
                    <p className='text-sm'>html</p>
                  </button>
                  <button
                    onClick={() => {
                      console.log('export');
                    }}
                    className='flex justify-between items-center flex-col text-icons-highlight hover:opacity-60'
                  >
                    {/* <img src={ExportIcon} alt='export' className='w-8 h-10' /> */}
                    <p className='text-sm font-semibold'>Export</p>
                  </button>
                </div>
              </div>
            </div>
            <div className='absolute top-44 right-8 h-80 w-80 rounded-b-lg z-10'>
              <div className='fixed'>
                <div className='flex bg-slate-800 w-60 rounded'>
                  <ul className='flex py-2 h-20 space-x-2 mx-auto'>
                    <button
                      className='w-14 bg-white hover:opacity-60'
                      onClick={() => {
                        console.log('export');
                      }}
                    >
                      {/* {format.icon} */}
                      <p className='text-sm'>html</p>
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-5/6 flex gap-4 mt-4 py-2'>
          {true && (
            <div className='h-full w-full bg-cardBackground rounded-lg relative shadow-md'>
              {/* {isLoading && (
                <div className='flex justify-center items-center h-full w-full absolute z-10 top-0 left-0 bg-icons-secondary bg-opacity-30'>
                  <div className='animate-spin h-10 w-10 border-4 border-icons-highlight rounded-full border-t-transparent'></div>
                </div>
              )} */}
              <textarea
                className='w-full h-full pt-4 pl-6 rounded-lg resize-none outline-none text-headline'
                placeholder=''
                value={'content'}
                // onChange={handleContentChange}
              ></textarea>
              <div className='absolute top-4 right-24 rounded-b-lg'>
                <div className='flex fixed gap-4'>
                  <button>
                    {/* <img src={CopyIcon} alt='copy' className='w-6 h-6 opacity-50 hover:opacity-100' /> */}
                  </button>
                  <button>
                    {/* <img src={HelpIcon} alt='help' className='w-6 h-6 opacity-50 hover:opacity-100' /> */}
                  </button>
                </div>
              </div>
              <div className='absolute bottom-20 right-44 rounded-b-lg'>
                <div className='fixed'>
                  <button
                    // onClick={handleConvertClick}
                    className='bg-icons-tertiary text-icons-main text-xl rounded-lg px-4 py-2 font-bold flex items-center gap-2 shadow-md hover:opacity-70'
                  >
                    {/* <img src={ConvertIcon} alt='convert' className='w-6 h-6' /> */}
                    Convert
                  </button>
                </div>
              </div>
            </div>
          )}
          {true && (
            <div className='h-full w-full bg-cardBackground rounded-lg relative overflow-y-scroll shadow-md'>
              <div className='w-full h-full rounded-lg px-6 pt-4'>
                {/* <div className={marpStyle.marpit}>
                  <Presentation content={content} style={style} />
                </div> */}
                {/* <ReactMarkdown /> */}
                contnet
              </div>
              {/* {isDisplayStyle && (
                <StyleList setDisplayStyle={setDisplayStyle} setStyle={setStyle} content={content} setContent={setContent} />
              )} */}
              <div className='absolute bottom-24 right-24 rounded-b-lg'>
                <div className='fixed group'>
                  <div className='h-full bg-cardBackground rounded-lg px-4 py-2 shadow-md'>
                    <div className='my-2'>
                      <button className={`flex items-center p-1 group rounded-full ${true ? '' : 'opacity-70'}`}>
                        {/* <img src={StyleIcon} alt='style' className='w-8 h-8 text-headline' /> */}
                        <span className='absolute -bottom-6 left-0 right-0 bg-icons-highlight text-icons-main rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300'>
                          Style
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainPage;
