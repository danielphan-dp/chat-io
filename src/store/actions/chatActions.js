// import * as authApi from '../../networking/api/authApi';
// import { openAlertMessage } from './alertActions';

// -------------------------------
// | Enumerate of All Chat Types |
// -------------------------------
export const chatTypes = {
  DIRECT: 'DIRECT',
  GROUP: 'GROUP',
};

// -----------------------------------
// | Enumerate of All Friend Actions |
// -----------------------------------
export const chatActions = {
  SET_CHOSEN_CHAT_DETAILS: 'CHAT.SET_CHOSEN_CHAT_DETAILS',
  SET_MESSAGES: 'CHAT.SET_MESSAGES',
  // SET_CHAT_TYPE: 'CHAT.SET_CHAT_TYPE',
};

// ----------------------
// | Store State Access |
// ----------------------
export const setChosenChatDetails = (chatType, chosenChatDetails) => {
  return {
    type: chatActions.SET_CHOSEN_CHAT_DETAILS,
    payload: {
      chatType,
      chosenChatDetails,
    },
  };
};

export const setMessages = (chatMessages) => {
  return {
    type: chatActions.SET_MESSAGES,
    payload: {
      chatMessages,
    },
  };
};

// ----------------------
// | Actions Generators |
// ----------------------
// There is no actions generators at the moments.

// -------------------
// | Package Actions |
// -------------------
export const getActions = (dispatch) => {
  return {
    // store access and modify
    setChosenChatDetails: (chatType, chosenChatDetails) =>
      dispatch(setChosenChatDetails(chatType, chosenChatDetails)),
    setMessages: (chatMessages) => dispatch(setMessages(chatMessages)),
  };
};

export default getActions;
