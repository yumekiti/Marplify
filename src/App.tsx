import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { FC } from 'react';
import Main from './components/pages/Main';
import PresentationPage from './components/pages/PresentationPage';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <div className='App h-screen'>
            <Main />
          </div>
        </Route>
        <Route exact path='/presentation'>
          <div className='h-screen'>
            <PresentationPage />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
