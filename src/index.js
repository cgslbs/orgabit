import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Navbar from "./component/navbar/navbar";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Navbar />
          <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


