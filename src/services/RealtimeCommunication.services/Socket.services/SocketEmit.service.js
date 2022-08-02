import { getIo } from './_state';

export const sendDirectMessage = (data) => {
  getIo().emit('direct-message', data);
};

export const getDirectChatHistory = (data) => {
  getIo().emit('direct-chat-history', data);
};

export const createNewRoom = () => {
  getIo().emit('room-create');
};
