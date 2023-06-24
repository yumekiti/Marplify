import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { FC } from 'react';
import MainPage from './components/pages/MainPage';
import PresentationPage from './components/pages/PresentationPage';

import shortid from 'shortid';

const App: FC = () => {
  const uuid = shortid.generate();

  return (
    <div className='App h-screen'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Redirect to={`/${uuid}`} />
          </Route>
          <Route exact path='/:uuid'>
            <MainPage />
          </Route>
          <Route exact path='/:uuid/presentation'>
            <PresentationPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
