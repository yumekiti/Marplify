import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import modes from '../../constant/modes';

import IconButtonWithTooltip from '../atoms/IconButtonWithTooltip';
import HighlightedIconButton from '../atoms/HighlightedIconButton';
import IconButtonWithLabel from '../atoms/IconButtonWithLabel';
import Loading from '../atoms/Loading';

import Card from '../templates/Card';

import Background from '../../assets/Background.png';

import Icon from '../../assets/Icon';
import ShareIcon from '../../assets/elements/ShareIcon';

import EditIcon from '../../assets/elements/Tool/EditIcon';
import BothIcon from '../../assets/elements/Tool/BothIcon';
import ViewIcon from '../../assets/elements/Tool/ViewIcon';

import PresentationIcon from '../../assets/elements/Tool/PresentationIcon';
import ExportIcon from '../../assets/elements/Tool/ExportIcon';

import CopyIcon from '../../assets/elements/EditArea/CopyIcon';
import HelpIcon from '../../assets/elements/EditArea/HelpIcon';
import ConvertIcon from '../../assets/elements/EditArea/ConvertIcon';

import StyleIcon from '../../assets/elements/ViewArea/StyleIcon';

const MainPage: FC = () => {
  return (
    <div className='App h-screen w-full flex flex-col'>
      <img
        className='absolute buttom-0 left-0 right-0 h-full w-full object-cover -z-10'
        src={Background}
        alt='background'
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
      <header className='bg-cardBackground'>
        <div className='container mx-auto px-4 py-2'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center ml-2'>
              <Icon />
              <p className='text-xl font-bold ml-2 tracking-widest'>Marplify</p>
            </div>
            <HighlightedIconButton Icon={ShareIcon} text='Share' onClick={() => console.log('share')} />
          </div>
        </div>
      </header>
      <main className='flex-grow'>
        <div className='h-full container mx-auto px-4 py-4'>
          {/* 設定やら */}
          <div className='flex justify-between items-start flex-col gap-2 md:flex-row md:items-end'>
            <Card>
              <div className='flex justify-between items-center gap-6 relative py-1'>
                <IconButtonWithTooltip Icon={EditIcon} text='Edit' onClick={() => console.log('edit')} />
                <IconButtonWithTooltip
                  Icon={BothIcon}
                  text='Edit & Preview'
                  onClick={() => console.log('edit & preview')}
                />
                <IconButtonWithTooltip Icon={ViewIcon} text='Preview' onClick={() => console.log('preview')} />
              </div>
            </Card>

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
          </div>

          {/* ここから編集画面 */}
          <div className='h-5/6 flex gap-4 py-4'>
            {true && (
              <div className='w-full relative'>
                <Card>
                  {false && <Loading />}
                  <textarea
                    className='w-full h-full pt-4 pl-6 rounded-lg resize-none outline-none text-headline'
                    placeholder=''
                    value={'content'}
                    // onChange={handleContentChange}
                  ></textarea>
                  <div className='absolute top-4 right-24 rounded-b-lg'>
                    <div className='flex fixed gap-4'>
                      <IconButtonWithTooltip Icon={CopyIcon} text='Copy' onClick={() => console.log('edit')} />
                      <IconButtonWithTooltip Icon={HelpIcon} text='Help' onClick={() => console.log('edit')} />
                    </div>
                  </div>
                  <div className='absolute bottom-20 right-40 rounded-b-lg'>
                    <div className='fixed'>
                      <HighlightedIconButton
                        Icon={ConvertIcon}
                        text='Convert'
                        onClick={() => console.log('convert')}
                        tertiary
                      />
                    </div>
                  </div>
                </Card>
              </div>
            )}
            {true && (
              <div className='w-full relative overflow-y-scroll shadow-md'>
                <Card>
                  <div className='w-full h-full rounded-lg px-6 pt-4'>
                    {/* <div className={marpStyle.marpit}>
                      <Presentation content={content} style={style} />
                    </div> */}
                    {/* <ReactMarkdown /> */}
                    contnet
                  </div>
                  {/* {isDisplayStyle && (
                    <div className='absolute bottom-48 left-0 lg:left-20 xl:left-48 2xl:left-80'>
                      <div className='fixed'>
                        <div className='flex bg-icons-stroke rounded'>
                          <button className='pl-2 w-10' onClick={onClickLeft}>
                            <img src={LeftIcon} alt='left' className='w-8 h-8' />
                          </button>
                          <ul className='flex py-4 h-24 space-x-4'>
                            {displayNumList.map((index) => (
                              <button key={index} className='w-24 bg-gray-300' onClick={() => handleSelectedTheme(index)}>
                                <li>{themes[index]}</li>
                              </button>
                            ))}
                          </ul>
                          <button className='w-10' onClick={onClickRight}>
                            <img src={RightIcon} alt='right' className='w-8 h-8' />
                          </button>
                        </div>
                      </div>
                    </div>
                  )} */}
                  <div className='absolute bottom-24 right-24'>
                    <div className='fixed bg-cardBackground rounded-lg p-4 shadow-md flex justify-center items-center'>
                      <IconButtonWithTooltip Icon={StyleIcon} text='Style' onClick={() => console.log('style')} />
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
