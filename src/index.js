import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';

import Home from './views/Home';
import Article from './views/Article';

import firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';
var config = {
    apiKey: "AIzaSyANNSUN569tWNvGefPSL2Eb9CCDYFQk7fQ",
    authDomain: "notic-c48d6.firebaseapp.com",
    databaseURL: "https://notic-c48d6.firebaseio.com",
    projectId: "notic-c48d6",
    storageBucket: "notic-c48d6.appspot.com",
    messagingSenderId: "42657920325"
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
