import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './assets/stylesheets/bulma.css';

import Home from './views/Home';
import Article from './views/Article';
import './App.css';

import firebase from 'firebase';

import firebaseConfig from './config.js' //We dont want this to be public

firebase.initializeApp(firebaseConfig);

ReactDOM.render((
    <BrowserRouter>
      <Switch>
          <Route exact path="/" render={() => <Redirect to="/home"/>}/>
          <Route exact path="/home" component={Home}/>
        <Route exact path="/article" component={Article}/>
      </Switch>
    </BrowserRouter>
), document.getElementById('root'));
