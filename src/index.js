import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Weather from "./Weather";
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <React.StrictMode>
    <h1>Search Your Favorite Travel Destination!</h1>
    <div className="weather"><Weather /></div>
    <p><a href="https://github.com/mkczarwhite/react-app" target="_blank" rel="noreferrer" className="coding">Open source code</a> by Michelle White</p>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
