import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import * as serviceWorker from './serviceWorker';

var config = {
    apiKey: "AIzaSyC7RYO3XtOo99o_f2c9MjQaiLXo_BujaUY",
    authDomain: "react-test-mm.firebaseapp.com",
    databaseURL: "https://react-test-mm.firebaseio.com",
    projectId: "react-test-mm",
    storageBucket: "react-test-mm.appspot.com",
    messagingSenderId: "514154825930"
};
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();