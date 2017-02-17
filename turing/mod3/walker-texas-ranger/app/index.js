import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Home from './components/home';
import NewJokes from './components/Button/New-Jokes';
import  FavoritesBtn  from './components/Button/FavoritesButton';
import Settings from './components/Button/Settings'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/home" component={Home} >
      <IndexRoute component={NewJokes} />
      <Route path='/jokes' component={NewJokes}/>
      <Route path='/favorites' component={FavoritesBtn}/>
      <Route path='/settings' component={Settings}/>
    </Route>
  </Router>
, document.getElementById('application'));
