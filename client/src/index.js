import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './app/menu/menu';
import reportWebVitals from './reportWebVitals';
import Employees from './app/employees/employees';

ReactDOM.render(
  <React.StrictMode>
    <Employees />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
