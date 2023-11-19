import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { FC } from 'react';
import MainPage from './components/pages/MainPage';
import PresentationPage from './components/pages/PresentationPage';

const App: FC = () => {
  return (
    <div className='App h-screen'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Route exact path='/presentation'>
            <PresentationPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
