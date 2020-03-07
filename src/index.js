import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './reducer'
import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {BrowserRouter as Router} from 'react-router-dom';
import logger from 'redux-logger'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk,logger)));

ReactDOM.render(
  <Provider store={store}>
    <Router >
      
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);





