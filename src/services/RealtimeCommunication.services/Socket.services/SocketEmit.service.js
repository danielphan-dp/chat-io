import { getSocketInstance } from './_state';

export const sendDirectMessage = (data) => {
  getSocketInstance().emit('direct-message', data);
};

export const getDirectChatHistory = (data) => {
  getSocketInstance().emit('direct-chat-history', data);
};
