import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Navigation from '../Navigation';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebaseConfig from './firebaseConfig';
import * as firebase from 'firebase';
// import Firebase from 'firebase';


// export const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
    document.getElementById('root')
  );
// };
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
