import { chatActions } from '../actions/chatActions';

const initialState = {
  chatType: null,
  chosenChatDetails: null,
  chatMessages: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { chatType, chosenChatDetails, chatMessages } = payload || {};
  switch (type) {
    case chatActions.SET_CHOSEN_CHAT_DETAILS:
      return {
        ...state,
        chatType: chatType,
        chosenChatDetails: chosenChatDetails,
        chatMessages: [],
      };
    case chatActions.SET_MESSAGES:
      return {
        ...state,
        chatMessages,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;