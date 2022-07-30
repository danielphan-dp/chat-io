import React from 'react';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import store from './store/store';
import App from './App';

const USE_STRICT_MODE = false;
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  USE_STRICT_MODE ? (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  ) : (
    <Provider store={store}>
      <App />
    </Provider>
  )
);

reportWebVitals();
