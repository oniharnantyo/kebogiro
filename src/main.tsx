import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import 'flexboxgrid/css/flexboxgrid.min.css';
import 'flexbin/flexbin.scss';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
