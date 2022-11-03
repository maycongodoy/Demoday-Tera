import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import Store  from './app/Store.js';
import { Toaster } from 'react-hot-toast';

import App from './App';
import './components/styles/index.css'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Toaster position='top-center' reverseOrder={false} />
      <App />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);
