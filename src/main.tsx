import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
