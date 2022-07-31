import io from 'socket.io-client';
import store from '../../store/store';
import {
  setFriends,
  setPendingFriendsInvitations,
  setOnlineUsers,
} from '../../store/actions/friends.actions';
import { updateDirectChatHistoryIfActive } from '../../services/Chat.service';

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  const { token } = userDetails;
  socket = io('http://localhost:5002', { auth: { token } });
  socket.on('connect', () => {});
  socket.on('friends-invitations', ({ pendingInvitations }) => {
    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });
  socket.on('friends-list', ({ friends }) => {
    store.dispatch(setFriends(friends));
  });
  socket.on('online-users', ({ onlineUsers }) => {
    store.dispatch(setOnlineUsers(onlineUsers));
  });
  socket.on('direct-chat-history', (data) => {
    updateDirectChatHistoryIfActive(data);
  });
};

export const sendDirectMessage = (data) => {
  socket.emit('direct-message', data);
};

export const getDirectChatHistory = (data) => {
  socket.emit('direct-chat-history', data);
};
