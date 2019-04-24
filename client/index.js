import React from 'react';
import ReactDOM from 'react-dom'
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';
import Main from './components/Main';
import Dishes from './components/Dishes';
import Chat from './components/Chat';

import styles from './scss/application.scss';


const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/dishes" component={Dishes} />
      <Route path="/chat" component={Chat}  />
      </Switch>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))


