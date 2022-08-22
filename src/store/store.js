import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import authReducer from './auth/auth.reducer';
import alertReducer from './alert/alert.reducer';
import friendsReducer from './friends/friends.reducer';
import chatReducer from './chat/chat.reducer';
import roomReducer from './room/room.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  friends: friendsReducer,
  chat: chatReducer,
  room: roomReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
