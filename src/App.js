import React, { Suspense } from 'react';
import BaseLayout from './layout';
import { HashRouter, Route, Switch } from 'react-router-dom';

const App = () => {

  const Loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" name="Dashboard" render={props => <BaseLayout {...props}/>} />
        </Switch>
      </Suspense>
    </HashRouter>
  )
}

export default App;
