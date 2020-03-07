import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './reducer'
import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {Router} from 'react-router-dom';
import logger from 'redux-logger'
import history from './utils/history'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk,logger)));

ReactDOM.render(
  <Provider store={store}>
    <Router history = {history} >      
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);





