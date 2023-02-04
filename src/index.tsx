import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'rmwc/dist/styles';
import App from './App';
import { RMWCProvider } from '@rmwc/provider';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RMWCProvider
  // Globally disable ripples
  ripple={false}
  // Global options for icons
  // Takes the same options as the icon component
  icon={{
    basename: 'material-icons'
  }}
  // Global options for typography
  // allows mapping of a defaultTag or specific classes
  // See the Typography docs for more info
  typography={{
    defaultTag: 'div',
    headline1: 'h1'
  }}
  // Global options for tooltips
  // Takes most of the options for tooltips
  // See the Tooltip docs for more info
  tooltip={{
    align: 'right'
  }}
>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</RMWCProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
