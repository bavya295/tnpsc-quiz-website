import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import Register from './Register';
//import Login from './Login';
//import Dashboard from './Dashboard';
//import Questions from './Questions';
//import Subfiles from './Subfiles';
//import About from './About';
//import Track from './Track';
import reportWebVitals from './reportWebVitals';
//import Homepage from './Homepaage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/tnpsc-quiz-website'>
    <App/>
    </BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
