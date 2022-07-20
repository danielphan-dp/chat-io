import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// ---------------------------
// | Import created reducers |
// ---------------------------
import authReducer from './reducers/authReducer';
import alertReducer from './reducers/alertReducer';

// ---------------------------
// | Create the Core Reducer |
// ---------------------------
const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
});

// --------------------------------------
// | Create the Application State Store |
// --------------------------------------
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
