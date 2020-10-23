import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';


export default () => (
  <BrowserRouter>
  <div>
    <Switch>
    <Route path="/" exact component={ Home }/>
    </Switch>
  </div>
  </BrowserRouter>
)