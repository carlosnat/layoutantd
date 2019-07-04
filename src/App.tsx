import React from 'react';
import BaseLayout from './layout';
import { HashRouter, Route, Switch } from 'react-router-dom';

const App = () => {

  return (
    <HashRouter>
        <Switch>
          <Route path="/" render={() => <BaseLayout />} />
        </Switch>
    </HashRouter>
  )
}

export default App;
