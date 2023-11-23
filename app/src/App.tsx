import { BrowserRouter, Route } from 'react-router-dom';
import { FC } from 'react';
import MainPage from './components/pages/MainPage';
import PresentationPage from './components/pages/PresentationPage';

const App: FC = () => {
  return (
    <div className='App h-screen'>
      <BrowserRouter>
        <Route path='/'>
          <MainPage />
        </Route>
        <Route path='/presentation'>
          <PresentationPage />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
