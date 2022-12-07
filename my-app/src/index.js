import React from 'react';
// import ReactDOM from 'react-dom';  //
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals.js';
import NotificationList from './chapter_06/NotificationList.jsx'

// ReactDOM.render은 react v18부터 사용하지 않는다.
// ReactDOM.render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
