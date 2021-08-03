import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // provider enable store function feauter to react application
import reducer from './reducer';
import {createStore} from 'redux';//crete function from redux
const myStore = createStore(reducer);//connect reducer function to store and assign to mystore variable

//connect store ie mystore with provider tag
//to enable store feature to react application
ReactDOM.render(
  <Provider store={myStore}> 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
