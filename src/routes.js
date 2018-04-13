import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import App from './App';
import Foo from './components/Foo';

export default () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ App } />
        <Route path='/foo' component={ Foo } />
      </Switch>
    </BrowserRouter>
  )
}