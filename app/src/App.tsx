import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FC } from 'react';
import MainPage from './components/pages/MainPage';
import PresentationPage from './components/pages/PresentationPage';

const App: FC = () => {
  return (
    <div className='App h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/presentation' element={<PresentationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
