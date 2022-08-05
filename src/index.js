import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
