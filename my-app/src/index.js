import React from 'react';
// import ReactDOM from 'react-dom';  //
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals.js';
// import NotificationList from './chapter_06/NotificationList.jsx'
// import Accommodate from './chapter_07/Accommodate.jsx'
// import ConfirmButton from './chapter_08/ConfirmButton.jsx';
// import LandingPage from './chapter_09/LandingPage.jsx';
// import AttendanceBook from './chapter_10/AttendanceBook.jsx';
// import SignUp from './chapter_11/SignUp.jsx';
// import Calculator from './chapter_12/Calculator.jsx';
// import ProfileCard from './chapter_13/ProfileCard.jsx';
// import DarkOrLight from './chapter_14/DarkOrLight.jsx'
import MainPage from './practice/styled.jsx'
import Blocks from './chapter_15/Blocks.jsx';

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
    <Blocks />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
