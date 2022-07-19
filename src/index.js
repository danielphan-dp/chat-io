// -------------------
// | Import UI Tools |
// -------------------
// JSX Components
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Styling
import './index.css';

// ---------------------------------
// | Import State Management Tools |
// ---------------------------------
import { Provider } from 'react-redux';
import store from './store/store';

// ----------------------
// | Import Other Tools |
// ----------------------
import reportWebVitals from './reportWebVitals';

// ----------------------
// | App Root Component |
// ----------------------
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// -----------------------------
// | Web Application Analytics |
// -----------------------------
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
