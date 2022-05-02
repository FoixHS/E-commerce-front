import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/index.scss';
import { AuthProvider } from './context/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
