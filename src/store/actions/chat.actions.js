import { ChatActions } from '../actions.types/chat.actions.types';

export const setChosenChatDetails = (chatType, chosenChatDetails) => {
  return {
    type: ChatActions.SET_CHOSEN_CHAT_DETAILS,
    payload: {
      chatType,
      chosenChatDetails,
    },
  };
};

export const setMessages = (chatMessages) => {
  return {
    type: ChatActions.SET_MESSAGES,
    payload: {
      chatMessages,
    },
  };
};

// prettier-ignore
export const getActions = (dispatch) => {
  return {
    setChosenChatDetails: (chatType, chosenChatDetails) => dispatch(setChosenChatDetails(chatType, chosenChatDetails)),
    setMessages: (chatMessages) => dispatch(setMessages(chatMessages)),
  };
};
