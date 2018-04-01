import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';

import Home from './views/Home';
import Article from './views/Article';

import firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
  firebase.initializeApp(config);

ReactDOM.render((
    <BrowserRouter>
    <Switch>
    <Route exact path="/" render={() => (
      <Redirect to="/home"/>
    )}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/article" component={Article}/>
    </Switch>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
