import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import Biography from './Biography';
import Overview from './Overview';
import Services from './Services';


export default () => (
  <BrowserRouter>
  <div>
    <Switch>
    <Route path="/" exact component={ Home }/>
    <Route path="/Biography" exact component={ Biography }/>
    <Route path="/Overview" exact component={ Overview }/>
    <Route path="/Services" exact component={ Services }/> 
    </Switch>
  </div>
  </BrowserRouter>
)