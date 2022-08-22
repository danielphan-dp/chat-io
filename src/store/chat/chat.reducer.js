import { ChatActions } from './chat.actions.types';

const initialState = {
  chatType: null,
  chosenChatDetails: null,
  chatMessages: [],
};

const chatReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ChatActions.SET_CHOSEN_CHAT_DETAILS:
      return {
        ...state,
        chatType: payload.chatType,
        chosenChatDetails: payload.chosenChatDetails,
        chatMessages: [],
      };
    case ChatActions.SET_MESSAGES:
      return {
        ...state,
        chatMessages: payload.chatMessages,
      };
    default:
      return state;
  }
};

export default chatReducer;
