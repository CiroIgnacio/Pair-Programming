import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Encabezado from './components/Encabezado'
import Cuerpo from './components/Cuerpo'

ReactDOM.render(
  <React.StrictMode>
    <Encabezado titulo = "Hola" color = "blue"/>
    <Cuerpo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

